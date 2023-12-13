let hp = 3
let points = 0

const target1 = document.querySelector('.circle')
const btn = document.querySelector('.start')

btn.addEventListener('click', () => {
    target1.style.display = "block"
    document.querySelector('.arena').appendChild(target1)
    hp = 3
    points = 0
    document.querySelector('.points').textContent = points
    document.querySelector('.lives').textContent = hp
})

window.addEventListener('click', ({ target }) => {
    if (!target.classList.contains('circle') && !target.classList.contains('start')) {
        hp--
        document.querySelector('.lives').textContent = hp
    }
    else if (target.classList.contains('circle')) {
        document.querySelector('.arena').removeChild(target)
        points++
        document.querySelector('.points').textContent = points
    }
})


function add(x, y) {
    if (typeof x != 'number') {
        console.error('')
        return undefined
    }
    else if (typeof y != 'number') {
        console.error('')
        return undefined
    }

    return x + y
}