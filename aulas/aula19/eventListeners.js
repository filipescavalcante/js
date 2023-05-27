const d = [...document.querySelectorAll('div')]

d.map((i) => {
    i.addEventListener('click', (evento) => {
        const el = evento.target 
        if (el.style.backgroundColor == 'red') {
            el.style.backgroundColor = 'rgb(0, 128, 255)'
        } else {
            el.style.backgroundColor = 'red'
        }
        alert(`O elemento ${el.innerHTML} teve sua cor modificada!`)
        
    })
})