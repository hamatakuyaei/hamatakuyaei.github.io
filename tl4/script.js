var gazobango = 0;
var bef = '0';
var nex = '0';
var mes = 0;

var myID = 'con';
var room = '雲雀祭体育部門';
var pw = 'kuroki';

var chat = document.getElementById("chat");
var ima4 = document.getElementById("ima4");
var ima3 = document.getElementById("ima3");
var ima2 = document.getElementById("ima2");
var ima1 = document.getElementById("ima1");

var itiran = document.getElementById("itiran");
var mae = document.getElementById("mae");

var saidaitpsuu = 100;

var setudan = '';
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ID生成
let id = myID;
document.getElementById("id").innerHTML = 'ID : ' + id;
// WS接続（Achexへ接続）
ws = new WebSocket("wss://cloud.achex.ca/chat");
// WS接続
ws.onopen = e => {
  console.log('open');
  chat.innerHTML = 'You ID : ' + id + '（' + getDateTime() + '）';
  // 認証（auth, passwordは何でもOK）
  ws.send(JSON.stringify({ "auth": room, "password": pw }));
  // 
  ws.send(JSON.stringify({ "to": room, "id": id, "message": 'Login' }));
}
// メッセージ受信
ws.onmessage = e => {
  console.log('message');
  console.log(e);
  var obj = JSON.parse(e.data);
  if (obj.auth == 'OK') {
    // 認証OK
    return;
  }
  addChat(obj.id, obj.message);
}
// WS切断
ws.onclosed = e => {
  console.log('closed');
  ws.send(JSON.stringify({ "to": room, "id": id, "message": 'Logout' }));
}
// 手動コマンド送信
function sendChat() {
  let msgElem = document.getElementById("msg");
  let msg = msgElem.value;
  msgElem.value = "";
  ws.send(JSON.stringify({ "to": room, "id": id, "message": msg }));
}



let offkiroku = 0;

// 自動送信
async function sendauto(tl, no) {
  ws.send(JSON.stringify({ "to": room, "id": tl, "message": no }));
  offkiroku = 0;
}

// チャット
async function addChat(id, msg) {
  if (msg == 'sendtest') {
  } else if (msg == 'Login') {
    ima4.innerHTML = 'websoket接続。送出待機中。'
    ima3.innerHTML = 'websoket接続。送出待機中。'
    ima2.innerHTML = 'websoket接続。送出待機中。'
    ima1.innerHTML = 'websoket接続。送出待機中。'
    sendauto('con', gazobango);
    chat.innerHTML = gazobango
  } else if (id == 'tl4') {
    mes = Number(msg);
    ima4.innerHTML = '<img src="./img/tl4/無題のプレゼンテーション-' + msg + '.png?ver=' + getDateTime() + '">';
    chat.innerHTML = gazobango + chat.innerHTML;

  } else if (id == 'tl3') {
    mes = Number(msg);
    ima3.innerHTML = '<img src="./img/tl3/無題のプレゼンテーション-' + msg + '.png?ver=' + getDateTime() + '">';
    chat.innerHTML = gazobango + chat.innerHTML;
  } else if (id == 'tl2') {
    mes = Number(msg);
    ima2.innerHTML = '<img src="./img/tl2/無題のプレゼンテーション-' + msg + '.png?ver=' + getDateTime() + '">';
    chat.innerHTML = gazobango + chat.innerHTML;
  } else if (id == 'tl1') {
    mes = Number(msg);
    ima1.innerHTML = '<img src="./img/tl1/無題のプレゼンテーション-' + msg + '.png?ver=' + getDateTime() + '">';
    chat.innerHTML = gazobango + chat.innerHTML;
  }
  //else終わり
  document.getElementById('sutetasu').innerText = `[${id}]:${msg}(${getDateTime()})`
  chat.innerHTML = '<span class="small">' + id + '</span> :<span class="msg"> ' + msg + '</span><span class="time">（' + getDateTime() + '）</span>' + '<br>' + chat.innerHTML;
}


// 1桁の数字を0埋めで2桁にする
var toDoubleDigits = function (num) {
  num += "";
  if (num.length === 1) {
    num = "0" + num;
  }
  return num;
};
// 日時取得 YYYY/MM/DD HH:DD:MI:SS形式で取得
var getDateTime = function () {
  var date = new Date();
  var year = date.getFullYear();
  var month = toDoubleDigits(date.getMonth() + 1);
  var day = toDoubleDigits(date.getDate());
  var hour = toDoubleDigits(date.getHours());
  var min = toDoubleDigits(date.getMinutes());
  var sec = toDoubleDigits(date.getSeconds());
  return year + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + sec;
};



function setudanbosi() {
  sendauto('con', 'sendtest');
}

setInterval(setudanbosi, 10000);


let kaisu4 = 0;
while (kaisu4 < saidaitpsuu) {
  document.getElementById('itiran4').innerHTML += `<img src="./img/tl4/無題のプレゼンテーション-${kaisu4}.png" onclick="sendauto('tl4','${kaisu4}')"> <br>`;
  kaisu4 = kaisu4 + 1;
}

let kaisu3 = 0;
while (kaisu3 < saidaitpsuu) {
  document.getElementById('itiran3').innerHTML += `<img src="./img/tl3/無題のプレゼンテーション-${kaisu3}.png" onclick="sendauto('tl3','${kaisu3}')"> <br>`;
  kaisu3 = kaisu3 + 1;
}

let kaisu2 = 0;
while (kaisu2 < saidaitpsuu) {
  document.getElementById('itiran2').innerHTML += `<img src="./img/tl2/無題のプレゼンテーション-${kaisu2}.png" onclick="sendauto('tl2','${kaisu2}')"> <br>`;
  kaisu2 = kaisu2 + 1;
}

let kaisu1 = 0;
while (kaisu1 < saidaitpsuu) {
  document.getElementById('itiran1').innerHTML += `<img src="./img/tl1/無題のプレゼンテーション-${kaisu1}.png" onclick="sendauto('tl1','${kaisu1}')"> <br>`;
  kaisu1 = kaisu1 + 1;
}

function zidou(tl) {
  sendauto(tl, 0);
}


//--------------------[以下地震情報確認システムのプログラム]--------------------
//エラーメモ。
/*
'xxx' is declared but its value is never read.ts(6133)
というエラーは、宣言したが、プログラム内では使われていない（検索をかけると、宣言したところの変数のみ（１件）しか検索結果に入らない。）
エラー。プログラム内で使うと治る。

*/


var UURL = 'wss://api-realtime-sandbox.p2pquake.net/v2/ws';
//wss://api.p2pquake.net/v2/ws
//api-realtime-sandbox.p2pquake.net/v2
console.log('せつぞくするよ');
let con = document.getElementById('kinnkyu').innerHTML;
document.getElementById('kinnkyu').innerHTML = 'P2Pquake WebSocketサーバー接続開始';
let connection = new WebSocket(UURL);
console.log('せつぞくしたよ');
document.getElementById('kinnkyu').innerHTML = 'P2Pquake WebSocketサーバー接続';

//通信が接続された場合
connection.onopen = function (e) {
  document.getElementById('kinnkyu').innerHTML = 'P2Pquake WebSocketサーバー通信応答完了。地震発生イベントメッセージ返答待機中';
  console.log('通信成功！　メッセージ待ってまーす。');
  // let text = document.getElementById('hama').innerHTML;
  //document.getElementById('hama').innerHTML = '現在地震はありません。';
  //JOSN取得
  console.log(e.data);
};

//エラーが発生した場合
connection.onerror = function (error) {
  console.log('えらあはっせいちゆう');
  document.getElementById('kinnkyu').innerHTML = 'P2Pquake WebSocketサーバー通信エラー発生';

};
//通信が切断された場合
connection.onclose = function () {
  document.getElementById('kinnkyu').innerHTML = 'P2Pquake WebSocketサーバー通信切断（タイムアウト）';
};


//メッセージを受け取った場合
connection.onmessage = function (e) {
  console.log('めつせいじうけとつたよ！');
  console.log(e.data);
  var object1 = JSON.parse(e.data);
  console.log(object1);
  //コード取得
  var codo1 = (object1.code);
  console.log(codo1);
  document.getElementById('kinnkyu').innerHTML = 'コード' + codo1 + 'でメッセージ返答';


  if (codo1 == 555) {
    document.getElementById('kinnkyu').innerHTML = 'p2pquakeから受信・各地域別接続ピア数';
  }
  else {

    if (codo1 == 554) {
      let text = document.getElementById('kinnkyu').innerHTML;
      document.getElementById('kinnkyu').innerHTML = '緊急地震速報（予報）';

    }//554end

    if (codo1 == 551) {
      //震央までの深さ（KM）
      var hukasa = (object1.earthquake.hypocenter.depth);
      console.log(hukasa);
      //名前
      var meisyou = (object1.earthquake.hypocenter.name);
      console.log(meisyou);
      //マグニチュード
      var maguni = (object1.earthquake.hypocenter.magnitude);
      console.log(maguni);
      //緯度
      var ido = (object1.earthquake.hypocenter.latitude);
      console.log(ido);
      //経度
      var keido = (object1.earthquake.hypocenter.longitude);
      console.log(keido);
      //最大震度（1/10）
      var maxsindo = (object1.earthquake.maxScale);
      console.log(maxsindo);
      //発生時刻
      var hasseit = (object1.earthquake.time);
      console.log(hasseit);
      //国内津波
      var hasseitsumami = (object1.earthquake.domesticTsunami)
      var tunamisinpai = null;
      if (hasseitsumami == 'None') {
        tunamisinpai = 'この地震による津波の心配はありません。';
      }


      //document.getElementById('kinnkyu').innerHTML = '地震情報：' + meisyou + 'で、マグニチュード' + maguni + '、最大震度' + maxsindo + '、発生時刻' + hasseit + 'の地震が発生しました。';
      document.getElementById('kinnkyu').innerText = `地震情報: ${hasseit}頃、${meisyou}で、最大震度${maxsindo}、マグニチュード${maguni}の地震が発生しました。${tunamisinpai}`;

    }//551end

    if (codo1 == 561) {
      var kinsingenti = (object1.earthquake.hypocenter.name);
      console.log(kinsingenti);
      var kinhasseit = (object1.earthquake.originTime);
      console.log(kinhasseit);
      //      var kinido = (object1.earthquake.hypocenter.latitude);
      //      var kinkeido = (object1.earthquake.hypocenter.longitude);
      //      var kinhukasa = (object1.earthquake.hypocenter.depth);
      var kinmagu = (object1.earthquake.hypocenter.magnitude);
      var kinmaxsin = (object1.areas[0].scaleTo);
      var kinms2 = '';

      if (kinmaxsin == 45) {
        kinms2 = '5弱';
      }
      if (kinmaxsin == 50) {
        kinms2 = '5強';
      }
      if (kinmaxsin == 55) {
        kinms2 = '6弱';
      }
      if (kinmaxsin == 60) {
        kinms2 = '6強';
      }
      if (kinmaxsin == 70) {
        kinms2 = '7';
      }

      document.getElementById('kinnkyu').innerHTML = '緊急地震速報、緊急地震速報。' + kinsingenti + 'で、マグニチュード' + kinmagu + '、最大震度' + kinms2 + '、発生時刻' + kinhasseit + 'の地震が発生しました。';
    }//561end
  }//555ではない終了
};//メッセージ受信した場合　終了

