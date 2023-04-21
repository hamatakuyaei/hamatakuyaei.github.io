      //翻訳処理関数。参考元https://qiita.com/relu/items/69083a48ef67b2f64d3e
      //何やっているのかよくわからん＼(^o^)／
     async function handle(e) {
      name = "extra";
      key = "5b37d68901799f71e8937f26add0fafd06309732b";
      secret = "71d1b17cfdc7e26e6232a9a750c038d2";
      console.log(e)
      text = e;
      console.log(text);
      const oauth = OAuth({
      consumer: { key, secret },
      signature_method: "HMAC-SHA1",
      hash_function(base_string, key) {
      return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
        }
      });
      const options = {
        url: "https://mt-auto-minhon-mlt.ucri.jgn-x.jp/api/mt/generalNT_en_ja/",
        method: "POST",
        data: { text, name, key, type: "json" }
      };
      const cors_support = "https://corsproxy.io/?";
      const res = await fetch(cors_support + options.url, {
        method: options.method,
        body: new URLSearchParams(options.data),
        headers: oauth.toHeader(oauth.authorize(options))
      }).then((r) => r.json());
//      console.log(res);
      //document.getElementById('output2').innerHTML = res.resultset.result.text;
      var honyakunokekka = (res.resultset.result.text);
      console.log(honyakunokekka);
      document.getElementById('koubunnerawokakutokoro').innerHTML = 'エラー<br>' + honyakunokekka;
    }