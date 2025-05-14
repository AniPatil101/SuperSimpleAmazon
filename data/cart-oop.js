const cart={
  cartItems: undefined,

  loadFromStorage: function(){
    this.cartItems=JSON.parse(localStorage.getItem('cart-oop')); 

    if (!cart){
      this.cartItems=[{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
      },{
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId: '2'
      }];   
    }
  },
  
  saveToStorage(){
      localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
  }
};


loadFromStorage ();

export function addToCart(productId){
    let matchingItem;
  
    cart.forEach((item)=>{
    if (productId === item.productId){
        matchingItem=item;
    }
    });

    if (matchingItem){
    matchingItem.quantity +=1;
    } else{
    cart.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
        });
    }

    saveToStorage();
}

export function removeFromCart(productId){
    const newCart=[];

    cart.forEach((cartItem)=>{
        if (cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart=newCart;

    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;

  cart.forEach((item)=>{
    if (productId === item.productId){
        matchingItem=item;
    }
    });

  matchingItem.deliveryOptionId=deliveryOptionId;

  saveToStorage();
}