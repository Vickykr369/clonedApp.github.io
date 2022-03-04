console.time("Time taken to load this page on browser is")
let Ham_btn = document.getElementById('hamburger-btn');
let Menu = document.getElementById('menu_bar');
let close_menu = document.getElementById('close_menu');
let mainContainer = document.getElementById('containerOfAll');
let scrollBtn = document.getElementById('scrl-to-tp');
Ham_btn.addEventListener('click', () => {
    Menu.classList.remove('translate-x-[+300px]');
    Menu.classList.add('translate-x-[0]');
    mainContainer.classList.remove('scale-[1]')
    mainContainer.classList.add('scale-[0.9]')

    close_menu.addEventListener('click', () => {
        Menu.classList.remove('translate-x-[0]');
        Menu.classList.add('translate-x-[+300px]');
        mainContainer.classList.remove('scale-[0.9]')
        mainContainer.classList.add('scale-[1]')
    });
});
console.timeEnd("Time taken to load this page on browser is")

setTimeout(() => {
    alert("Hii, \nIf you are on mobile phone you can open this web app on large screen device or on desktop mode to explore more features . \n - Developer \n \n  \nThis site is made using Tailwind Css only. No any Javascript code has been added in this site ")

}, 5000);
let Scroll_Btn = document.getElementById('scrl-to-tp');
Scroll_Btn.addEventListener('click', () => {

})

document.addEventListener('scroll', () => {
    if (scrollY > 100) {
        scrollBtn.classList.remove('hidden')

    } else {
        scrollBtn.classList.add('hiddem')
    }

});
scrollBtn.addEventListener('click', () => {
    scrollTo({
        top: 0,
        behavior: "smooth"
    })
});