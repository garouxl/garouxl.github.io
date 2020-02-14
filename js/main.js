;((win, doc) => {
  'use strict'
  const $body = doc.querySelector('body')
  const $main = doc.querySelector('main')
/*   const $targetV = doc.querySelector('.target-v')
  const $targetH = doc.querySelector('.target-h') */
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
    $targetV.style.transform = `translateX(${event.layerX}px)`
    $targetH.style.transform = `translateY(${event.layerY}px)`
  } */
  // destrava a tela
  function unLock () {
    const barsL = Array.from(doc.querySelectorAll('.entry__bar:nth-child(odd)'))
    const barsR = Array.from(doc.querySelectorAll('.entry__bar:nth-child(even)'))
    for (let i = 0; i <= barsL.length - 1; i++) {
      barsL[i].classList.add('entry__bar--left')
      barsR[i].classList.add('entry__bar--right')
    }
    // $main.addEventListener('click', target, false)
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
  resizeBody()
  $link.forEach(item => {
    item.addEventListener('click', newWindow)
  })
  win.addEventListener('resize', resizeBody)
  $main.addEventListener('click', unLock)
  konami(() =>
    $doge.classList.toggle('doge-animate')
  )

})(window, document)
