var url = "https://script.google.com/macros/s/AKfycbwENWP3urhqmeZYLwSFNgghCP-SRuCr7UPmCcdcq84zckbC78Yx0lssLBgd_MV-Fhfp/exec"
var jdata = null;
var lng = 0;
var allp = 0;
var oid = 0;
var getid = 0;
var allpc = 0;
var allpn = 0;
var alltax = 0;
var dicpc = 0;
var cosmy = 0;
var endcosmy = 0;
var end_all_plc = 0;
var end_all_chg = 0;
var oturi = 0;
var crid = 1;
var erallno = 5;
pdlistred()
function modalOpen(windid, widthsize, height, hn) {
  //------------------------------------------------------------
  //  モーダルウインドウ オープン
  //------------------------------------------------------------
  document.getElementById(windid).className = "modalBg modalBgOpen";
  document.getElementById(`${windid}main`).setAttribute(`style`, `width: ${widthsize}; height: ${height};`);
  if (hn == 'none') {
    document.getElementById('header').setAttribute('style', 'display: none;');

  }
}

function modalClose(windid) {
  //------------------------------------------------------------
  //  モーダルウインドウ クローズ
  //------------------------------------------------------------
  document.getElementById(windid).className = "modalBg modalBgClose";
  document.getElementById('header').setAttribute('style', 'display: flex;')
}
function pdlistred(yn) {
  if (yn == 'yes') {
    document.getElementById('pdch').innerHTML = '<p class="column has-text-centered	">読込中<progress class="progress is-small is-link" max = "100"> 15 %</progress>';
  }

  var pdlistredparam = {
    "mode": "no-cors"
  };

  fetch(url).then(function (res) {
    return res.json();
  }).then(function (json) {
    let slou = '';
    let imgurlff = '';
    //処理 json.xxxx〜
    console.log(json);
    jdata = json;
    console.log(json.length);
    lng = json.length;
    document.getElementById('pdch').innerHTML = null;
    for (let i = 0; i < lng; i++) {
      restmath = json[i].Stock - json[i].Sold;

      slou = '';
      imgurlff = '';
      if (restmath < 1) {
        slou = '<span class="has-text-danger">売切</span>';
      } else if (restmath < 11) {
        slou = `<span class="has-text-link">残り${restmath}</span>`;
      }

      if (json[i].Imgurl == '') {
        imgurlff = `https://placehold.jp/24/cccccc/ffffff/200x200.png?text=${json[i].Name}`
      } else {
        imgurlff = json[i].Imgurl;
      }
      document.getElementById('pdch').innerHTML += `
        <div class="column">
        <a onclick="addlist(${json[i].id})" style="text-decoration: none;">

                  <div class="product box">
                      <div class="">
                        <div class="" width="">
                          <img src="${imgurlff}" alt="">
                        </div>
                        <div class="mycolumncon">
                          <p><strong>${json[i].Name}</strong></p>
                          <p>価格:${json[i].Price}円<br />税:${json[i].Tax}%<br / >${slou}</p>
                        </div>
                      </div>
                  </div>
                  </a>

                </div>
                `

    }
    console.log(json[10].Imgurl)

  });


}

const GetElement = (tree, targetKey, searchValue, childrenKey) => {
  let data = null;
  for (const i in tree) {
    if (tree[i][targetKey] == searchValue) {
      data = tree[i];
      break;
    }
  }

  if (data == null) {
    document.getElementById('researchedid').innerHTML = searchValue;
    modalOpen('notfound', '500px', '300px');
    //mplay('jannull');
  }

  return data;
}



function addlist(pdid) {
  if (GetElement(jdata, 'id', pdid) == null) {

  } else {
    getid = 'GID' + new Date().getTime();

    let postcon = [];



    let Price = GetElement(jdata, 'id', pdid).Price;
    let tax = GetElement(jdata, 'id', pdid).Tax;

    allp = allp + Price * (tax / 100) + Price;

    if (allp < 0) {
      document.getElementById('liqwinopbtn').disabled = true;
      document.getElementById('allp').innerHTML = `${allp}円　合計金額がマイナスです。`;
    } else {
      document.getElementById('liqwinopbtn').disabled = false;

      document.getElementById('allp').innerHTML = `合計:${allp}円`;

    }
    postcon =
    {
      logtyp: 'addlist',
      cr_id: crid,
      id: pdid,
      nosd: -1,
      oid: oid,
      gid: getid,
      price: Price,
      allp: allp,
    };


    //postForm(JSON.stringify(postcon));
    postForm(JSON.stringify(postcon, null, ' '));
    console.log((postcon))



    document.getElementById('pdlist').innerHTML += `
        <div class="box" id="${getid}">
        <div class="columns is-gapless">
          <div class="column ptlist listcenter">
            <p>${GetElement(jdata, 'id', pdid).Name}<br />${Price}円(+税${tax}%)</p>
          </div>
          <div class="column">
            <p class="is-size-3	 has-text-right">${Price * (tax / 100) + Price}円<a class="dlt	" onclick="dltlist(${pdid},${getid})"><span class="material-symbols-outlined">delete</span></a> </p>
          </div>
        </div>
      </div> 
        `
    console.log(getid);
  }
}

/*
function postForm(value) {

  var form = document.createElement('form');
  var request = document.createElement('input');

  form.method = 'POST';
  form.action = url;

  request.type = 'hidden'; //入力フォームが表示されないように
  request.name = '';
  request.value = value;

  form.appendChild(request);
  document.body.appendChild(form);

  form.submit();

}
*/
async function postForm(v) {
  new Promise(async (resolve, reject) => {
    console.log('postFormSS')
    var SendDATA = v;

    var postparam =
    {
      headers: {
        //Accept: "application/json",
        //"Content-Type": "application/json;charset=utf-8"
        "Content-Type": "application/json",
      },
      "method": "POST",
      "mode": "no-cors",
      //"Content-Type": "application/x-www-form-urlencoded",
      //"Content-Type": "application/json",
      "body": SendDATA
    };

    await fetch(url, postparam);
    resolve;
  })

  //console.log(SendDATA);
  //console.log(fetch(url, postparam));
  console.log('postFormEE')

  /*
    fetch(url, {
      method: 'POST',
      mode: "no-cors",
      body: JSON.stringify(v),
      //"Content-Type": "application/json"
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        // レスポンス json の処理
        console.log(json);
      })
      .catch(err => {
        // エラー処理
        console.log(err);
  
      });
  
  */
}


function dltlist(dlta, dltb) {
  let postcon = [];
  postcon =
  {
    cr_id: crid,
    logtyp: 'dltlist',
    id: dlta,
    nosd: 1,
    oid: oid,
    gid: dltb.id,
    Price: null,

  };
  postForm(JSON.stringify(postcon));
  let Price = GetElement(jdata, 'id', dlta).Price;
  let tax = GetElement(jdata, 'id', dlta).Tax;
  console.log(dlta)
  console.log(dltb.id);

  document.getElementById(dltb.id).remove();
  console.log(allp);
  console.log()
  allp = Number(allp) - Number(Price * (tax / 100) + Price);
  console.log(allp)
  if (allp < 0) {
    document.getElementById('liqwinopbtn').disabled = true;
    document.getElementById('allp').innerHTML = `${allp}円　合計金額がマイナスです。`;
  } else {
    document.getElementById('liqwinopbtn').disabled = false;

    document.getElementById('allp').innerHTML = `合計:${allp}円`;

  }
  document.getElementById('allp').innerHTML = `合計:${allp}円`;

}

function ynqu(title, con) {
  modalOpen('ynqu', '300px', '200px')
  document.getElementById('ynqutitle').innerHTML = title;
  document.getElementById('ynqucon').innerHTML = con;
  new Promise((resolve, reject) => {
    document.getElementById('ynquyes').addEventListener('click', () => {
      modalClose('ynqu');
      resolve('yes');
      return 'yes'
    });
    document.getElementById('ynquno').addEventListener('click', () => {
      modalClose('ynqu');
      reject('no')
      return 'no'
    });

  })



}
/*
async function kakunin() {
  const aaa = await ynqu('確認', '取引を中止しますか？')
  console.log(aaa)

}

kakunin()
*/

function liqwinop() {
  document.getElementById('liq_pay_all').innerHTML = allp;
  modalOpen('liqent', '50vw', '70vh');
}



function liqdis() {
  let oazukari = document.getElementById('liq_pay_pt').value;
  let ku_pon = document.getElementById('liq_pay_cp').value;
  oturi = Number(oazukari) - (Number(allp) - Number(ku_pon));
  document.getElementById('liq_pay_cng').innerHTML = oturi;

  if (oturi < 0) {
    document.getElementById('liq_pay_cng').innerHTML = `${-1 * oturi}円不足`;
    document.getElementById('finbto').disabled = true
  } else {
    document.getElementById('liq_pay_cng').innerHTML = oturi;
    document.getElementById('finbto').disabled = false;

  }
  /*
  endcosmy = oazukari;
  end_all_plc = Number(allp) - ku_pon;
  end_all_chg = Number(oturi);
  */
}

function payok() {
  document.getElementById('kliq_paych_pt').innerHTML = document.getElementById('liq_pay_pt').value;
  document.getElementById('liq_paych_all').innerHTML = document.getElementById('liq_pay_pt').value - oturi;
  document.getElementById('liq_paych_cng').innerHTML = oturi;
  modalOpen('paycheck', '500px', '450px');

}


function oninp(pay, price) {

  let change = pay - price,
    coinValue,
    coin = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1],
    result = {};
  if (change < 0) {
    return '支払不足';
  }
  for (v of coin) {
    coinValue = parseInt(v, 10);
    result[v] = Math.floor(change / coinValue);
    change -= result[v] * coinValue;
  }
  return JSON.stringify(result).replac1e(/,/g, ',\n').replac1e(/{|}/g, '');
}

function reset() {
  lng = 0;
  allp = 0;
  oid = 0;
  getid = 0;
  allpc = 0;
  allpn = 0;
  alltax = 0;
  dicpc = 0;
  cosmy = 0;
  endcosmy = 0;
  end_all_plc = 0;
  end_all_chg = 0;
  oturi = 0;
  document.getElementById('liq_pay_cp').value = null;
  document.getElementById('liq_pay_pt').value = null;
  document.getElementById('pdlist').innerHTML = null;
  document.getElementById('allp').innerHTML = null;
  document.getElementById('liq_pay_cng').innerHTML = null;
  document.getElementById('finbto').disabled = true;

}

function modalallclose() {
  modalClose('settings');
  modalClose('liqent');
  modalClose('paycheck');
  modalClose('ynqu');
  modalClose('dcansel');

}

function chackend() {
  let logcon = {
    cr_id: crid,
    logtyp: 'trcancel',
    other: '取引中止',
    lng: lng,
    allp: allp,
    oid: oid,
    getid: getid,
    allpc: allpc,
    allpn: allpn,
    alltax: alltax,
    dicpc: dicpc,
    cosmy: cosmy,
    endcosmy: endcosmy,
    end_all_plc: end_all_plc,
    end_all_chg: end_all_chg,
    oturi: oturi,
    dc_liq_pay_cp: document.getElementById('liq_pay_cp').value,
    dc_liq_pay_pt: document.getElementById('liq_pay_pt').value,
    dc_allp: document.getElementById('allp').innerHTML,
    dc_liq_pay_cng: document.getElementById('liq_pay_cng').innerHTML,
    dc_finbto: document.getElementById('finbto').disabled
  };

  postForm(JSON.stringify(logcon));
  pdlistred();
  reset();
  modalallclose();
  makeoid();

}

function paychackend() {
  let logcon = {
    cr_id: crid,
    logtyp: 'pay',
    lng: lng,
    allp: allp,
    oid: oid,
    getid: getid,
    allpc: allpc,
    allpn: allpn,
    alltax: alltax,
    dicpc: dicpc,
    cosmy: cosmy,
    endcosmy: endcosmy,
    end_all_plc: end_all_plc,
    end_all_chg: end_all_chg,
    oturi: oturi,
    dc_liq_pay_cp: document.getElementById('liq_pay_cp').value,
    dc_liq_pay_pt: document.getElementById('liq_pay_pt').value,
    dc_allp: document.getElementById('allp').innerHTML,
    dc_liq_pay_cng: document.getElementById('liq_pay_cng').innerHTML,
    dc_finbto: document.getElementById('finbto').disabled
  };

  postForm(JSON.stringify(logcon));
  chackend();
  makeoid();

}

function makeoid() {
  oid = `OID${new Date().getTime()}`
}

makeoid();



function QS(readtype) {
  Quagga.init({
    inputStream: {
      type: 'LiveStream',
      constraints: {
        //facingMode: 'auto'
        facing: "environment" // or user

      }
    },
    decoder: {
      readers: [{
        format: readtype,
        config: {}
      }]
    }
  }, (err) => {
    if (!err) {
      Quagga.start();
    }
  });
}
Quagga.onDetected((result) => {
  // ここでコードを受け取って、何かしらの処理(例えば、楽天市場APIを使用して商品検索等)
  qugaddlis(result.codeResult.code, 'camera');
});


function spdl() {
  Quagga.stop();

  document.getElementById('qugread').setAttribute('style', 'display: none;');
  document.getElementById('spdl').setAttribute('style', '');

  document.getElementById('spdlch').setAttribute('class', 'is-active');
  document.getElementById('qug13ch').setAttribute('class', '');
  document.getElementById('qug8ch').setAttribute('class', '');
}

function qug(rtype) {
  Quagga.stop();

  if (rtype == '13jan') {

    document.getElementById('spdlch').setAttribute('class', '');
    document.getElementById('qug13ch').setAttribute('class', 'is-active');
    document.getElementById('qug8ch').setAttribute('class', '');

    document.getElementById('qugread').setAttribute('style', '');
    document.getElementById('spdl').setAttribute('style', 'display: none;');
    QS('ean_reader');
  }

  if (rtype == '8jan') {

    document.getElementById('spdlch').setAttribute('class', '');
    document.getElementById('qug13ch').setAttribute('class', '');
    document.getElementById('qug8ch').setAttribute('class', 'is-active');

    document.getElementById('qugread').setAttribute('style', '');
    document.getElementById('spdl').setAttribute('style', 'display: none;');
    QS('ean_8_reader');
  }
  if (rtype == 'qr') {

  }

}

var chickcount = 0;
var code = null;
function qugaddlis(jan, c) {
  if (code == jan) {
    chickcount = chickcount + 1;
    code = jan;
  } else {
    chickcount = 0;
    code = jan;
  }
  if (chickcount >= erallno) {
    addlist(code);

  }
}


QS('ean_reader');
spdl()
Quagga.stop();
