// Formatação usando padrão StandardJS
;((win, doc) => {
  'use strict'

  const app = (() => {
    const $body = doc.querySelector('body')
    const $main = doc.querySelector('main')
    /*
    const $targetV = doc.querySelector('.target-v')
    const $targetH = doc.querySelector('.target-h')
    */
    const $doge = doc.querySelector('.doge')
    const $link = doc.querySelectorAll('[data-js=link]')
    const $easter = doc.querySelector('[data-js=easter]')
    // seta vertical
    function resizeBody () {
      $body.style.height =
        window.innerHeight + 'px'
    }
    // barras de target
  /*   function target (event) {
      $targetV.style.transform = `translateX(${event.clientX - 68}px)`
      $targetH.style.transform = `translateY(${event.clientY - 58}px)`
    } */
    // destrava a tela
    function unLock () {
      const barsL = Array.from(doc.querySelectorAll('.entry__bar:nth-child(odd)'))
      const barsR = Array.from(doc.querySelectorAll('.entry__bar:nth-child(even)'))
      for (let i = 0; i <= barsL.length - 1; i++) {
        barsL[i].classList.add('entry__bar--left')
        barsR[i].classList.add('entry__bar--right')
      }
  /*     $body.addEventListener('click', target, false)// mousemove */
    }

    function konami (callback) {
      let keys = []
      const konami = '38,38,40,40,37,39,37,39,66,65'
      doc.onkeydown = function (e) {
        keys.push(e.keyCode)
        if (keys.toString().indexOf(konami) >= 0) {
          callback()
          $easter.remove()
          keys = []
        }
      }
    }

    function newWindow (event) {
      event.preventDefault()
      window.open(event.target.href)
    }

    function olar() {
      window.console.error('%c Olar pessoa desenvolvedora! :D ', 'font-weight: bold; font-style: oblique; font-size:25px;')

      window.console.warn('%c Bom ver você aqui, olha, estou a procura de uma nova oportunidade no mercado! ', 'font-weight: bold; font-style: oblique; font-size:20px;')

      window.console.error('%c Segue o contatinho, bóra trocar uma ideia: vempari@gmail.com', 'font-weight: bold; font-style: oblique; font-size:15px;')

      window.console.warn(`\n Olá visitante, vejo que se interessou em ver meu código!
      \n Para facilitar seu trabalho fique a vontade para acessar meu perfil no GITHUB:;
      \n https://github.com/garouxl/
      \n Lá você poderá baixar esse projeto bem como todos os outros aqui listados;
      \n Ah, e não custa nada deixar aqui meu perfil do LinkedIn, né!
      \n https://www.linkedin.com/in/laalmeida/`)
    }

    function startMeUp () {
      resizeBody()
      win.addEventListener('resize', resizeBody)
      $main.addEventListener('click', unLock)
      $link.forEach(item => {
        item.addEventListener('click', newWindow)
      })
      konami(() =>
        $doge.classList.toggle('doge-animate')
      )
      olar()

      VanillaTilt.init(document.querySelector(".main"), {
        max: 5,     // max tilt rotation (degrees)
        startX: 0,      // the starting tilt on the X axis, in degrees.
        startY: 0,      // the starting tilt on the Y axis, in degrees.
        perspective: 2000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
        speed: 300,    // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: 'cubic-bezier(0, 0, 0.2, 1)',    // Easing on enter/exit.
        glare: true,   // if it should have a "glare" effect
        "max-glare": 0.6,
        reverse: true,
        gyroscope:  true,
        gyroscopeMinAngleX: -45,
        gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45,
        gyroscopeMaxAngleY: 45,
      })
    }

    return {
      init: () => {
        startMeUp()
      }
    }
  })()

  win.garou = win.garou || {};
  win.garou.app = app;

})(window, document)

window.garou.app.init()
