const modal = document.getElementsByClassName('modal');
const comback = document.getElementsByClassName('auth-form__controls-back');
const btnRegister_switch = document.getElementById('auth-form__switch-btn-register')
const btnLogin_switch = document.getElementById('auth-form__switch-btn-login');
const formRegister = document.getElementById('auth-form__register');
const formLogin = document.getElementById('auth-form__login');
const headerRegister = document.getElementById('header__navbar-item-register');
const headerLogin = document.getElementById('header__navbar-item-login');
const modal__overlay = document.getElementsByClassName('modal__overlay');

const btnLogin = document.getElementById('btn-login') ;
const btnRegister = document.getElementById('btn-register');

const input_gmail_register = document.getElementById('auth-form__input-gmail--register');
const input_pass_register = document.getElementById('auth-form__input-pass--register');
const input_repass_register = document.getElementById('auth-form__input-repass--register');
const input_name_register = document.getElementById('auth-form__input-name--register');

const input_gmail_login = document.getElementById('auth-form__input-gmail--login');
const input_pass_login = document.getElementById('auth-form__input-pass--login');

const item_user = document.getElementById('header__navbar-item-user');

const navbar_user = document.getElementsByClassName('header__navbar-user');



//


// like product
const likeProduct = document.getElementsByClassName('home__product-item__like');

for(var i = 0; i < comback.length; i++){
    comback[i].addEventListener('click',function(){
        modal[0].style.display = 'none';
    });
}
// event login_register
btnLogin_switch.onclick = function(){
    formRegister.style.display ='none';
    formLogin.style.display ='block';
}
btnRegister_switch.onclick = function(){
    formLogin.style.display ='none';
    formRegister.style.display ='block';
}
headerLogin.onclick = function(){
    modal[0].style.display = 'flex';
    formRegister.style.display ='none';
    formLogin.style.display ='block';
}
headerRegister.onclick = function(){
    modal[0].style.display = 'flex';
    formLogin.style.display ='none';
    formRegister.style.display ='block';
}

modal__overlay[0].onclick = function(){
    modal[0].style.display = 'none';

}
likeProduct[0].onclick = function(){
    likeProduct[0].classList.toggle('home__product-item__like--liked');
}
let gmail_register;
let name_register;
let pass_register;
let repass_register;
let gmail_login;
let pass_login;


// register input
input_gmail_register.onchange= (e) =>{
    gmail_register = e.target.value;

}
input_name_register.onchange= (e) =>{
    name_register = e.target.value;

}
input_pass_register.onchange= (e) =>{
    pass_register = e.target.value;
}
input_repass_register.onchange= (e) =>{
    repass_register = e.target.value;

}

// login input
input_gmail_login.onchange= (e) =>{
    gmail_login = e.target.value;

}
input_pass_login.onchange= (e) =>{
    pass_login = e.target.value;

}


const accountArr = [

]

let accounts = JSON.parse(localStorage.getItem('accounts'))


btnRegister.onclick = () =>{
    if(pass_register === repass_register){
        accountArr.push({gmail_register,name_register,pass_register})
        localStorage.setItem('accounts',JSON.stringify(accountArr));
        alert('Register Susscessfully')
    }
    else if(pass_register !== repass_register){
        console.log('Mật khẩu không khớp')
    }
    
}   
let isLogin = false;
btnLogin.onclick = () =>{
const user = accounts.map((account) =>{
    if(account.gmail_register == gmail_login && account.pass_register == pass_login ){
        alert('Susscess')
        modal[0].style.display = 'none';
        isLogin = true;
        localStorage.setItem('user_name',JSON.stringify(account.name_register));
        
    }
    
    return `
    <li class="header__navbar-item header__navbar-user">
        <img src="./assets/img/avatarNobody.png" alt=""
            class="header__navbar-user-img">
        <span class="header__navbar-user-name">${account.name_register}</span>
        <ul class="header__navbar-user-menu">
            <li class="header__navbar-user-item header__navbar-user-item-separate">
                <a class ="header__navbar-user-logOut" href="">Đăng xuất</a>
            </li>
        </ul>
    </li>
    `
  })
//   <li class="header__navbar-user-item">
//                 <a href="">Tài khoản của tôi</a>
//             </li>
//             <li class="header__navbar-user-item">
//                 <a href="">Địa chỉ của tôi</a>
//             </li>
//             <li class="header__navbar-user-item">
//                 <a href="">Đơn mua</a>
//     </li>
  item_user.innerHTML = user.join('')
  navbar_user.onmousemove = () =>{
    const user_logOut = document.getElementsByClassName('header__navbar-user-logOut');
    user_logOut.onclick = ()=>{
        location.reload();
    }
  }
}
export {isLogin}