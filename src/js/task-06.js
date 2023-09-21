
const textInput = document.querySelector('body');
textInput.style.backgroundColor = '#EBECF0';

const inputVal = document.getElementById('validation-input');
inputVal.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor(event) {
  const inputDataLength = Number(inputVal.dataset.length);
  const inputValueLength = Number(inputVal.value.trim().length);

  if (inputValueLength === inputDataLength) {
    inputVal.classList.add('valid');
    inputVal.classList.remove('invalid');
  } else {
    inputVal.classList.remove('valid');
    inputVal.classList.add('invalid');
  }
}


// const textInput = document.querySelector('#validation-input')
// // console.dir(textInput.getAttribute('data-length'))
// textInput.addEventListener('blur', (event) => {
// 	if (event.target.value.length == textInput.getAttribute('data-length')) {
// 		textInput.classList.add('valid')
// 		if (textInput.classList.contains('invalid')) {
// 			textInput.classList.remove('invalid')
// 		}
// 	} else {
// 		if (textInput.classList.contains('valid')) {
// 			textInput.classList.remove('valid')
// 		}
// 		textInput.classList.add('invalid')
// 	}
// });