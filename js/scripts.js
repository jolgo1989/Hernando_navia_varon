const toggleMenuElement = document.getElementById("header__toggle-menu");
const mainMenuElement = document.getElementById("header__ul");

toggleMenuElement.addEventListener('click',()=> {
    mainMenuElement.classList.toggle('header__ul--show');
});

