let url = new URL(window.location.href); // URLを取得
let params = url.searchParams; // URLSearchParamsオブジェクトを取得
console.log(params.get('id')); // ID
var myID = params.get('id');
console.log(myID); // idのタグ
var room = 'Kurokimusicschool';
var pw = 'kuroki';
var setudan = '';
var _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

var chat = document.getElementById("chat");
// ID生成
let id = params.get('id');
//document.getElementById("id").innerHTML = 'ID : ' + id;
// WS接続（Achexへ接続）
ws = new WebSocket("wss://cloud.achex.ca/chat");
// WS接続
ws.onopen = e => {
		console.log('open');
		chat.innerHTML = 'You ID : ' + id + '（' + getDateTime() + '）';
		// 認証（auth, passwordは何でもOK）
		ws.send(JSON.stringify({
			"auth": room,
			"password": pw
		}));
		// 
		ws.send(JSON.stringify({
			"to": room,
			"id": id,
			"message": 'Login'
		}));
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
		ws.send(JSON.stringify({
			"to": room,
			"id": id,
			"message": 'Logout'
		}));
	}
	// メッセージ送信
function sendChat(msg) {
	ws.send(JSON.stringify({
		"to": room,
		"id": id,
		"message": msg
	}));
}
// チャット
function addChat(id, msg) {
  if (msg == 'setudankansi') {
    setudan = 'ok';
  }
    if (msg == 'sendtest') {
    sendChat('sendtest OK!! online! このメッセージは、切断防止用兼用です。');
  } else if (msg == 'Login' && id == 'con'){
    		chat.innerHTML = 'コントロールパネルに接続しました。表示されるまで少しお待ち下さい。'
    		chat.innerHTML = '<img src="https://hamatakuyaei.github.io/kuro7hapyo/img/Login.png" style="width: 100vw;">';
  } else if (id == 'con') {
		chat.innerHTML = '<img src="https://hamatakuyaei.github.io/kuro7hapyo/img/' + msg + '.png?ver=' + getDateTime() + '">';
		sendChat("img OK.");
	} else {
      console.log('a');
	}//else終わり
  
		document.getElementById("console").innerHTML = '<span class="small">' + id + '</span> :<span class="msg"> ' + msg + '</span><span class="time">（' + getDateTime() + '）</span>' + '<br>' + document.getElementById("console").innerHTML;
} //addChatの終わりカッコ


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


var yamin = 0;




async function offline() {
 sendChat('setudankansi');
await _sleep(1000);
  if (setudan == 'ok'){
  console.log('online');
  } else {
  chat.innerHTML = '<h1 class="title">オフラインです。再読み込みしてください.</h1>'
    window.location.reload
  }
}

setInterval(oreda, 1000);
setInterval(offline, 3000);
