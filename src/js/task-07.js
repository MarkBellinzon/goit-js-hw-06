const input = document.querySelector('input#font-size-control')
const text = document.querySelector('span#text')

input.addEventListener('change', (event) => {
    text.style.fontSize = `${event.target.value }px`
})

console.dir(text);