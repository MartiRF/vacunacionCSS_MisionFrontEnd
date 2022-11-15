function toogleIcoMenu() {
    let linksMenuVar = document.getElementById("btns-options")
    console.log(linksMenuVar)
    if(linksMenuVar.className === "header__nav__link"){
        linksMenuVar.className += " responsive";
    }else{
        linksMenuVar.className = 'header__nav__link'
    }
}