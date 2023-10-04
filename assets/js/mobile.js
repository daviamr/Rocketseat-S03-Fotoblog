// mobile burguer menu
const menu = document.getElementById('m-burguer');
const mobileContent = document.getElementById('mobile-menu-content');

menu.addEventListener('click', () => {
    const atributte = menu.getAttribute('src');

    if (atributte == './assets/img/menuburguer.svg') {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }

});

// function to open the mobile menu
function openMobileMenu() {
    mobileContent.classList.add('slide-bottom');
    showContent();

    menu.setAttribute('src', './assets/img/close.svg');
}

// function to close the mobile menu
function closeMobileMenu() {
    mobileContent.classList.remove('slide-bottom');
    setTimeout(hideContent, 300)

    menu.setAttribute('src', './assets/img/menuburguer.svg');
}

function showContent() {
    mobileContent.classList.remove('hide');
}

function hideContent() {
    mobileContent.classList.add('hide');
}