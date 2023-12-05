document.addEventListener('DOMContentLoaded', function () {
    //PORTFOLIO OVERLAY
    const buttons = document.querySelectorAll('.project');
    const overlay = document.querySelector('.overlay');
    const overlayImage = document.querySelector('.overlay-inner img');

    function open(e) {
        overlay.classList.add('open');
        const src = e.currentTarget.querySelector('img').src;
        overlayImage.src = src;

        document.querySelector("body").style.overflow = 'hidden';
        document.querySelector(".navbar").style.visibility = 'hidden';
    }

    function close() {
        overlay.classList.remove('open');

        document.querySelector("body").style.overflow = 'visible';
        document.querySelector(".navbar").style.visibility = 'visible';
    }

    buttons.forEach(button => button.addEventListener('click', open));
    overlay.addEventListener('click', close);

});

