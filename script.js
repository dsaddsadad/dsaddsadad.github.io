const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementsByClassName('navbar')[0];


bar.addEventListener('click', () => {
    nav.classList.toggle('active');
});

close.addEventListener('click', () => {
    nav.classList.remove('active');
});






