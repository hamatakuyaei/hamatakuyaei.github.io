var msg = 'null';
var room = 'onryoutouseigyoyouseisousinnsisutemu2';
var id = 'sousin';
var pw = 'onryoutouseigyoyouseisousinnsisutemu2';
var uio = 'null';

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
var chaturl = 'https://hamatakuyaei.github.io/ybcs/chat/index.html?id=%E9%80%81%E4%BF%A1%E5%81%B4&room=' + room + '&pw=' + pw;
document.getElementById('if').setAttribute('src', chaturl);

//タイムアウト後に実行する関数
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function sendChat(aaa){
// お約束を取り付けたい処理にPromise
new Promise((resolve) => {
  //お約束どおり実行する処理
console.log("2番目(1秒後に実行)");
ws = new WebSocket("wss://cloud.achex.ca/chat");
// WS接続
ws.onopen = e => {
  console.log('open');
  chat.innerHTML = 'You ID : ' + id;
  // 認証（auth, passwordは何でもOK）
	ws.send(JSON.stringify({"auth": room, "password": pw}));
  ws.send(JSON.stringify({"to": room, "id": id, "message": 'Login'}));
  console.log(aaa + '鮮度');
  resolve();//無事処理が終わったことを伝える
}

}).then(() => {
// 処理が無事終わったことを受けとって実行される処理
msg = aaa;
console.log(msg);
ws.send(JSON.stringify({"to": room, "id": id, "message": msg}));});
console.log('OKOK');
console.log(aaa);
// メッセージ受信
ws.onmessage = e => {
  console.log('message');
  console.log(e);
  var obj = JSON.parse(e.data);
  console.log(obj)
  if(obj.auth == 'OK'){
    // 認証OK
    return;
  }
  addChat(obj.id, obj.message); 
}
}

// チャット
function addChat(id, msg){
  chat.innerHTML = '<span class="small">' +id + '</span> :<span class="msg"> ' + msg + '</span><span class="time">（' + getDateTime() + '）</span>' + '<br>' + chat.innerHTML;

  if( id == 'sc'){
  console.log('scsc');
  console.log(msg);
  try{
   eval(msg);
  }catch(e){
    console.log(e);
   sendChat(e); 
  }
 }
if (id =='re'){
  location.reload();
}
if (id == '体育館放送室（音響チーム）msg'){
  console.log('Aaa');
  modalOpen();
}
}

var ws = 'hoge'



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
window.onload = function() {
   // 実行したい処理
sendChat('読み込み完了');
}
