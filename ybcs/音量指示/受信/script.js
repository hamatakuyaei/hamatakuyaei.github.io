var chat = document.getElementById("chat");

//タイムアウト後に実行する関数
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function yohakunofc(){
  console.log('aaa');
}
function modosu(tt){
    document.getElementById("chat").innerHTML = '<img src="https://hamatakuyaei.github.io/ybcs/img/' + tt + '.png" width="300"/>' + chat.innerHTML;
    document.getElementById("hyouzi").innerHTML = '';

}
function matttekesu(tipe){
 (async () => {
    await sleep(5000);
     modosu(tipe);
  })();
}



var room = 'onryoutouseigyoyouseisousinnsisutemu2';
var id = '受信';
var pw = 'onryoutouseigyoyouseisousinnsisutemu2';
let url = new URL(window.location.href);// URLを取得
  let params = url.searchParams;// URLSearchParamsオブジェクトを取得
  console.log(params.get('id')); // ID
  id = params.get('id');
  console.log(id); // idのタグ
  console.log(params.get('room')); // ID
  room = params.get('room');
  console.log(room); // idのタグ
  console.log(params.get('pw')); // ID
  pw = params.get('pw');
  console.log(pw); // idのタグ

// チャット
function addChat(id, msg){
 if( msg =='up'){
  console.log('upのしゅいいういういう') 
  document.getElementById("hyouzi").innerHTML = '<img src="https://hamatakuyaei.github.io/ybcs/img/up.png" class="pip"/>';
 matttekesu('up');
 }
  if( msg =='down'){
  console.log('dooown') 
      document.getElementById("hyouzi").innerHTML = '<img src="https://hamatakuyaei.github.io/ybcs/img/down.png" class="pip"/>';
 matttekesu('down');
 }
  if( msg =='stop'){
  console.log('stopd') 
      document.getElementById("hyouzi").innerHTML = '<img src="https://hamatakuyaei.github.io/ybcs/img/stop.png" class="pip"/>';
 matttekesu('stop');
 }
  if( msg =='restart'){
  console.log('restarsssssss') 
      document.getElementById("hyouzi").innerHTML = '<img src="https://hamatakuyaei.github.io/ybcs/img/restart.png" class="pip"/>';
 matttekesu('restart');
 }
  if( msg =='fout'){
  console.log('feedout') 
      document.getElementById("hyouzi").innerHTML = '<img src="https://hamatakuyaei.github.io/ybcs/img/fout.png" class="pip"/>';
 matttekesu('fout');
 }
  if( msg =='fin'){
  console.log('finfin') 
      document.getElementById("hyouzi").innerHTML = '<img src="https://hamatakuyaei.github.io/ybcs/img/fin.png" class="pip"/>';
 matttekesu('fin');
 }
  if( msg =='none'){
  console.log('risris') 
    document.getElementById("hyouzi").innerHTML = '<img src="https://hamatakuyaei.github.io/ybcs/img/none.png" class="pip"/>' 
 matttekesu('none');
 }
  
  chat.innerHTML = '<span class="small">' +id + '</span> :<span class="msg"> ' + msg + '</span><span class="time">（' + getDateTime() + '）</span>' + '<br>' + chat.innerHTML;
}

// WS接続（Achexへ接続）
ws = new WebSocket("wss://cloud.achex.ca/chat");
// WS接続
ws.onopen = e => {
  console.log('open');
  chat.innerHTML = 'You ID : ' + id;
  // 認証（auth, passwordは何でもOK）
	ws.send(JSON.stringify({"auth": room, "password": pw}));
  // 
  ws.send(JSON.stringify({"to": room, "id": id, "message": 'Login'}));
}
// メッセージ受信
ws.onmessage = e => {
  console.log('message');
  console.log(e);
  var obj = JSON.parse(e.data);
  if(obj.auth == 'OK'){
    // 認証OK
    return;
  }
  addChat(obj.id, obj.message); 
}
var msg = 'null';
console.log(msg);
function sendChat(aaa){
msg = '<div class="' + aaa + '">' + aaa + '</div>';
  ws.send(JSON.stringify({"to": room, "id": id, "message": msg}));
}

// WS切断
ws.onclosed = e => {
  console.log('closed');
  ws.send(JSON.stringify({"to": room, "id": id, "message": 'Logout'}));
}
// 1桁の数字を0埋めで2桁にする
var toDoubleDigits = function(num) {
  num += "";
  if (num.length === 1) {
    num = "0" + num;
  }
 return num;     
};
// 日時取得 YYYY/MM/DD HH:DD:MI:SS形式で取得
var getDateTime = function() {
  var date = new Date();
  var year = date.getFullYear();
  var month = toDoubleDigits(date.getMonth() + 1);
  var day = toDoubleDigits(date.getDate());
  var hour = toDoubleDigits(date.getHours());
  var min = toDoubleDigits(date.getMinutes());
  var sec = toDoubleDigits(date.getSeconds());
  return year + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + sec;
};

window.onload = function(){
  //1000ミリ秒（1秒）毎に関数「showNowDate()」を呼び出す
  setInterval("sendChat('切断防止用メッセージ')", 60000);
}