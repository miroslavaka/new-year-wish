let page = document.querySelector('.page');
let btn = document.querySelector('.button');

function openCard() {
    page.classList.toggle('open');
}

btn.addEventListener('click', changeText);

function changeText() {
    console.log(btn.innerText);
    if (btn.innerHTML === 'Otevři přání') {
        btn.innerHTML = 'Zavři přání';
    } else {
        btn.innerHTML = 'Otevři přání';
    }
}