const apiurl = "https://api.quotable.io/random"
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}
getquote(apiurl)

function tweet() {
    window.open("https://twitter.com/intent/tweet?text= " + quote.innerHTML + "  " + "--- By" + ": " + author.innerHTML, "Tweet Window", "width=600,height=300");
}