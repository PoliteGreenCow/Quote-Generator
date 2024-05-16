let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
    quote: "Power corrupts; absolute power corrupts absolutely.",
    person: "John Dalberg-Acton"
},{
    quote: "Speak softly and carry a big stick.",
    person: "Theodore Roosevelt"

},{
    quote: "The love of money is a root of all evil.",
    person: "the Bible"
},{
    quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    person: " Martin Luther King Jr"
},{
    quote: "To be or not to be, that is the question.",
    person: "William Shakespeare"
},{
    quote: "Not all those who wander are lost.",
    person: "J.R.R. Tolkien"
},{
    quote: "The reason people find it so hard to be happy is that they always see the past better than it was, the present worse than it is, and the future less resolved than it will be.",
    person: "Marcel Pagnol"
},{
    quote: "When one door of happiness closes, another one opens; but we look so long at the closed door that we do not see the one which has opened for us.",
    person: "Helen Keller"
},];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})






















