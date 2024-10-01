console.log('Hello World');

const menuButton = document.getElementById('menuButton');
const menuImg = document.getElementById('menuImg');

menuButton.onclick = function () {
    const sidebar = document.getElementById('sideBar');
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'flex';
        menuImg.src = 'assets/icon-close.svg'

    }
    else {
        sidebar.style.display = 'none';
        menuImg.src = 'assets/icon-menu.svg'
    }
}

var currentProduct = '1';
let quantity = 1;

var cart = [];

const cartButton = document.getElementById("cartButton");

const cartModal = document.getElementById("cartModal");


const incButton = document.getElementById('incButton');
const decButton = document.getElementById('decButton');
const qtyText = document.getElementById('qtyText');

const addButton = document.getElementById('addButton');

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const close = document.querySelector('.close');
close.addEventListener('click', () => {
    lightbox.style.display = 'none';
});


lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImage) {
        lightbox.style.display = 'none';
    }
});



cartButton.onclick = function () {
    if (cartModal.style.display === 'none') {
        cartModal.style.display = 'flex';
    }
    else {
        cartModal.style.display = 'none';
    }

}

const mainImage = document.getElementById('itemImage');

document.querySelectorAll('.itemImage').forEach(i => {
    i.addEventListener('click', () => {
        if (i.id) {
            lightbox.style.display = 'flex';
            lightboxImage.src = i.src;
        }
        else {
            console.log(i.src);
            mainImage.src = i.src;
            currentProduct = i.getAttribute('atrId');
            console.log(currentProduct);
            quantity = 1;
            qtyText.textContent = quantity;
        }
    });
});

incButton.onclick = function () {
    quantity++;
    qtyText.textContent = quantity;

}

decButton.onclick = function () {
    if (quantity > 1) {
        quantity--;
        qtyText.textContent = quantity;

    }
}

const addItem = () => {
    var product = cart.find(i => i.productId == 1);
    if (product) {
        product.quantity += quantity;
    }
    else {
        cart.push({ productId: 1, quantity: quantity });
    }
    console.log(cart);
}

const deleteC = (item) => {
    deleteItem(item.getAttribute('atrId'));


}

const deleteItem = (productId) => {
    console.log("called")
    cart = cart.filter(i => i.productId !== 1);
    updateCart();
    console.log(cart);
}

const updateCart = () => {
    var list = document.getElementById('cartList');
    list.innerHTML = '';
    if (cart.length > 0) {
        cart.forEach(i => {
            const item = document.createElement('li');
            item.innerHTML = `
        <img class="cartImage" src="assets/image-product-${i.productId}.jpg" width="40px">
        <div>
            <p>Fall Limeted Edition Sneakers</p>
            <p>$125 x ${i.quantity} <b>$${125 * i.quantity}</b></p>
        </div>
        <button class="deleteButton" atrId=${i.productId} onclick =deleteC(this)>
            <img src="assets/icon-delete.svg" width="12px" height="12px">
        </button>`;

            list.appendChild(item);
        });
        const checkOutButton = document.getElementById('checkOutButton');
        checkOutButton.style.display = 'block';
    }
    else {
        const item = document.createElement('li');
        item.innerHTML = `
        <h3 style="padding: 50px;">Your cart is empty</h3>`;

        list.appendChild(item);
        checkOutButton.style.display = 'none';
    }

}

addButton.onclick = function () {
    addItem();
    updateCart();
}

document.getElementById('prevButton').onclick = function(){
    if(currentProduct>1) {
        
        currentProduct--;
        mainImage.src=`assets/image-product-${currentProduct}.jpg`;

    }
}
document.getElementById('nextButton').onclick = function(){
    if(currentProduct<4) {
        currentProduct++;
        mainImage.src=`assets/image-product-${currentProduct}.jpg`;
    }
}





