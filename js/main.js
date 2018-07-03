((win, doc) => {
    "use strict";
    // seta vertical
    function resizeBody() {
        doc.getElementsByTagName("body")[0].style.height =
            window.innerHeight + "px";
    }
    // barras de target
    function target(event) {
        doc.getElementsByClassName(
            "targetV"
        )[0].style.transform = `translateX(${event.clientX - 79}px)`;
        doc.getElementsByClassName(
            "targetH"
        )[0].style.transform = `translateY(${event.clientY - 43}px)`;
    }
    // detrava a tela
    function unLock() {
        let barsL = Array.from(
            doc.querySelectorAll(".entryBar:nth-child(odd)")
        );
        let barsR = Array.from(
            doc.querySelectorAll(".entryBar:nth-child(even)")
        );
        for (let i = 0; i <= barsL.length - 1; i++) {
            barsL[i].classList.add("entryBarL");
            barsR[i].classList.add("entryBarR");
        }
        doc.getElementById("main").addEventListener("click", target);
    }

    function konami(callback) {
        let keys = [],
            konami = "38,38,40,40,37,39,37,39,66,65";
        doc.onkeydown = function(e) {
            keys.push(e.keyCode);
            if (keys.toString().indexOf(konami) >= 0) {
                callback();
                keys = [];
            }
        };
    }
    resizeBody();
    win.addEventListener("resize", resizeBody);
    doc.getElementById("main").addEventListener("click", unLock);
    konami(() =>
        doc.getElementsByClassName("doge")[0].classList.add("doge-animate")
    );
})(window, document);
