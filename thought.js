const quotes = [{
        author: "-B.R. Ambedkar",
        quotes: '"I like the religion that teaches liberty,equality and fraternity."',
    },
    {
        author: "-Karl Marx",
        quotes: '"social progress can be measured by the social position of the female sex."',
    },
    {
        author: "-Abdul Kalam",
        quotes: '"Teaching is a very noble profession that shapes the character,caliber,and future of an individual.If the people remember me as a good teacher,that will be the biggest honour for me."',
    },

    {
        author: "-Ernesto Che Guevara",
        quotes: '"If you tremble with indignation at every injustice that you are a comrade of mine."',
    }
];


const btn = document.querySelector('.generate');
btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    document.querySelector('.quote').innerText = quotes[random].quotes;
    document.querySelector('.author').innerText = quotes[random].author;
});