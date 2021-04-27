const hintt = document.querySelector('.hintt')
const hintr = document.querySelector('.hintr')
const hintb = document.querySelector('.hintb')
const hintl = document.querySelector('.hintl')
const hinta = document.querySelector('.hinta')

addHint(hintt, 'Top', 'top')
addHint(hintr, 'Right', 'right')
addHint(hintb, 'Bottom', 'bottom')
addHint(hintl, 'Left', 'left')

addHint(hinta, 'Top', 'top')
addHint(hinta, 'Right', 'right')
addHint(hinta, 'Bottom', 'bottom')
addHint(hinta, 'Left', 'left')

function addHint(target, text, position) {
    target.style.position = 'relative'
    const hint = generateHint(text, position)
    target.appendChild(hint)

    target.addEventListener('mouseenter', () => {
        hint.classList.add('hint-reset')
    })

    target.addEventListener('mouseleave', () => {
        hint.classList.remove('hint-reset')
    })
}

function generateHint(text, position) {
    const hintEl = document.createElement('div')
    const arrowEl = document.createElement('span')
    const textEl = document.createElement('div')

    hintEl.classList.add('hint')
    
    switch (position) {
        case 'top': hintEl.classList.add('hint-top'); break
        case 'bottom': hintEl.classList.add('hint-bottom'); break
        case 'left': hintEl.classList.add('hint-left'); break
        default: hintEl.classList.add('hint-right')
    }

    arrowEl.classList.add('arrow')
    textEl.classList.add('text')

    textEl.innerText = text

    hintEl.appendChild(arrowEl)
    hintEl.appendChild(textEl)

    return hintEl
}
