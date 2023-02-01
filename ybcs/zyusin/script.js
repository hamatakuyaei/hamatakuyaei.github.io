   var music = new Audio('zyusin.mp3');

var ken = document.getElementById("ken");
   ken.innerHTML = '0';
var chat = document.getElementById("chat");
let url = new URL(window.location.href);// URLを取得
  let params = url.searchParams;// URLSearchParamsオブジェクトを取得
  console.log(params.get('id')); // ID
  var myID = '受信';
  console.log(myID); // idのタグ
  console.log(params.get('room')); // ID
  var room = 'ybchutekisetutuuhou'
  console.log(room); // idのタグ

  console.log(params.get('pw')); // ID
  var pw = 'ybchutekisetutuuhou'
  console.log(pw); // idのタグ
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
var kaun = 0;
function kensyou (mes){
 if (mes == '<div id="hu" class="hu">不適切放送</div>') {
  kaun = (kaun + 1);
   console.log(kaun);
   ken.innerHTML = kaun;
   music.play();  // 再生
 } 
}

// ID生成
//var id = Math.random().toString(32).substring(2);
let id = '通報者'
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
  var mes = (obj.message);
  console.log(mes);
  kensyou(mes);
  addChat(obj.id, obj.message); 
  
}
// WS切断
ws.onclosed = e => {
  console.log('closed');
  ws.send(JSON.stringify({"to": room, "id": id, "message": 'サーバー切断'}));
}
// メッセージ送信
function sendChat(tipe){
  let msg = '<span id="' + tipe + '" class="' + tipe + '">不適切放送</span>';
  ws.send(JSON.stringify({"to": room, "id": id, "message": msg}));
}
// チャット
function addChat(id, msg){
  chat.innerHTML = '<span class="small">' +id + '</span><span class="msg"> ' + msg + '</span><span class="time">（' + getDateTime() + '）</span>' + '<br>' + chat.innerHTML;
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

      (()=>{
            // ゼロ埋めして2桁の数値にする
            const zero = n => (n < 10 ) ? "0" + n.toString() : n.toString();
 
            // 日付の文字列化
            const youbi = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            const getDateString = date =>
                `${ date.getFullYear() }/ ${ zero(date.getMonth() + 1) }/  ${ zero(date.getDate()) }/ ${ youbi[date.getDay()] }`;
 
            // 時間の文字列化
            const getHourString = date =>
                `${ zero(date.getHours()) }: ${ zero(date.getMinutes()) }: ${ zero(date.getSeconds()) }`;
 
            // DOMの構築を待つ
            window.addEventListener('DOMContentLoaded',()=> {
                // 日時を表示するDOM要素を取得
                const dateDiv = document.getElementById("date");
                const clockDiv = document.getElementById("clock");
 
                // 現在の日
                let nowDate = null;
 
                // 1秒周期のタイマーセット
                setInterval( ()=>{
                    // 現在の日時を取得
                    const now = new Date();
                    // 日付が変わったら日付を再表示
                    if( nowDate !== now.getDate() ) {
                        nowDate = now.getDate();
                        dateDiv.innerText = getDateString(now);
                    }
 
                    // 時間を再表示
                    clockDiv.innerText = getHourString(now);
                },1000);
            });
})();

