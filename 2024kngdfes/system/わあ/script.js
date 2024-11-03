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
        console.log(hairethu)
        var element = [];

        for (let i = 0; i < hairethu.length; i++) {
            console.log(hairethu[i].日替種別)
            if (hairethu[i].日替種別 == 2) {
                element.push({
                    チケットID: hairethu[i].チケットID,
                    飛距離記録: hairethu[i].飛距離記録,
                    日替種別: 2,
                    日替競技点: hairethu[i].日替競技点
                })
            }
        }
        console.log(element)
        console.log(element.sort(function (a, b) { return (a.日替競技点 - b.日替競技点); }));
        rankingset(element.sort(function (a, b) { return (a.日替競技点 - b.日替競技点); }))
    };
}



function rankingset(data) {
    let array = data.slice(data.length - 5).reverse();
    console.log(array);
    let r1dis = array[0].日替競技点;
    let r2dis = array[1].日替競技点;
    let r3dis = array[2].日替競技点;
    let r4dis = array[3].日替競技点;
    let r5dis = array[4].日替競技点;

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



    gei('1_wname').innerHTML = r1dis + '点';
    gei('1_gtag').setAttribute('style', `--g_color: #e6b422; --percent:${r1dis_p}%`)

    gei('2_wname').innerHTML = r2dis + '点';
    gei('2_gtag').setAttribute('style', `--g_color: #909080; --percent:${r2dis_p}%`)

    gei('3_wname').innerHTML = r3dis + '点';
    gei('3_gtag').setAttribute('style', `--g_color: #8c4841; --percent:${r3dis_p}%`)

    gei('4_wname').innerHTML = r4dis + '点';
    gei('4_gtag').setAttribute('style', `--g_color: #656565; --percent:${r4dis_p}%`)


    gei('5_wname').innerHTML = r5dis + '点';
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