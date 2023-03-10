import { getExistingFavs } from "../localStorage/getFromStorage.js";
import { cartFunction } from "../settings/cartFunction.js";
import { logOutButton } from "../components/logOutBtn.js";



const favourites = getExistingFavs();




const featuredContainer = document.querySelector(".cart_container");


featuredContainer.innerHTML += ` <div class="cart_header">
            <h4>Shopping cart</h4>
        </div> `

if (favourites.length === 0) {
        featuredContainer.innerHTML += "Yo do dont have any products on the cart."
    }
favourites.forEach((item) => {

    

    console.log(item)

    featuredContainer.innerHTML += `
    
        <div class="cart_products">
            <div class="cart_row">
                <div class="product_image">
                    <img src="${item.image}">
                </div>
                <div class="product_description">
                    <p class="title">${item.title}</p>
                </div>
                <div class="product_counter">
                    <input type="number" class="quantity" name="quantity" min="1" max="5" value="3">
                </div>
                <div class="product_price">
                    <div class="product_price">${item.price}</div>
                    <div class="product_remove"><a href="#" data-id=${item.id}>Remover</a></div>
                </div>
            </div>
        </div>
    
        
    `

});

featuredContainer.innerHTML +=
    ` 
        <hr>
            <div class="product_checkout">
                <div class="products_total">
                    <div>
                        <div class="total_items_title">Total</div>
                    </div>
                    <div class="total_amount"></div>
                </div>
                <button class="checkout_btn">Checkout</button>
            </div>
    `

cartFunction();
logOutButton();
