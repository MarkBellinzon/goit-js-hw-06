const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

nameInput.addEventListener('input', (event) => {
	const evt = event.currentTarget;
	nameOutput.textContent = evt.value.trim()

	if (evt.value.trim() === '') {
		nameOutput.textContent = 'Anonymous'
	}
})

// console.dir(nameOutput);