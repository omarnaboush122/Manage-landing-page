const openIcon = document.getElementById("hamburger");
const closeIcon = document.getElementById("close")
const menu = document.getElementById("menu");

openIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click",closeMenu);

function openMenu() {
  menu.style.display = "flex";
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
}

function closeMenu() {
  menu.style.display = "none";
  openIcon.style.display = "block";
  closeIcon.style.display = "none";
}