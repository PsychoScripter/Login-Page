const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }
    else {
        menu.classList.add('hidden');
    }


})

const line2 = document.querySelectorAll('.line1');
const buttons= document.querySelectorAll('.closeline1');


buttons.forEach((btn,i) => {
    btn.addEventListener('click', () => {
        if (line2[i].classList.contains('line-clamp-3')) {
            line2[i].classList.remove('line-clamp-3');
            line2[i].classList.add('line-clamp-none');
            btn.textContent="بستن" ;
        }
        else {
            line2[i].classList.remove('line-clamp-none');
            line2[i].classList.add('line-clamp-3');
         btn.textContent="ادامه" ;
        }
    });

});

const sidenavbtn = document.querySelector('#sidenavbtn');
const sidenav = document.querySelector('#sidenav');

sidenavbtn.addEventListener('click', () => {
    if (sidenav.classList.contains('hidden')) {
        sidenav.classList.remove('hidden');
    }
    else {
        sidenav.classList.add('hidden');
    }


})

const navon = document.querySelector('#navon');
const navoff = document.querySelector('#navoff');



sidenavbtn.addEventListener('click', () => {
    if (navon.classList.contains('z-50')) {
        navon.classList.remove('z-50');
        navon.classList.add('z-40');
        navoff.classList.remove('z-40');
        navoff.classList.add('z-50');
    }
    else {
        navon.classList.add('z-50');
        navoff.classList.add('z-40');
    }


})

const closesidenav = document.querySelector('#closesidenav');

closesidenav.addEventListener('click', () => {
   
        sidenav.classList.add('hidden');
  


})
