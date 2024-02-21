document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var scrollArrow = document.getElementById('scrollArrow');
        if (window.scrollY > 100) {
        scrollArrow.classList.add('show');
        } else {
        scrollArrow.classList.remove('show');
        }
    });

    document.getElementById('scrollArrow').addEventListener('click', function() {
        window.scrollTo(0, 0);
    });
    });