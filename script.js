const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const pink = document.querySelector('.pink');
const body = document.querySelector('body');

dark.addEventListener('click', () => {
    body.className = '';
});

light.addEventListener('click', () => {
    body.className = 'light-mode';
});

pink.addEventListener('click', () => {
    body.className = 'pink-mode';
});
