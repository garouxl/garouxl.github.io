// seta vertical
function resizeBody() {
    document.getElementsByTagName("body")[0].style.height = window.innerHeight + "px"
}
// detrava a tela
function unLock() {
    let barsL = Array.from(document.querySelectorAll(".entryBar:nth-child(odd)"));
    let barsR = Array.from(document.querySelectorAll(".entryBar:nth-child(even)"));
    for (let i = 0; i <= barsL.length - 1; i++) {
        barsL[i].classList.add("entryBarL");
        barsR[i].classList.add("entryBarR");
    }

}

function konami(callback) {
    let keys = [],
        konami = '38,38,40,40,37,39,37,39,66,65';
    document.onkeydown = function (e) {
        keys.push(e.keyCode)
        if (keys.toString().indexOf(konami) >= 0) {
            callback();
            keys = [];
        }
    }
}
resizeBody();
window.addEventListener('resize', resizeBody);
document.getElementById("main").addEventListener('click', unLock);
konami(() => document.getElementsByClassName("doge")[0].classList.add("doge-animate"))



