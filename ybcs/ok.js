let url = new URL(window.location.href);// URLを取得
  let params = url.searchParams;// URLSearchParamsオブジェクトを取得
console.log(params.get('time')); // ID
var ultime = (params.get('time'));
var tie = document.getElementById("ken");
   tie.innerHTML = ('通報時刻：' + ultime);