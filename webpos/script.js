mplay('muon');
mplay('sousa');
mplay('kidou');

const Keyboard = window.SimpleKeyboard.default;

const myKeyboard = new Keyboard({
    onChange: input => onChange(input),
    onKeyPress: button => onKeyPress(button),
    layout: {
        'default': [
            '1 2 3 4 5 6 7 8 9 0 00 {bksp}',
            '{enter}'
        ],
        'shift': [
            '1 2 3 4 5 6 7 8 9 0 00 {bksp}',
            '{enter}'
        ]
    }
});

function onChange(input) {
    document.querySelector(".inputA").value = input;
    console.log("Input changed", input);
    kokei();
}

function onKeyPress(button) {
    console.log("Button pressed", button);
}


//alert('Javascript構文チェック完了');
function QS() {
    Quagga.init({
        inputStream: {
            type: 'LiveStream',
            constraints: {
                facingMode: 'auto'
            }
        },
        decoder: {
            readers: [{
                format: 'ean_reader',
                config: {}
            }]
        }
    }, (err) => {
        if (!err) {
            Quagga.start();
        }
    });
}

function kuriyomitori(janjan, tipe) {
    yomitori(janjan, tipe);
    yomitori(janjan, tipe);
    yomitori(janjan, tipe);
    yomitori(janjan, tipe);
    yomitori(janjan, tipe);
    yomitori(janjan, tipe);
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

var mc = [{
    "jancode": "4957812561075",
    "name": "ヤマハ　クリーニングペーパー",
    "namehuri": "やまは　くりーにんぐぺーぱー",
    "place": "455",
    "tax": "10",
    "maker": "ヤマハ"
}, {
    "jancode": "0000000000000",
    "name": "テスト用商品＼(^o^)／",
    "namehuri": "てすとようしょうひんにこにこ",
    "place": "0",
    "tax": "0",
    "maker": "はまたく。ウェブツール開発チーム"
}];

var kattakazu = 0;
var chickcount = 0;
var code = 'ankohaoisiiyo';
var mae = 'ankohaoisiiyo';
var sougaku = 0;
var syoukeisougoukingaku = 0;
var saisyuuoazukarikingaku = 0;
var saisyuusougoukingaku = 0;
var saisyuuoturikingaku = 0;
var kanriid = 0;
var kirisutesougaku = 0;
var okyakusamaid = 0;
var posid = 1;
var janal_sougouuriage = 0;
var posdata = [];


posdata.push(
    [
        {
            "posID": posid,
            "startdate": new Date().getTime,
            "webposVar": "3.0.4"
        }
    ]);
alert(posdata);

//Async Function として定義
async function syouhinsyutoku() {
    const response = await fetch('https://raw.githubusercontent.com/hamatakuyaei/hamatakuyaei.github.io/main/webpos/syohin/syouhin.json?6'); //await で fetch() が完了するまで待つ
    return await response.json(); //await で response.json() が完了するまで待つ
}

function syouhintouroku(jan) {
    if (okyakusamaid == 0) {
        okyakusamaid = 'OID' + new Date().getTime();

        posdata.push(
            okyakusamaid[
            {
                "kounyuusyaID": okyakusamaid
            }
            ]);
    }
    kanriid = new Date().getTime();
    document.getElementById('naka').innerHTML = jan;
    chickcount = 0;
    let aiueo = GetElement(mc, 'jancode', jan, 'name');
    let zeikomi = (((Number(aiueo.place)) * ((Number(aiueo.tax)) / 100)) + Number(aiueo.place));
    kattakazu = kattakazu + 1;
    mae = jan;
    sougaku = (Number(sougaku) + zeikomi);
    kirisutesougaku = Math.floor(sougaku)
    document.getElementById('kekka').innerHTML =
        `<tr id="${kanriid}"><th class="nop">${kattakazu}</th><th>${aiueo.name}</th><th>${aiueo.place}</th><th id="K${kanriid}">${zeikomi}</th><th class="nop">${aiueo.jancode}</th><th><a class="nop" onclick="uriagesakuzyo(${kanriid})"><span class="material-symbols-outlined">delete</span></a></th></tr>
    ${document.getElementById('kekka').innerHTML}`;

    posdata.push([
        {
            "okyakusamaID": okyakusamaid,
            "kounyuuID": kanriid,
            "jancode": aiueo.jancode,
            "shohinname": aiueo.name,
            "place": aiueo.place,
            "tax": aiueo.tax
        }
    ]);

    document.getElementById('goukeitensuu').innerHTML = kattakazu;
    document.getElementById('kaikei-sougou-tensuu').innerHTML = kattakazu;
    document.getElementById('goukeikingaku').innerHTML = numjp(kirisutesougaku);
    document.getElementById('kaikei-sougou-syoukei').innerHTML = numjp(kirisutesougaku);
    document.getElementById('kaikei-sougou-goukei').innerHTML = numjp(kirisutesougaku);
    document.getElementById('kaikei-kessai-goukei').innerHTML = numjp(kirisutesougaku);
    syoukeisougoukingaku = Math.floor(sougaku);
    // alert(numjp(kirisutesougaku));
}


async function jsonyomitori() {
    let result = await syouhinsyutoku();
    //    alert(await syouhinsyutoku());
    mc = result;
    alert(mc);
    mplay('kidou')
}

jsonyomitori();


yomitori('0000000000000');


async function yomitori(jan, gosa) {

    if (gosa == 'camera') {
        // ここでコードを受け取って、何かしらの処理(例えば、楽天市場APIを使用して商品検索等)
        document.getElementById('naka').innerHTML = jan;
        if (code == jan) {
            chickcount = chickcount + 1;
            code = jan;
        } else {
            chickcount = 0;
            code = jan;
        }
        if (chickcount >= 5) {
            if (mae == jan) {
                mplay('samecode');
                document.getElementById('douitukakunnin').innerHTML = jan;
            }
            mplay('pi');

            syouhintouroku(jan);

            document.getElementById('yomitorityu').innerHTML = '処理中。かざしても反応は有りません。';
            Quagga.stop();
            await sleep(500);
            QS();
            document.getElementById('yomitorityu').innerHTML =
                '読み取り中。カメラにバーコードをかざしてください。';
        }
    } else {

        if (mae == jan) {
            mplay('samecode');
            document.getElementById('douitukakunnin').innerHTML = jan;
        }
        mplay('pi');


        syouhintouroku(jan);


    }
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
        modalOpen('notfound');
        mplay('jannull');
    }

    return data;
}


Quagga.init({
    inputStream: {
        type: 'LiveStream',
        constraints: {
            facingMode: 'auto'
        }
    },
    decoder: {
        readers: [{
            format: 'ean_reader',
            config: {}
        }]
    }
}, (err) => {
    if (!err) {
        Quagga.start();
    }
});


Quagga.onDetected((result) => {
    // ここでコードを受け取って、何かしらの処理(例えば、楽天市場APIを使用して商品検索等)
    yomitori(result.codeResult.code, 'camera');
});

yomitori('0000000000000');


function modalOpen(area) {
    //------------------------------------------------------------
    //  モーダルウインドウ オープン
    //------------------------------------------------------------
    document.getElementById(area).className = "modalBg modalBgOpen";
}

function modalClose(area) {
    //------------------------------------------------------------
    //  モーダルウインドウ クローズ
    //------------------------------------------------------------
    document.getElementById(area).className = "modalBg modalBgClose";
}

function phoo() {
    //------------------------------------------------------------
    //  モーダルウインドウ オープン
    //------------------------------------------------------------
    document.getElementById("pho").className = "modalBg modalBgOpen";
}

function phoc() {
    //------------------------------------------------------------
    //  モーダルウインドウ クローズ
    //------------------------------------------------------------
    document.getElementById("pho").className = "modalBg modalBgClose";
}


function jannyuuryokuyou() {
    yomitori(document.getElementById('jansyunyu').value);
}

document.getElementById('jannyuukettei').addEventListener('click',
    jannyuuryokuyou);


function mplay(mname) {
    new Audio('audio/' + mname + '.mp3').play();
}

function janimput() {
    let result = window.prompt("jancodeを入力してください。");
    yomitori(result);
}

function kokei() {
    modalOpen('syoukeikekka');
    let oazukari = document.getElementById('kaikei_kessai_oazukari').value;
    let ku_pon = document.getElementById('kaikei-kessai-kupon').value;
    let oturi = Number(oazukari) - Number(ku_pon) - Number(syoukeisougoukingaku);
    document.getElementById('kaikei-kessai-oturi').innerHTML = oturi;
    Quagga.stop();
    saisyuuoazukarikingaku = oazukari;
    saisyuusougoukingaku = Number(syoukeisougoukingaku) - ku_pon;
    saisyuuoturikingaku = Number(oturi);
    document.getElementById('syousaikekka_dl').show();
}



function kaikeimodoru() {
    modalClose('syoukeikekka');
    QS();
    document.getElementById('syousaikekka_dl').close();
}

function kaikeikettei() {
    mplay('kaikeikakunin');
    modalOpen('kessaikakunin');
    document.getElementById('kessaichack-oazukari').innerHTML = numjp(saisyuuoazukarikingaku);
    document.getElementById('kessaichack-goukei').innerHTML = numjp(saisyuusougoukingaku);
    document.getElementById('kessaichack-oturi').innerHTML = numjp(saisyuuoturikingaku);
}

function torihikiyuusi() {
    mplay('tyuusisimasu');
    restart();
    posdata.push([{
        "okyakusamaID": okyakusamaid,
        "tipe": "torihikityuusi",
    }]);
}

function restart() {
    kattakazu = 0;
    chickcount = 0;
    code = 'ankohaoisiiyo';
    mae = 'ankohaoisiiyo';
    sougaku = 0;
    kirisutesougaku = 0;
    syoukeisougoukingaku = 0;
    saisyuuoazukarikingaku = 0;
    saisyuusougoukingaku = 0;
    saisyuuoturikingaku = 0;
    document.getElementById('kekka').innerHTML = '';
    modalClose('kessaikakunin');
    modalClose('syoukeikekka');
    modalClose('notfound');
    modalClose('torihikityuusikakunin');
    okyakusamaid = 0;
}


function uriagesakuzyo(event) {
    try {
        if (window.confirm(`商品登録ID${event}のスキャン(売上登録)を取り消します。よろしいですか。`)) {

            alert(Number(document.getElementById(`K${event}`).innerHTML));
            posdata.push([{
                "okyakusamaID": okyakusamaid,
                "tourokuID": event,
                "tipe": "uriagetourokucancel",
            }]);

            sougaku = sougaku - Number(document.getElementById(`K${event}`).innerHTML);
            kirisutesougaku = Math.floor(sougaku);
            kattakazu = kattakazu - 1
            document.getElementById(event).remove();
            document.getElementById('goukeitensuu').innerHTML = kattakazu;
            document.getElementById('kaikei-sougou-tensuu').innerHTML = kattakazu;
            document.getElementById('goukeikingaku').innerHTML = numjp(kirisutesougaku);
            document.getElementById('kaikei-sougou-syoukei').innerHTML = numjp(kirisutesougaku);
            document.getElementById('kaikei-sougou-goukei').innerHTML = numjp(kirisutesougaku);
            document.getElementById('kaikei-kessai-goukei').innerHTML = numjp(kirisutesougaku);
            syoukeisougoukingaku = Math.floor(sougaku);

        }

    } catch (e) {
        alert(e);
    }
}

function numjp(x) {
    return x.toLocaleString('ja-JP');
}

function nobcode(code) {
    yomitori(code);
    modalClose('janreserch');
}

function kessaikannryou() {
    janal_sougouuriage = janal_sougouuriage + saisyuusougoukingaku;
    posdata.push(
        okyakusamaid[
        {
            "kaikeiID": okyakusamaid,
            "POSid": posid,
            "oshiharaikingaku": saisyuuoazukarikingaku,
            "ryoukinkokei": saisyuusougoukingaku,
            "oturi": saisyuuoturikingaku
        }
        ]
    )
    restart();
}

document.getElementById('dllnk').addEventListener('click', (event) => {


    // JSON ファイルを表す Blob オブジェクトを生成
    const json = JSON.stringify(posdata, null, 2);
    const blob = new Blob([json], { type: 'application/json' });

    // a 要素の href 属性に Object URL を セット
    event.currentTarget.href = window.URL.createObjectURL(blob);
});

function dllnk() {
    // JSON ファイルを表す Blob オブジェクトを生成
    const json = JSON.stringify(posdata, null, 2);
    const blob = new Blob([json], { type: 'application/json' });

    // a 要素の href 属性に Object URL を セット
    document.getElementById('dllnk').href = window.URL.createObjectURL(blob);
}
