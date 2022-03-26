let menuActivated = false;
let bocadilloNavMenu = document.getElementsByClassName("navbar-bocadillo")[0];

function changeMenuState() {
    menuActivated = !menuActivated;
    

    if(menuActivated){
        bocadilloNavMenu.classList.add("navbar-bocadillo--style_animated_in"); 
        bocadilloNavMenu.classList.remove("navbar-bocadillo--style_animated_out");                   
        return;
    }
     
    bocadilloNavMenu.classList.remove("navbar-bocadillo--style_animated_in");
    bocadilloNavMenu.classList.add("navbar-bocadillo--style_animated_out");
}