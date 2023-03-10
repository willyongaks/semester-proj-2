import { baseUrl } from "../settings/baseUrl.js";
import { toggleProducts } from "./toggleProducts.js";
import { logOutButton } from "../components/logOutBtn.js";


const itemsUrl = baseUrl + "products";



(async function() {
    const featuredContainer = document.querySelector(".featured_product_container");
    const search = document.querySelector(".form-control");

    try {
        const response = await fetch(itemsUrl);
        let result = await response.json();


        function renderHtml(){
            featuredContainer.innerHTML = "";


            result.forEach(function(item) {

                var imageUrl = item.image ? `http://localhost:4000${item.image.url}` : item.image_url;


                featuredContainer.innerHTML += `
                    
                    <div class="products">
                        <a href="./productDetails.html?id=${item.id}" class="product_link">
                        <div class="image_section"><img src="${imageUrl}"></a>
                            <div class="product_icons">
                                <i class="bi bi-cart" data-id=${item.id} data-title=${item.title} data-image=${imageUrl} data-price=${item.price}></i>
                            </div>
                        </div>
                        <div class="product_info">
                            <p>${item.title}</p>
                            <p>${item.price}</p>
                        </div>
                    </div>`


            })
        }
        renderHtml();
        toggleProducts();

        // filter items

        search.onkeyup = function (event) {

            const searchValue = event.target.value.trim().toLowerCase();


            const filteredItems = result.filter(function (item) {
                if (item.title.toLowerCase().startsWith(searchValue)) {
                    return true;
                }
            })

            result = filteredItems;
            renderHtml();

            function RefreshPage() {
                setTimeout(function () {
                    if (searchValue === "") {
                        window.location.reload();
                    }
                }, 1);
            };

            RefreshPage()

        }
    }
    catch(error){
        console.log(error)
    }
})();


// export async function renderHtml() {

//     const featuredContainer = document.querySelector(".featured_product_container");


//     try {
//         const response = await fetch(itemsUrl);
//         let result = await response.json();


//         featuredContainer.innerHTML = "";

//         result.forEach(function (item) {

//             // console.log(item)
//             var imageUrl = item.image ? `http://localhost:4000${item.image.url}` : item.image_url;




//             featuredContainer.innerHTML += `
                    
//             <div class="products">
//                 <a href="./productDetails.html?id=${item.id}" class="product_link">
//                 <div class="image_section"><img src="${imageUrl}"></a>
//                     <div class="product_icons">
//                         <i class="bi bi-cart" data-id=${item.id} data-title=${item.title} data-image=${imageUrl} data-price=${item.price}></i>
//                     </div>
//                 </div>
//                 <div class="product_info">
//                     <p>${item.title}</p>
//                     <p>${item.price}</p>
//                 </div>
//             </div>`

//         });
//         toggleProducts();
//         filteredProducts(result)
        
        
        
//     }
//     catch (error) {
//         console.log(error)
//         // displayMessage();
//     }



// };

// renderHtml();
logOutButton();
