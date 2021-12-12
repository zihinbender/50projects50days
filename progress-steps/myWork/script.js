const progress = document.getElementById('progress');
const btnPrev = document.getElementById('prev');
const btnNxt = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

btnNxt.addEventListener('click', function() {
    currentActive++;

    if(currentActive === circles.length) {
        currentActive = circles.length;
    }

    update();
});

btnPrev.addEventListener('click', function() {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    
    circles.forEach(function(circle, idx) {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentActive === 1) {
        btnPrev.disabled = true;
    } else if(currentActive === circles.length) {
        btnNxt.disabled = true;
    } else {
        btnPrev.disabled = false;
        btnNxt.disabled = false;
    }

};
