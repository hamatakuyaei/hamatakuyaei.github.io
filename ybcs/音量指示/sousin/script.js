var room = 'onryoutouseigyoyouseisousinnsisutemu';
var msg;
var id = 'sousin';
var pw = 'onryoutouseigyoyouseisousinnsisutemu';
// WS接続（Achexへ接続）
ws = new WebSocket("wss://cloud.achex.ca/chat");
// WS接続
ws.onopen = e => {
  console.log('open');
  chat.innerHTML = 'You ID : ' + id + '（' + getDateTime() + '）';
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
  push(obj.id, obj.message);
}
// WS切断
ws.onclosed = e => {
  console.log('closed');
  ws.send(JSON.stringify({"to": room, "id": id, "message": 'Logout'}));
}

function sendchat(aaa){
msg = ('<div class="' + aaa '">' + aaa + '</div>');
  ws.send(JSON.stringify({"to": room, "id": id, "message": msg}));
} 
// チャット
function addChat(id, msg){
  chat.innerHTML = '<span class="small">' +id + '</span> :<span class="msg"> ' + msg + '</span><span class="time">（' + getDateTime() + '）</span>' + '<br>' + chat.innerHTML;
}

