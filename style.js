function showMobileNav() {
    var nav = document.getElementById("full-nav");
    var uls = document.getElementsByClassName("nav-group");
  if (uls[0].style.display == "block") {
    nav.style.background = "linear-gradient(90deg, #6750A5 65%, #BE73B2 65%)"; 
    nav.style.height = "14vmin"
    for (let i = 0; i < uls.length; i++) {
        const element = uls[i];
        element.style.display = "none";
    }
} else {
    nav.style.background = "linear-gradient(#6750A5 65%, #BE73B2 65%)"; 
    nav.style.height = "44%"

    for (let i = 0; i < uls.length; i++) {
        const element = uls[i];
        element.style.display = "block";
    }
  }
}