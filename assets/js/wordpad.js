// wordpad.js

document.addEventListener('DOMContentLoaded', function () {
    const wordpad = document.querySelector('.wordpad');
    const titlebar = wordpad.querySelector('.wordpad-titlebar');
    const minimizeButton = wordpad.querySelector('.wordpad-minimize');
    const maximizeButton = wordpad.querySelector('.wordpad-maximize');
    const closeButton = wordpad.querySelector('.wordpad-close');
    const tasbarIcon = document.querySelector('#doc');


    minimizeButton.addEventListener('click', function () {
        wordpad.classList.add('minimized');
    });

    maximizeButton.addEventListener('click', function () {
        wordpad.classList.toggle('maximized');
    });

    closeButton.addEventListener('click', function () {
        wordpad.style.display = 'none';
        tasbarIcon.style.display = 'none';
    });
});

