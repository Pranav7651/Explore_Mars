var menu_icon= document.querySelector("#navbar>.ri-menu-line");
var menu = document.getElementById("navbar-responsive");
var count=0;

menu_icon.addEventListener("click", () => {
    count++;
    if(count%2!=0) menu.style.display= 'block';
    else menu.style.display= 'none';
})

