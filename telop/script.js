var gazobango = 0;
var bef = '0';
var nex = '0';
var mes = 0;

var myID = 'con';
var room = '雲雀祭体育部門';
var pw = 'kuroki';

var chat = document.getElementById("chat");
var ima = document.getElementById("ima");
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
async function sendauto(msg) {
  ws.send(JSON.stringify({ "to": room, "id": id, "message": msg }));
  offkiroku = 0;

  if (document.getElementById('autooff').checked) {
    if (msg == 0) {

    } else {
      if (offkiroku == 0) {
        await sleep(5000);
        zidou();
        offkiroku = 1;
      }

    }
  }


}

// チャット
async function addChat(id, msg) {
  if (msg == 'sendtest') {
  } else if (msg == 'Login') {
    ima.innerHTML = 'コントロールパネルに接続しました。表示されるまで少しお待ち下さい。'
    sendauto(gazobango);
    chat.innerHTML = gazobango
  } else if (id == 'con') {


    mes = Number(msg);
    ima.innerHTML = '<img src="./img/無題のプレゼンテーション-' + msg + '.png?ver=' + getDateTime() + '">';
    document.getElementById('tlurl').innerText = `./img/無題のプレゼンテーション-${msg} (テロップID：${msg})`
    chat.innerHTML = gazobango + chat.innerHTML;
  } else {
    console.log('a');
  }//else終わり
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

function before() {
  sendauto(mes - 1);
  gazobango = (mes - 1);
}

function next() {
  sendauto(mes + 1);
  gazobango = (mes + 1);
}


function setudanbosi() {
  sendauto('sendtest');
}

setInterval(setudanbosi, 10000);


let kaisu = 0;
while (kaisu < saidaitpsuu) {
  document.getElementById('itiran').innerHTML += `<img src="./img/無題のプレゼンテーション-${kaisu}.png" onclick="sendauto('${kaisu}')"> <br>`;
  kaisu = kaisu + 1;
}

function zidou() {
  sendauto(0);
}