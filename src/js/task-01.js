const list = document.querySelectorAll(".item");
console.dir(`Number of categories: ${list.length}`)

list.forEach(item => {
    console.dir(`Category: ${item.firstElementChild.textContent}`);
    console.dir(`Elements: ${item.lastElementChild.children.length}`)
});