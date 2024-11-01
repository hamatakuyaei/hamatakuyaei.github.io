var jsqron = true;
var tmpprz = {
    ptiketid: null,//チケットID
    pavailable: null,//有効かどうか
    pdistance: null,//飛距離
    pdaycom: null,//日替わり種目種別
    pdaycomrenge: null,//日替わり種目点数
    przkind: null,//景品種類
    przgive: null,//景品譲渡
    jobg: null,//JobGroup
    jobid: null//JobID
}

var tmpjobg = [];
var tmpprznm = null;
var jobgnam = 0;
var tmpprzbtnid = null;
var beforetiketid = null;

startqrjs()
function startqrjs() {
    // Webカメラの起動
    const video = document.getElementById('video');
    let contentWidth;
    let contentHeight;

    const media = navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 640, height: 480 } })
        .then((stream) => {
            video.srcObject = stream;
            video.onloadeddata = () => {
                video.play();
                contentWidth = video.clientWidth;
                contentHeight = video.clientHeight;
                canvasUpdate(); // 次で記述
                checkImage(); // 次で記述
            }
        }).catch((e) => {
            console.log(e);
        });

    // カメラ映像のキャンバス表示
    const cvs = document.getElementById('camera-canvas');
    const ctx = cvs.getContext('2d');
    const canvasUpdate = () => {
        cvs.width = contentWidth;
        cvs.height = contentHeight;
        ctx.drawImage(video, 0, 0, contentWidth, contentHeight);
        requestAnimationFrame(canvasUpdate);
    }
    // QRコードの検出
    const rectCvs = document.getElementById('rect-canvas');
    const rectCtx = rectCvs.getContext('2d');
    const checkImage = () => {

        if (jsqron == true) {

            // imageDataを作る
            const imageData = ctx.getImageData(0, 0, contentWidth, contentHeight);
            // jsQRに渡す
            const code = jsQR(imageData.data, contentWidth, contentHeight);

            // 検出結果に合わせて処理を実施
            if (code) {

                console.log("QRcodeが見つかりました", code.data);

                geturltodata(code.data)

            } else {
                console.log("QRcodeが見つかりません…", code);
                rectCtx.clearRect(0, 0, contentWidth, contentHeight);
            }
        }
        setTimeout(() => { checkImage() }, 500);
    }
}
function geturltodata(url) {
    swqrreader('off')
    try {
        // 文字列としてURLを取得する。
        let url_string = url;
        // 文字列としてのURLをURLオブジェクトに変換する。
        let urldata = new URL(url_string);
        // URLオブジェクトのsearchParamsのget関数でIDがdの値を取得する。
        let data = urldata.searchParams.get("tid");
        gettiketdata(data)
    } catch (error) {
        alert(error)
        swqrreader('')
    }

}
function gettiketdata(tiketid) {
    syslog('チケット情報取得中')
    dg('r_tiket').innerHTML = tiketid
    const xhrh = new XMLHttpRequest();
    xhrh.open("GET", `https://script.google.com/macros/s/AKfycbwIabL-HTxJw-XiqJW5BMZB3HKluYmcB4ftQ4lJEwGWsyxcVCsxpRBGl7K61crdj5RGrg/exec?tiketid=${tiketid}`);
    xhrh.send();
    //xhr.responseType = "html";
    xhrh.onload = () => {
        syslog('チケット情報取得完了')

        console.log(xhrh);
        // let hairethu = JSON.stringify(xhrh.response)
        var hairethu = JSON.parse((xhrh.response).replace(/\\/g, ''));
        if (document.getElementById('r_tiket').textContent == hairethu[0].tiketid) {
            console.log(hairethu)
            sethtmltable(hairethu)
        }

    };
}
async function postForm(v) {

    console.log(JSON.parse(v))
    console.log('senddata')
    var postjobg = (JSON.parse(v))[0].jobg;//vからジョブグループ取得1;
    syslog(`ジョブグループ[${postjobg}]データ送信中`)

    let url = 'https://script.google.com/macros/s/AKfycbxic2zvvsNIMRZUVgrc0e1oyvx9K5xKU0jSSYwWzpAzizpPPfn2S9XBGlwmxLHSVUy7hA/exec'
    new Promise(async (resolve, reject) => {
        console.log('postFormSS')
        var SendDATA = v;
        var postparam =
        {
            headers: {
                "Content-Type": "application/json",
            },
            "method": "POST",
            "mode": "no-cors",
            "body": SendDATA
        };

        await fetch(url, postparam).then(response => {
            response.text()
            console.log(response);
        })
            .then(data => {
                var result = data;
                console.log(result);
                console.log(postjobg);
                syslog(`ジョブグループ[${postjobg}]データ送信完了`)

                postok(postjobg)
            });
        resolve;
    })
    console.log('postFormEE')
}

function postok(jbg) {
    document.getElementsByClassName(`jg${jbg}`)[0].classList.add('nodisply');
    document.getElementsByClassName(`jg${jbg}`)[1].classList.add('nodisply');
    document.getElementsByClassName(`jg${jbg}`)[2].classList.add('nodisply');
    document.getElementsByClassName(`jg${jbg}`)[3].classList.add('nodisply');
    document.getElementsByClassName(`jg${jbg}`)[4].classList.add('nodisply');
}

function sethtmltable(ary) {
    //左下情報欄表示関数
    var hairethu = ary
    //document.getElementById('daycom').options[(hairethu[0].daycom - 1)].selected = true;
    dg('r_tiket').innerHTML = hairethu[0].tiketid;
    dg('r_distance').innerHTML = hairethu[0].distance;
    dg('r_daycomrenge').innerHTML = hairethu[0].daycomrenge;

    if (hairethu[0].daycom == 1) {
        dg('r_daycom').innerHTML = 'クレー射撃だったもの'

    } else if (hairethu[0].daycom == 2) {
        dg('r_daycom').innerHTML = 'カーリング'
    } else {
        dg('r_daycom').innerHTML = '未指定'

    }

    console.log(hairethu[0].rzgive)

    if (hairethu[0].rzgive == true) {
        dg('r_rzgive').innerHTML = 'はい'

    } else if (hairethu[0].rzgive == '') {
        dg('r_rzgive').innerHTML = '未記入'
    } else {

    }


}
function dg(id) {//document.getElementByIdを簡略化する関数
    return document.getElementById(id)
}

function swqrreader(of) {
    //QRコード読み取り欄をON/OFFする
    if (of == 'off') {
        dg('qrreaded').classList.remove('nodisply');
        dg('wrapper').classList.add('nodisply');
        syslog(`QR読み取りシステムOFF`)

        jsqron = false
    } else {
        console.log('qrjs_on')
        dg('qrreaded').classList.add('nodisply');
        dg('wrapper').classList.remove('nodisply');
        jsqron = true
        syslog(`QR読み取りシステムON`)

    }
}


function selectprzbtn(przno) {
    //景品選択ボタンから景品を選ぶ関数
    dg(`przbtn1`).classList.remove('is-focused')
    dg(`przbtn2`).classList.remove('is-focused')
    dg(`przbtn3`).classList.remove('is-focused')
    dg(`przbtn4`).classList.remove('is-focused')
    dg(`przbtn5`).classList.remove('is-focused')
    dg(`przbtn6`).classList.remove('is-focused')
    dg(`przbtn7`).classList.remove('is-focused')
    dg(`przbtn8`).classList.remove('is-focused')
    //delete tmpprz.przkind
    tmpprznm = przno;
    console.log(tmpprz)
    dg(`przbtn${przno}`).classList.add('is-focused')
}

function newjobg() {//jobグループ
    if (tmpjobg.length % 5 == 0) {
        jobgnam = jobgnam + 1;
        console.log(`newjobgr${jobgnam}`)
    } else {

    }
    return jobgnam
}



function addjoblist() {
    console.log('addjoblist1')

    if (dg('w_distance').value == "" || dg('w_daycomrenge').value == "") {
        console.log('addjoblist2')

        if (window.confirm("値が入力されていません。続行しますか？")) {
            addjoblist_confim()
            frontreset()
        }
    } else {
        console.log('addjoblist3')

        addjoblist_confim()
        frontreset()
    }

}

function addjoblist_confim() {
    let newjobid = new Date().getTime();
    let tmpnewjobg = newjobg();
    dg('joblist').innerHTML += `
    <div class="box jg${tmpnewjobg}" id="jg${tmpnewjobg}">
                <div class="column">TID:${document.getElementById('r_tiket').textContent}</div>
                    <div class="columns">
                        <div class="column title mb-0">景${tmpprznm}</div>
                        <div class="column">JobID:${newjobid}<br>JobGroup:${tmpnewjobg}</div>
        </div>
    </div>
    `

    tmpjobg.push({
        ptiketid: document.getElementById('r_tiket').textContent,
        pavailable: true,
        pdistance: dg('w_distance').value,
        pdaycom: dg('w_daycom').value,
        pdaycomrenge: dg('w_daycomrenge').value,
        jobg: tmpnewjobg,
        jobid: newjobid,
        przkind: tmpprznm,
        entertime: null,
        prztime: new Date()
    })


    swqrreader('')

    console.log(tmpjobg)
    /*
        tmpprz.ptiketid = null;
        tmpprz.pavailable = null;
        tmpprz.pdistance = null
        tmpprz.pdaycom = null
        tmpprz.pdaycomrenge = null
        tmpprz.jobg = null
        tmpprz.jobid = null
        */
    judpost();

}

console.log(document.getElementById('r_tiket').textContent)


function judpost() {

    tmpprz.ptiketid = null;
    tmpprz.pavailable = null;
    tmpprz.pdistance = null
    tmpprz.pdaycom = null
    tmpprz.pdaycomrenge = null
    tmpprz.jobg = null
    tmpprz.jobid = null

    if (tmpjobg.length >= 5) {
        postForm(JSON.stringify(tmpjobg));
        tmpjobg.splice(0);
        return 'startpost'
    } else {
        return 'nopost'
    }


}
/*
  {
  "ptiketid": "3a9df81c-f932-4531-b020-a62b5dd7349d",//チケットID
  "pavailable": true,//有効かどうか
  "pdistance" : 2,//飛距離
  "pdaycom":3,//日替わり種目種別
  "pdaycomrenge":4,//日替わり種目点数
  "przkind":5,//景品種類
    "przgive":6//景品譲渡
 }


*/


function frontreset() {
    dg('r_tiket').innerHTML = '';
    dg('r_distance').innerHTML = '';
    dg('r_daycomrenge').innerHTML = '';
    dg('r_daycom').innerHTML = '';
    dg('r_rzgive').innerHTML = '';

    dg('w_distance').value = '';
    dg('w_daycomrenge').value = '';

    dg(`przbtn1`).classList.remove('is-focused')
    dg(`przbtn2`).classList.remove('is-focused')
    dg(`przbtn3`).classList.remove('is-focused')
    dg(`przbtn4`).classList.remove('is-focused')
    dg(`przbtn5`).classList.remove('is-focused')
    dg(`przbtn6`).classList.remove('is-focused')
    dg(`przbtn7`).classList.remove('is-focused')
    dg(`przbtn8`).classList.remove('is-focused')

    document.getElementById('w_daycom').options[0].selected = false;
    document.getElementById('w_daycom').options[1].selected = false;


    swqrreader()

}

function restjobsend() {
    postForm(JSON.stringify(tmpjobg));
    tmpjobg.splice(0);
}

frontreset()

function syslog(msg) {
    dg('sysmsg').innerHTML = msg;
}

window.addEventListener('beforeunload', function (event) {
    event.preventDefault() // (1)
    event.returnValue = '' // (2)
})
