li = document.querySelectorAll('li');
ul = document.querySelector('ul');

li.forEach(current => {
    current.addEventListener('click', clickBtn);
    function clickBtn (){
        ul = document.querySelector('.active').classList.remove('active');
        
        current.classList.toggle('active');
    }
});
// scroll btn
let btn = document.querySelector('.btn');
window.addEventListener('scroll', () => {
    btn.classList.toggle('scrollBtn' ,scrollY > 0);
    let header = document.querySelector('header');
    header.classList.toggle('headerSticky', scrollY > 0);
});
btn.addEventListener('click', ClickBtn);
function ClickBtn(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// hamburger
let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    let nav = document.querySelector('nav');
    nav.classList.toggle('navShow');
    hamburger.classList.toggle('hamburgerRotate');
});
let clickNoAction = document.getElementsByClassName('noActions');
for(let i= 0; i < clickNoAction.length; i++){
    clickNoAction[i].addEventListener('click', clickNoActionsBtn);
}
function clickNoActionsBtn (){
    window.alert("Sorry,this button is not function");
}