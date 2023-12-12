const apiUrl = "https://api.quotable.io/random";

const quoteBox = document.getElementById("quote")
const author = document.getElementById("author")
const btn = document.getElementById("button")

btn.addEventListener("click", getQuote)

async function getQuote() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    quoteBox.innerHTML = data.content;
    author.innerHTML = data.author;
}
