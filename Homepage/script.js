var collaps_btn = document.getElementById('collaps-btn');
var collaps_menu = document.getElementById('collaps-menu');
var navbar = document.getElementById('navbar');
var main_page = document.getElementById('main-page');
var collaps_close = document.getElementById('collaps-close');


collaps_btn.addEventListener('click', () => {
    if (collaps_menu.style.display === 'none') {
        collaps_menu.style.display = 'block';
        navbar.style.display = 'none';
        main_page.style.display = 'none';
    }
    else{
        collaps_menu.style.display = 'none';
        navbar.style.display = 'block';
        main_page.style.display = 'block';
    }
});

collaps_close.addEventListener('click', () => {
    if (collaps_menu.style.display === 'block'){
        collaps_menu.style.display = 'none';
        navbar.style.display = 'block';
        main_page.style.display = 'block';
    }
    else {
        collaps_menu.style.display = 'block';
        navbar.style.display = 'none';
        main_page.style.display = 'none';
    }
});