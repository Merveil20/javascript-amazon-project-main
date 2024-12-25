function Cart(localStoragekey){
    const cart = {
        cartItems: undefined,
        LoadFromStorage(){
            this.cartItems = JSON.parse(localStorage.getItem(localStoragekey));
            if(!this.cartItems){
                this.cartItems =  [{
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 2,
                    deliveryOptionId:'1'
                }, {
                    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                    quantity: 1,
                    deliveryOptionId:'2'
                }];
            }
        },
        SaveToStorage(){
            localStorage.setItem(localStoragekey, JSON.stringify(this.cartItems));
        },
         AddtoCart(productId){
      let matchingItem;
          this.cartItems.forEach((cartItem)=>{
            if(productId === cartItem.productId) {
              matchingItem = cartItem;
            }
          });
          if(matchingItem){
            matchingItem.quantity += 1;
          } else{
            this.cartItems.push({productId: productId,
              quantity:1,
              deliveryOptionId:'1'
            });
          }
          this.SaveToStorage();
    },
     RemoveFromCart(productId){
        const newCart = [];
    
        this.cartItems.forEach((cartItem) =>{
            if(cartItem.productId !== productId){
                newCart.push(cartItem);
            }
        });
        this.cartItems = newCart;
        this.SaveToStorage();
    },
     UpdateDeliveryOption(productId, deliveryOptionId){
        let matchingItem;
          this.cartItems.forEach((cartItem)=>{
            if(productId === cartItem.productId) {
              matchingItem = cartItem;
            }
          });
        matchingItem.deliveryOptionId = deliveryOptionId;
        SaveToStorage();
    }
    };
    return cart;
}

const cart = cart('cart-oop');
const businessCart = cart('cart-business');

cart.LoadFromStorage();





businessCart.LoadFromStorage();
console.log(cart)














