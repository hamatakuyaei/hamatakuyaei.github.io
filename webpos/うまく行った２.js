process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

var tree1 = [
    {
        "jancode": "9784297103262",
        "name": "良いウェブサービスを支える「利用規約」の作り方",
        "namehuri": "よいうぇぶさーびすをささえる「りようきやく」のつくりかた",
        "place": "2380",
        "tax": "10",
        "maker": "技術評論社"
    },
    {
        "jancode": "4513744049724",
        "name": "ヤマハ　クリーニングペーパー",
        "namehuri": "やまは　くりーにんぐぺーぱー",
        "place": "455",
        "tax": "10",
        "maker": "ヤマハ"
    }
]
;

console.log(tree1[0].jancode);

//9784297103262


const GetElement = (tree, targetKey, searchValue, childrenKey) => {
    let data = null;
    for (const i in tree) {
        //console.log(tree[i]);
        if (tree[i][targetKey] == searchValue) {
            data = tree[i];
            break;
        }
        if (tree[i][childrenKey]) {
            data = GetElement(tree[i][childrenKey], targetKey, searchValue, childrenKey);
        }
        if (data) {
            break;
        }
    }
    return data;
}

var okaeri = GetElement(tree1,'jancode',9784297103262,'place');
console.log(okaeri.place);