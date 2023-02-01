function tensou(zizi) {
  var yura = (getDateTime() );
  location.href = 'OK.html?time=' + yura;	
}

let url = new URL(window.location.href);// URLを取得
  let params = url.searchParams;// URLSearchParamsオブジェクトを取得
  console.log(params.get('id')); // ID
  var myID = '通報者';
  console.log(myID); // idのタグ
  var room = 'ybchutekisetutuuhou'
  console.log(room); // idのタ
  console.log(params.get('pw')); // ID
  var pw = 'ybchutekisetutuuhou'  ;
  console.log(room); // idのタグ

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
var si = document.getElementById("si");
// ID生成
//var id = Math.random().toString(32).substring(2);
let id = '通報者';
// WS接続（Achexへ接続）
ws = new WebSocket("wss://cloud.achex.ca/chat");
// WS接続
ws.onopen = e => {
  console.log('open');
  // 認証（auth, passwordは何でもOK）
	ws.send(JSON.stringify({"auth": room, "password": pw}));
  // 
  ws.send(JSON.stringify({"to": room, "id": id, "message": 'サーバーに接続しました。'}));

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
  sendChat();
  
}
// WS切断
ws.onclosed = e => {
  console.log('closed');
  ws.send(JSON.stringify({"to": room, "id": id, "message": 'Logout'}));
}
// メッセージ送信
function sendChat(){
  let msg = '<div id="hu" class="hu">不適切放送</div>';
  ws.send(JSON.stringify({"to": room, "id": id, "message": msg}));
  tensou();
}
// チャット
function addChat(id, msg){
  chat.innerHTML = '<span class="msg"> ' + msg + '</span><span class="time">（' + getDateTime() + '）</span>' + '<br>' + chat.innerHTML;
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

if (window.navigator.onLine) {
  console.log("online");
} else {
  console.log("offline");
    si.innerHTML = '<h1>インターネットに接続されていません。接続して、最初からやり直してください。</h1>';

}