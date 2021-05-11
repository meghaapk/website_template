const cards = document.getElementById('cards')
const article1 = document.getElementById('article1')
const article2 = document.getElementById('article2')
const article3 = document.getElementById('article3')
const fullart = document.getElementById('fullart')

article1.addEventListener('click', (event) => {
    cards.style.display="none";
    fullart.style.display="block";
})
