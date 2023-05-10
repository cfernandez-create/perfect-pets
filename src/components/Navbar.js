import React from "react"




export default function Navbar(){
    return(
        <nav class="navbar">
        <div class="navbar__container">
            <a href="/" id="navbar__logo">
                <i class="fa-solid fa-paw"></i>
                <span class="title">PERFECT RESCUE</span></a>
       <div class="navbar__toggle" id="mobile-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
       </div>
       <ul class="navbar__menu">
        <li class="navbar__item">
            <a href="/about.html" class="navbar__links"> About Us </a>
        </li>
        <li class="navbar__item">
            <a href="/" class="navbar__links"> Resources </a>
        </li>
        <li class="navbar__item">
            <a href="/" class="navbar__links"> Volunteer </a>
        </li>
        <li class="navbar__item">
            <a href="/" class="navbar__links"> Donate</a>
        </li>
        <li class="navbar__btn">
            <a href="/" class="button"> Adopt  </a>
        </li>
       </ul>
        </div>
    </nav>

    ) 
}

// const menu = document.querySelector('#mobile-menu')
// const menuLinks = document.querySelector('.navbar__menu')

// menu.addEventListener('click', function() {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
// }
// );
