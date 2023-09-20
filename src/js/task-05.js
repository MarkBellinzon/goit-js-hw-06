const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

nameInput.addEventListener('input', (event) => {
	const evt = event.currentTarget;
	nameOutput.textContent = evt.value

	if (evt.value === '') {
		nameOutput.textContent = 'Anonymous'
	}
})

console.dir(nameOutput);