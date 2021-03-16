var derniere_position_de_scroll_connue = 0;
var ticking = false;

function faireQuelqueChose(position_scroll) {
    // faire quelque chose avec la position du scroll
    let header = document.querySelector('header')

    if (derniere_position_de_scroll_connue == 0){
        header.classList.remove('sticky_header')
    }

    let x = window.addEventListener("scroll", function () {
        header.classList.add('sticky_header')
    })


}

window.addEventListener('scroll', function(e) {
    derniere_position_de_scroll_connue = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            faireQuelqueChose(derniere_position_de_scroll_connue);
            ticking = false;
        });
    }

    ticking = true;
});