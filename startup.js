const Action = document.querySelector('.header_menu')
const Bar = document.getElementById('bar');


Bar.addEventListener('click', show);

function show() {

    Action.classList.toggle('active')

}