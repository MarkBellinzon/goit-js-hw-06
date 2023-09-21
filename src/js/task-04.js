
let counterValue = 0

const сounter = document.querySelector('#value')
const btnDown = document.querySelector('button[data-action="decrement"]')
const btnUp = document.querySelector('button[data-action="increment"]')

btnDown.addEventListener('click', () => {
	counterValue--
	сounter.textContent = counterValue
})

btnUp.addEventListener('click', () => {
    counterValue++
    сounter.textContent = counterValue
});

// console.dir(counterValue);