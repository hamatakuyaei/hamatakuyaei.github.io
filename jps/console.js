(function(){
  const log = console.log;
  console.log = function(...args){
    log(...args);
    const li = document.createElement('li');
    li.innerText = args[0];
    document.getElementById('kjhkjhkjh').appendChild(li);
  }
})()


console.log('ohayou');
document.getElementById('koubunnerawokakutokoronooyayouso').setAttribute('style','disply: none;');
function wordCount(val) {
  return {
    charactersNoSpaces: val.replace(/\s+/g, '').length,
    characters: val.length,
    lines: val.split(/\r*\n/).length
  };
}


function run() {
  var zikkoukekkanobasyodesu = document.getElementById("zikkoukekkanobasyodesu");
  var nanmozi = '';
  let scElem = document.getElementById("sc");
  let sc = scElem.value;
  sc = sc.replace( /’/g, "'" );
  let wc = wordCount(scElem.value);
  console.log(sc);
  console.log(wc.lines);
   var conkon = 0;
   
    var ik;
    ik = sc.replace( /もし/g, 'if' );
    ik = ik.replace( /＝/g, '=' );
    ik = ik.replace( /”/g, '"' );
    ik = ik.replace( /\u3000/g , ' ' );
    ik = ik.replace( /”/g, '"' );
    ik = ik.replace( /｛/g, '{' );
    ik = ik.replace( /｝/g, '}' );
    ik = ik.replace( /変数/g, 'var' );
    ik = ik.replace( /インナーHTML/g, 'innerHTML' );
    ik = ik.replace( /コンソール/g, 'console' );
    ik = ik.replace( /。/g, '.' );
    ik = ik.replace( /ログ/g, 'log' );
    ik = ik.replace( /（/g, '(' );
    ik = ik.replace( /）/g, ')' );
    ik = ik.replace( /；/g, ';' );
    ik = ik.replace( /’/g, "'" );
    ik = ik.replace( /結果表示/g, "document.getElementById('zikkoukekkanobasyodesu').innerHTML" );
    console.log(ik);


    var count = ( sc.match( /'/g ) || [] ).length ;
    console.log(count);
    // '文字を検索する
    var qore = sc.indexOf( "'");
    console.log(qore);
  
    qore = (qore + 1);
    namozi = ((sc.charAt(qore)));
    var okkadouka = 1;
    var kaisekicon = 1;
    var saigonomoz  = namozi.slice(-1);
  
    //countの２分の１回繰り返す。
    for(let i = 0; i < count ; i++) {
    while (okkadouka == 1){
          qore = (qore + 1);
          if (namozi.slice(-1) != "'") {
              console.log(namozi);
              namozi = (namozi + (sc.charAt(qore)));
              console.log(namozi);
          }else{
           okkadouka = 'unko';
           console.log(namozi);
          }
      }
    }
  // 末尾から1文字を削除
    namozi = namozi.slice( 0, -1 ) ;
    console.log(namozi);


    try{
      document.getElementById('kjhkjhkjh').innerHTML = '';
       //コンソール出力を乗っ取る
      console.log = function(msg){
      document.getElementById('kjhkjhkjh').innerHTML += msg + '<br />';
    }



     eval(ik);
      document.getElementById('koubunnerawokakutokoro').innerHTML = 'エラーはありません。';
    }catch(e){
    //例外が発生した場合の処理
      document.getElementById('koubunnerawokakutokoronooyayouso').setAttribute("style","display:block");
      document.getElementById('koubunnerawokakutokoro').innerHTML += e;
      handle(e);//翻訳処理関数。（tr/script.js）で処理してる。koubunnerawokakutokoroに表示までする。
    }

}




