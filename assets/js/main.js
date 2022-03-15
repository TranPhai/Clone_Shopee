const modal = document.getElementsByClassName('modal');
const comback = document.getElementsByClassName('auth-form__controls-back');
const btnRegister = document.getElementById('auth-form__switch-btn-register')
const btnLogin = document.getElementById('auth-form__switch-btn-login')
const formRegister = document.getElementById('auth-form__register')
const formLogin = document.getElementById('auth-form__login')
const headerRegister = document.getElementById('header__navbar-item-register')
const headerLogin = document.getElementById('header__navbar-item-login')
const modal__overlay = document.getElementsByClassName('modal__overlay')
// like product
const likeProduct = document.getElementsByClassName('home__product-item__like');
modal[0].style.display = 'none';
for(var i = 0; i < comback.length; i++){
    comback[i].addEventListener('click',function(){
        modal[0].style.display = 'none';
    });
}

btnLogin.onclick = function(){
    formRegister.style.display ='none';
    formLogin.style.display ='block';
}
btnRegister.onclick = function(){
    formLogin.style.display ='none';
    formRegister.style.display ='block';
}
// headerLogin.onclick = function(){
//     modal[0].style.display = 'flex';
//     formRegister.style.display ='none';
//     formLogin.style.display ='block';
// }
// headerRegister.onclick = function(){
//     modal[0].style.display = 'flex';
//     formLogin.style.display ='none';
//     formRegister.style.display ='block';
// }

modal__overlay[0].onclick = function(){
    modal[0].style.display = 'none';

}
console.log(likeProduct);
likeProduct[0].onclick = function(){
    likeProduct[0].classList.toggle('home__product-item__like--liked');
}