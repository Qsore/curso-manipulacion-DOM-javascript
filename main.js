const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const aside = document.querySelector("#shoppingCartContainer");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click",toggleDestopMenu);
menuCarritoIcon.addEventListener("click",toggleCarritoAside);
menuHamIcon.addEventListener("click",toggleMobileMenu);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);


function toggleDestopMenu(){
    mobileMenu.classList.add("inactive");
    aside.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
    productDetailContainer.classList.add("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");

}
function toggleCarritoAside(){
    mobileMenu.classList.add("inactive");
    aside.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");

}
function openProductDetailAside(){
    productDetailContainer.classList.remove("inactive")
}
function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive")
}

const productList = [];

productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

function cargarProductos(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute('src',product.image);
        productImg.addEventListener("click",openProductDetailAside);

    
        const productInfo = document.createElement('div');
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerHTML = "$"+ product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute("src",'./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

cargarProductos(productList);