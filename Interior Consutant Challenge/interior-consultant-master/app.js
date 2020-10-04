const showMenu = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.navigation-links')
const cancelBtn = document.querySelector('.cancel-btn')
showMenu.addEventListener('click',()=>{
    navLinks.style.display = "flex"
    cancelBtn.style.display = "block"
    showMenu.style.display = "none"

})

cancelBtn.addEventListener('click', ()=>{
    navLinks.style.display = "none"
    cancelBtn.style.display = "none";
    showMenu.style.display = "block";
})


