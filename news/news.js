//はまたく　ユーチューブ　プレイヤー  
//パラメーターのIDで動画IDを指定。


let url = new URL(window.location.href);// URLを取得
  let params = url.searchParams;// URLSearchParamsオブジェクトを取得
  console.log(params.get('id')); // 1
  console.log(params.get('title')); // タイトル
  var YID = params.get('id');
  console.log(YID); // idのタグ

//はまたく　ユーチューブ　プレイヤー  syuuryou
var yurl = 'https://newsapi.org/v2/top-headlines?country=jp&apiKey=80ad98a660ee4d91ba3fd4e31ed68684'
  console.log(yurl); // apiURL
//JOSN取得
fetch(yurl)
    .then(response => response.json())
    .then(data => {
  var josn = data
      console.log(data);    
  //var ytitle = (data.items[0].snippet.title);
  
 // ygaiyou = ygaiyou.replace(/\n/g,'<br/>');
 //   console.log(ygaiyou);

    });
//JOSN取得終了




