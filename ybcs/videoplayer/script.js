
//コンソール出力を乗っ取る
console.log = function(msg){
    document.getElementById('console').innerHTML += msg + '<br />';
 }
console.log("起動完了！");
try{

document.getElementById('file-sample1').addEventListener('change', function (e) {
    // 1枚だけ表示する
    var file = e.target.files[0];
    // ファイルのブラウザ上でのURLを取得する
    var blobUrl1 = window.URL.createObjectURL(file);
    // video要素に表示
    var video = document.getElementById('file-preview');
    video.src = blobUrl1;
    video.className = 'tall';
    document.documentElement.requestFullscreen();

});

window.addEventListener("keydown", handleKeydown);
function handleKeydown(event){
  // キーコード(どのキーが押されたか)を取得
  var keyCode = event.keyCode;
  // 条件文で制御する
  if (keyCode == 83) {

    if(document.getElementById('file-preview').paused){
      document.getElementById('file-preview').play(); // 動画再生が始まり、video.pausedはfalseになる
  }else{
    document.getElementById('file-preview').pause(); // 動画再生が止まり、video.pausedはtrueになる
  }

}

}

}catch(e){
console.log(e);
}
