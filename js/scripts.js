const toggleMenuElement = document.getElementById("header__toggle-menu");
const mainMenuElement = document.getElementById("header__ul");
const menuItems = document.querySelectorAll(".header__a");


// Metodo para cerra el menu al dar clic sobre el icono de hamburguesa
toggleMenuElement.addEventListener('click',()=> {
    mainMenuElement.classList.toggle('header__ul--show');
});

// Metodo para cerrar el menu al dar clic en los items
for (const menuItem of menuItems) {
  //add click events to menu menuItems
  menuItem.addEventListener('click',()=> {
    //hide menu if click on menu item
    mainMenuElement.classList.toggle('header__ul--show');
  });
}
