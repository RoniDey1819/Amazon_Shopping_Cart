export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1
    },{
        productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
        quantity: 1
    }];
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart (productId) {
    let matchingItem;

    cart.forEach((item) => {
        if(productId === item.productId) {
            matchingItem = item;
        }
    });

    if(matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }

    saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}