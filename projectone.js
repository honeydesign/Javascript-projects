let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

const quotes = [{
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam rem excepturi quaerat, quia illum dolorem obcaecati eligendi blanditiis fugiat!",
    person: 'Mahatma Gandhi'
}, {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam rem excepturi quaerat, quia illum dolorem obcaecati eligendi blanditiis fugiat!",
    person: 'Albert Einstein'
}, {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam rem excepturi quaerat, quia illum dolorem obcaecati eligendi blanditiis fugiat!",
    person: 'Aristotle'
}, {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam rem excepturi quaerat, quia illum dolorem obcaecati eligendi blanditiis fugiat!",
    person: 'Steve Jobs'
}, {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam rem excepturi quaerat, quia illum dolorem obcaecati eligendi blanditiis fugiat!",
    person: 'Benjamin Franklin'
}, {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam rem excepturi quaerat, quia illum dolorem obcaecati eligendi blanditiis fugiat!",
    person: 'Oprah Winfrey'
}, {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam rem excepturi quaerat, quia illum dolorem obcaecati eligendi blanditiis fugiat!",
    person: 'Confucius'
}, {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam rem excepturi quaerat, quia illum dolorem obcaecati eligendi blanditiis fugiat!",
    person: 'Martin Luther King Jr'
}, {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam rem excepturi quaerat, quia illum dolorem obcaecati eligendi blanditiis fugiat!",
    person: 'Dalai Lamu'
}, {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam rem excepturi quaerat, quia illum dolorem obcaecati eligendi blanditiis fugiat!",
    person: 'Lao Tzu'
}, ];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})