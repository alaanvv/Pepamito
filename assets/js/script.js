body = document.body
h1 = document.querySelector('h1')
p = document.querySelector('p')
form = document.querySelector('form')
img =  document.querySelector('img')
ngosto = document.querySelector('#ngosto')
gosto = document.getElementById('gosto')

love = new Audio('assets/audio/love.mp3')
jscare = new Audio('assets/audio/fnaf.mp3')

exorcista = 'assets/img/exorcista.jpg'

// ---

function clear() {
    h1.remove()
    p.remove()
    form.remove()
}

// ---

form.addEventListener('submit', e => {
    e.preventDefault()

    if (ngosto.checked) {
        jscare.play()
        img.src = exorcista
        img.width = '1300'
        body.style.backgroundColor = 'black'

        clear()
    }

    else if (gosto.checked) {
        love.play()
        body.style.backgroundColor = 'pink'
        setInterval(e => {
            img.width += 1
        }, 10)
    
        clear()
    }
})