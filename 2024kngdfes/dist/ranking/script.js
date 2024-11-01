function reloaddata() {
    //gei('rankings').classList.add('nodis');

    const xhrh = new XMLHttpRequest();
    xhrh.open("GET", `https://script.google.com/macros/s/AKfycbxP6sAIkOXC9M5HOXeB9RuJpnEKbz1QMfXOJv3XUfc9Acebtrz21uukDeeudvyuWk5IPA/exec?tiketid=getalldata`);
    xhrh.send();
    //xhr.responseType = "html";
    xhrh.onload = () => {
        console.log(xhrh);
        // let hairethu = JSON.stringify(xhrh.response)
        var hairethu = JSON.parse((xhrh.response).replace(/\\/g, ''));

        console.log(hairethu.sort(function (a, b) { return (a.飛距離記録 - b.飛距離記録); }));
        rankingset(hairethu.sort(function (a, b) { return (a.飛距離記録 - b.飛距離記録); }))
    };
}



function rankingset(data) {
    let array = data.slice(data.length - 5).reverse();
    console.log(array);
    let r1dis = array[0].飛距離記録;
    let r2dis = array[1].飛距離記録;
    let r3dis = array[2].飛距離記録;
    let r4dis = array[3].飛距離記録;
    let r5dis = array[4].飛距離記録;

    let r1dis_p = 100;
    let r2dis_p = (r2dis / r1dis) * 100;
    let r3dis_p = (r3dis / r1dis) * 100;
    let r4dis_p = (r4dis / r1dis) * 100;
    let r5dis_p = (r5dis / r1dis) * 100;

    gei('1_rank').innerHTML = (array[0].チケットID).substr(0, 8);;
    gei('2_rank').innerHTML = (array[1].チケットID).substr(0, 8);;
    gei('3_rank').innerHTML = (array[2].チケットID).substr(0, 8);;
    gei('4_rank').innerHTML = (array[3].チケットID).substr(0, 8);;
    gei('5_rank').innerHTML = (array[4].チケットID).substr(0, 8);;



    gei('1_wname').innerHTML = r1dis + 'm';
    gei('1_gtag').setAttribute('style', `--g_color: #e6b422; --percent:${r1dis_p}%`)

    gei('2_wname').innerHTML = r2dis + 'm';
    gei('2_gtag').setAttribute('style', `--g_color: #909080; --percent:${r2dis_p}%`)

    gei('3_wname').innerHTML = r3dis + 'm';
    gei('3_gtag').setAttribute('style', `--g_color: #8c4841; --percent:${r3dis_p}%`)

    gei('4_wname').innerHTML = r4dis + 'm';
    gei('4_gtag').setAttribute('style', `--g_color: #656565; --percent:${r4dis_p}%`)


    gei('5_wname').innerHTML = r5dis + 'm';
    gei('5_gtag').setAttribute('style', `--g_color: #656565; --percent:${r5dis_p}%`)

    //gei('rankings').classList.remove('nodis');
}

function gei(id) {
    return document.getElementById(id)
}
gei('roading').classList.add('nodis')

setInterval(reloaddata, 10000);
//gei('rankings').classList.add('nodis');
reloaddata()