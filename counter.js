const display = document.getElementById('display')
const add = document.getElementById('add')
const minus = document.getElementById('minus')

let value = Number(display.innerHTML)
add.addEventListener('click', (e) => {
    console.log('add');
    value++
    display.innerHTML = value
})
minus.addEventListener('click', (e) => {
    console.log('minus');
    value--
    display.innerHTML = value
})
