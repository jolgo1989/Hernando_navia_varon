const toggleMenuElement = document.getElementById("header__toggle-menu");
const mainMenuElement = document.getElementById("header__ul");
const menuItems = document.querySelectorAll(".header__a");

//* classList.toggle (Si existe el elemento lo elimina sino lo agrega)
//* classList.remove (Elimina el elemento)


//Todo: Metodo para abrir y cerrar el menu al dar clic sobre el icono de hamburguesa
toggleMenuElement.addEventListener('click',()=> {
    mainMenuElement.classList.toggle('header__ul--show');
});

//Todo: Metodo para ocultar el menu al dar clic en los items
for (const menuItem of menuItems) {
  //add click events to menu menuItems
  menuItem.addEventListener('click',()=> {
    //hide menu if click on menu item
    mainMenuElement.classList.remove('header__ul--show');
  });
}

//Todo: Metodo para oculatra el menu cuando usemos el scroll
window.onscroll = () =>{
    mainMenuElement.classList.remove('header__ul--show');
}

