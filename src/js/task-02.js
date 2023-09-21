
const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments'
]

const list = document.querySelector("#ingredients")
const li = []

ingredients.forEach(ingredient => {
	const item = document.createElement("li")
	item.classList = "item"
	item.textContent = ingredient
	li.push(item)
})

list.append(...li);
// console.dir(list);

