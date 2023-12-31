const menu_hamburguer = document.querySelector(".menu_hamburguer");

menu_hamburguer.addEventListener('click', ()=>{
    const navALL = document.querySelector(".navALL");
    navALL.classList.toggle("nav_active")
})