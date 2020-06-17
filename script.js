$(function() {
    $('div>img').draggable();
});

document.addEventListener('click', e => {
    const ele = e.target;
    if (ele.tagName === 'BUTTON' || event.target.matches('button img')) {
        document.querySelector(ele.name).classList.toggle('nothing');
    }
});

document.addEventListener('dblclick', e => {
    const ele = e.target;
    if (ele.name === '#trans') {
        document.querySelector(ele.name).classList.toggle('nothing');
    }
});
