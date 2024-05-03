/********************/
/* デジタル時計のコード */
/*******************/

function displayTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const currentTime = `${hour}:${minute}:${second}`;
    document.getElementById('ntime').innerText = currentTime;
}
displayTime();
setInterval(displayTime, 100);
