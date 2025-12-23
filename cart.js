
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let total = 0;
    cartItems.innerHTML = '';
    
    if(cart.length === 0){
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    }

    cart.forEach((item, index) => {
        total += item.price;
        let div = document.createElement('div');
        div.innerHTML = `
            <p>${item.name} - KES ${item.price} 
            <button onclick="removeItem(${index})" style="padding:5px; margin-left:10px;">Remove</button></p>
        `;
        cartItems.appendChild(div);
    });

    document.getElementById('total').innerText = `Total: KES ${total}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

document.getElementById('clear-cart').addEventListener('click', () => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
});

// Initialize
updateCart();
