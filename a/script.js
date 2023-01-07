var menu = document.getElementById("menu")
var imgmenu = document.getElementById("imagem-menu")
var imgclosemenu = document.getElementById("close")

function menuClick() {
  if (menu.style.display == "block") {
    menu.style.display = "none"
    imgmenu.style.display = "block"
    imgclosemenu.style.display = 'none'
  } else {
    menu.style.display = "block"
    imgmenu.style.display = "none"
    imgclosemenu.style.display = "block"
  }
}
