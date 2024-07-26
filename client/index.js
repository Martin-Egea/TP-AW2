import { navbarComponent } from "./components/navbar.js";
import { footerComponent } from "./components/footer.js";

let navContainer = document.querySelector('header')
let footerContainer = document.querySelector('footer')


window.addEventListener('load', ()=>{
    /* --Navbar-- */
    navContainer.innerHTML = navbarComponent    
    let navbarBtn = document.getElementById('btnNavbar')
    let navbarMobileMenu = document.getElementById('menuNavbar')
    navbarBtn.addEventListener('click', ()=>{
        navbarMobileMenu.classList.toggle('hidden')
    })
    /* --Profile-- */
    let nvbarProfileBtn = document.getElementById('profileNavbar') 
    let menuProfile = document.getElementById('menuProfile')
    nvbarProfileBtn.addEventListener('click', ()=>{
        menuProfile.classList.toggle('hidden')
    })   
    let signOutBtn = document.getElementById('user-menu-item-1')
    signOutBtn.addEventListener('click', ()=>{
        sessionStorage.clear()
    })
    /* --Footer-- */
    footerContainer.innerHTML = footerComponent
})

