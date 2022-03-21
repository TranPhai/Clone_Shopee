import {isLogin} from './main.js'
const home__product = document.getElementById('home__product-swap');
const header_cart = document.getElementById('header__cart-list-item-id');
const header_cart_view = document.getElementsByClassName('header__cart');
const total_price = document.getElementsByClassName('header__cart-total');
const cart_payment= document.getElementsByClassName('header__cart-payment');




const items = [
    {
        name : 'Áo thun polo Nam',
        image :'https://cf.shopee.vn/file/718d9c1f8bf671450d308e49b87d40a6',
        price_old : 350000,
        price_current : 200000,
        solded : '100',
        brand : 'TP',
        address : 'Nam Định',
       
    },
    {
        name : 'Bộ Quần Áo Mặc Nhà Thể Thao Nam Mùa Hè Phong Cách Cao Cấp ZERO',
        image :'https://cf.shopee.vn/file/1a32d71426b5299936d59909870e92b6',
        price_old : 350000,
        price_current : 250000,
        solded : '100',
        brand : 'TP',
        address : 'Nam Định',
       
    },
    {
        name : 'Bộ Quần Áo Nam Thể Thao Viền Tay Cao Cấp thời Trang ZERO',
        image :'https://cf.shopee.vn/file/1fb01bba24c1bf931ad47b6167ddb18d',
        price_old : 250000,
        price_current : 200000,
        solded : '100',
        brand : 'TP',
        address : 'Nam Định',
       
    },
    {
        name : 'Quần âu nam Ikemen chất vải tuyết mưa ,co giãn 4 chiều dáng ôm body chống nhăn',
        image :'https://cf.shopee.vn/file/d9085f2fb6fe4b3dfe789163cccb0fc5',
        price_old : 150000,
        price_current : 100000,
        solded : '100',
        brand : 'TP',
        address : 'Nam Định',
       
    },
    {
        name : 'Áo Polo Nam cổ bẻ TSIMPLE thun basic cộc tay vải cá sấu cotton phong cách trẻ trung chuẩn form nhiều màu',
        image :'https://cf.shopee.vn/file/292c246006817e208f4491e033a14a4b',
        price_old : 200000,
        price_current : 100000,
        solded : '100',
        brand : 'TP',
        address : 'Nam Định',
       
    },
    {
        name : 'Đầm chữ A đính đá sang trọng, váy cổ vuông tay phồng khoét eo',
        image :'https://cf.shopee.vn/file/c14d0b131e2a0fc7a02b4890422b61e9',
        price_old : 650000,
        price_current : 500000,
        solded : '100',
        brand : 'TP',
        address : 'Nam Định',
       
    },
    {
        name : 'Váy Cổ Vuông Body, Đầm Công Sở Ôm Dáng Hàn Quốc Sang Trọng SANJOLI Thiết Kế Phù Hợp Dự Tiệc Cưới VD009',
        image :'https://cf.shopee.vn/file/b4d7b8cec36325179fa6739b4481fe41',
        price_old : 450000,
        price_current : 300000,
        solded : '100',
        brand : 'TP',
        address : 'Nam Định',
       
    },
    {
        name : 'Đầm Cô Dâu Trắng Tay Dài SANJOLI Váy Đi Dự Tiệc Cưới Đẹp, Dáng Suông Maxi Cao Cấp, Thiết Kế Sang Trọng VD029',
        image :'https://cf.shopee.vn/file/638bd7c066c06417d1eea51ba9e13019',
        price_old : 550000,
        price_current : 400000,
        solded : '100',
        brand : 'TP',
        address : 'Nam Định',
       
    },
    {
        name : 'Đầm Xòe Công Sở Nữ SANJOLI, Váy Đi Dự Tiệc Cưới Thiết Kế Dáng Dài Sang Trọng VD056',
        image :'https://cf.shopee.vn/file/3cbc0e943a413ee0d0d7ee63ef4fb605',
        price_old : 500000,
        price_current : 300000,
        solded : '100',
        brand : 'TP',
        address : 'Nam Định',
       
    },
    {
        name : 'Set Váy Nữ SANJOLI Set Blazer Nữ Công Sở Thiết Kế Hàn Quốc Tiểu Thư Đi Chơi, Đi Dự Tiệc Cưới AO016',
        image :'https://cf.shopee.vn/file/fd6201f0b0ad2eddec940777974a79a4',
        price_old : 750000,
        price_current : 600000,
        solded : '100',
        brand : 'TP',
        address : 'Nam Định',
       
    }

]


// header_cart.innerHTML = addCar.join('');

const itemHTML = items.map((item,index) => {  
    return `
    <div class="col l-2-4 m-4 c-6"> 
        <a class="home__product-item" href="#">
            <div class="home__product-item__img"
                style="background-image: url(${item.image});">
            </div>
            <h4 class="home__product-item__name">${item.name}</h4>
            <div class="home__product-item__price">
                <span class="home__product-item__price-old">${item.price_old}</span>
                <span class="home__product-item__price-current">${item.price_current}</span>
            </div>
            <div class="home__product-item__action">
                <span class="home__product-item__like">
                    <i class="home__product-item__like-icon-empty far fa-heart"></i>
                    <i class="home__product-item__like-icon-fill fas fa-heart"></i>
                </span>
                <div class="home__product-item__rating">
                    <i class="home__product-item__gold fas fa-star"></i>
                    <i class="home__product-item__gold fas fa-star"></i>
                    <i class="home__product-item__gold fas fa-star"></i>
                    <i class="home__product-item__gold fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <span class="home__product-item__sold">${item.solded}</span>
            </div>
            <div class="home__product-item__origin">
                <span class="home__product-item__brand">${item.brand}</span>
                <span class="home__product-item__origin-name">${item.address}</span>
            </div>
            <div class="home__product-item__favourite">
                <i class="fas fa-check"></i>
                <span>Yêu thích</span>
            </div>
            <div class="home__product-item__sale-off">
                <span class="home__product-item__sale-off-percent">${Math.floor((item.price_old - item.price_current)*100/item.price_old) + '%' }</span>
                <span class="home__product-item__sale-off-lable">GIẢM</span>
            </div>
        </a>
        <button id="home__product-buy-id" class="home__product-buy">
            <i class="home__product-buy__icon fas fa-shopping-cart"></i>
        </button>
    </div>
    `

})
home__product.innerHTML = itemHTML.join('');


window.onload = function() {
    
    const btnBuys = document.getElementsByClassName('home__product-buy')
    const userName = localStorage.getItem('user_name')
    const itemCartLocal = JSON.parse(localStorage.getItem(userName)) || [];
    let productInCart = [...itemCartLocal]
    function viewCart(){
        if(isLogin ==true) {
            const itemCart = productInCart.map(item => {
                return `
                    <li class="header__cart-item">
                    <img src= ${item.image} alt=""
                        class="header__cart-item-img">
                    <div class="header__cart-item-info">
                        <div class="header__cart-item-head">
                            <h5 class="header__cart-item-name">${item.name}
        
                            </h5>
                            <div class="header__cart-item-price-wrap">
                                <span class="header__cart-item-price">${item.price_current}</span>
                                <span class="header__cart-item-multiply">x</span>
                                <span class="header__cart-item-quatity">1</span>
                            </div>
                        </div>
                        <div class="header__cart-item-body">
                            <span class="header__cart-item-description">Phân loại: Bạc</span>
                            <span class="header__cart-item-remove">Xóa</span>
        
                        </div>
                    </div>
                </li>
                `
            })
            header_cart.innerHTML = itemCart.join('')

        }
    }
    function remove(){
        const removeCart = document.getElementsByClassName('header__cart-item-remove');
        for(let i = 0; i < removeCart.length; i++){              
            removeCart[i].onclick = (event)=>{
                event.target.parentElement.parentElement.parentElement.remove();
                productInCart.splice(i, 1);
                localStorage.setItem(localStorage.getItem('user_name'),JSON.stringify(productInCart));
    
            }
        }
    }

    for(let i = 0; i < btnBuys.length; i++) {
        btnBuys[i].onclick = () =>{
            if(isLogin == true){
                productInCart.push(items[i])
                localStorage.setItem(localStorage.getItem('user_name'),JSON.stringify(productInCart));
            }

        }
        viewCart()  
    }

    header_cart_view[0].onmousemove = () =>{   
        if(isLogin == true){
            viewCart() 
            remove();
            total_price[0].textContent = "Tổng tiền: " + sumTotal();
        }
       
    }

    function sumTotal(){
        const totalPrice = productInCart.reduce((total,item)=>{
            return total + item.price_current;
        },0)
        return totalPrice
    }
    cart_payment[0].onclick = () =>{
        if(isLogin == true){
            const a = sumTotal();
            let text = `Bạn xác nhận thanh toán?\n Giá tiền của bạn là ${a}`;
            if (confirm(text) == true) {
                text = "Cảm ơn quý khác";
            } else {
                text = "Thanh toán bị hủy";
            }
        }
        
    }
    
}
// export {itemCartLocal}