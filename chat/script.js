function push(title, cen) {

  var check = document.getElementById("switch1");
  if (check.checked) {

    // チェックあり の場合
    Push.Permission.request();
    Push.create(title, {
      body: cen,
      icon: 'https://hamachan1923.github.io/chat.png',
      timeout: 8000, // 通知が消えるタイミング
      vibrate: [100, 100, 100], // モバイル端末でのバイブレーション秒数
      //onClick: function() {// 通知がクリックされた場合の設定window.open('https://google.com', '_blank'); // 新しいタブを開き、ページを表示}
    });
  }
  else {
    // チェックなし の場合
  }
}

let url = new URL(window.location.href);// URLを取得
let params = url.searchParams;// URLSearchParamsオブジェクトを取得
var myID = params.get('id');
var room = params.get('room');
var pw = params.get('pw');
var id = params.get('id');
let kyouyuuyouurl = `https://hamatakuyaei.github.io/chat/index.html?room=${room}&pw=${pw}`
document.getElementById('roomid').value = room;
document.getElementById('hyouziid').value = id;
document.getElementById('pwid').value = params.get('pw');
document.getElementById('qrsh').innerHTML = `<img src="https://chart.apis.google.com/chart?cht=qr&choe=UTF-8&chs=200&chl=${encodeURI(kyouyuuyouurl)}" alt="共有用QRコード">`
function irsettei() {
  room = document.getElementById('roomid').value;
  id = document.getElementById('hyouziid').value;
  pw = document.getElementById('pwid').value;
  window.location.href = `./index.html?id=${id}&room=${room}&pw=${pw}`;
}

if (id == null) {
  modalOpen('roomcheck');
}

/*
function push(title, cen){
  Push.Permission.request();
Push.create(title, {
  body: cen,
  icon: 'https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564405-chat2_81503.png',
  timeout: 8000, // 通知が消えるタイミング
  vibrate: [100, 100, 100], // モバイル端末でのバイブレーション秒数
//onClick: function() {// 通知がクリックされた場合の設定window.open('https://google.com', '_blank'); // 新しいタブを開き、ページを表示}
});
}
*/
var chat = document.getElementById("chat");
// ID生成
//var id = Math.random().toString(32).substring(2);
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
  push(obj.id, obj.message);
}
// WS切断
ws.onclosed = e => {
  console.log('closed');
  ws.send(JSON.stringify({ "to": room, "id": id, "message": 'Logout' }));
}
// メッセージ送信
function sendChat() {
  let msgElem = document.getElementById("msg");
  let msg = msgElem.value;
  msgElem.value = "";
  ws.send(JSON.stringify({ "to": room, "id": id, "message": msg }));
}
// チャット
function addChat(id, msg) {
  chat.innerHTML = '<span class="small">' + id + '</span> :<span class="msg"> ' + msg + '</span><span class="time">（' + getDateTime() + '）</span>' + '<br>' + chat.innerHTML;
}

function sendimg() {
  let imgurlE = document.getElementById("imgurl");
  console.log(imgurlE);
  console.log(imgurlE.value);
  let imgurl = '<img src="' + imgurlE.value + '" alt="">';
  imgurlE.value = "";
  ws.send(JSON.stringify({ "to": room, "id": id, "message": imgurl }));
  modalClose('pho');
}

function sendfileimg(code) {
  ws.send(JSON.stringify({ "to": room, "id": id, "message": code }));
  modalClose('pho');
}

function changeImageToBase64() {
  const uploadImage = document.querySelector('#uploadImage')
  const file = uploadImage.files[0]
  const reader = new FileReader()
  reader.onload = (event) => {
    const base64Text = event.currentTarget.result
    console.log(base64Text);
    var fileimgc = '<img src="' + base64Text + '" alt="画像" />';
    sendfileimg(fileimgc);
  }
  reader.readAsDataURL(file)
}

function sendst(stid) {
  let spurl = '<img src="stmp/' + stid + '.png" alt="">';
  ws.send(JSON.stringify({ "to": room, "id": id, "message": spurl }));
  modalClose('st');
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

