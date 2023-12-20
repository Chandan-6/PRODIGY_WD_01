function changeBG(){
    var navbar = document.getElementById("navbar");
    var scrollvalue = window.scrollY;
    console.log(scrollvalue);

    if(scrollvalue < 400){
        navbar.classList.remove('bgcolor_mercury');

    }
    else if(scrollvalue > 400){
        navbar.classList.add('bgcolor_mercury');

    }
}

window.addEventListener("scroll", changeBG);