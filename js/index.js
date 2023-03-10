import { baseUrl } from "./settings/baseUrl.js";
import { createMenu } from "./components/createMenu.js";
import { heroImage } from "./settings/hero.js";
import { toggleProducts } from "./products/toggleProducts.js";
import { logOutButton } from "./components/logOutBtn.js";

const itemsUrl = baseUrl + "products";

createMenu();


(async function () {
    const featuredContainer = document.querySelector(".featured_container");
    
    heroImage();


    try {
        const response = await fetch(itemsUrl);
        let result = await response.json();
        console.log(result)

        function renderHtml() {


            featuredContainer.innerHTML = "";

            result.forEach(function (item) {
               
                if (item.featured === true) {
                    featuredContainer.innerHTML += `
                    
                    <div class="products">
                     <a href="./productDetails.html?id=${item.id}" class="product_link">
                        <div class="image_section">
                            <img src="http://localhost:4000${item.image.url}">
                        </a>
                            <div class="product_icons">
                                <i class="bi bi-cart" data-id=${item.id} data-title=${item.title} data-image=${item.image.url} data-price=${item.price}></i>
                            </div>
                        </div>

                        <div class="product_info">
                            <p>${item.title}</p>
                            <p>${item.price}</p>
                        </div>
                    </div>
                    
                    `
                }
            });
        }
        renderHtml()
        toggleProducts();  
    }
    
    catch (error){
     
    }
})();

logOutButton();