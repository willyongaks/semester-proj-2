import { baseUrl } from "../settings/baseUrl.js"
import { createMenu } from "../components/createMenu.js";


const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id)



const url = `${ baseUrl + "products" }/${id}`;


async function fetchProductInfo() {
    const response = await fetch(url);
    const result = await response.json();

    const imageUrl = result.image ? `http://localhost:4000${result.image.url}` : result.image_url;

    const featuredProductDetails = document.querySelector(".product_info");

    featuredProductDetails.innerHTML += `
    <div class="product_details">
    
        <div class="product_image col-md-6">
            <img src="${imageUrl}">
        </div>
        <div class="product_text col-md-6 py-5">
            <div class="product_title">
                <h1>${result.title}</h1>
            </div>
            <div class="product_description col- mt-2">
                ${result.description}
            </div>
            <div class="product_price mt-2">
                Price ${result.price}
            </div>
            
        </div>
        <a class="edit_link" href="edit.html?id=${result.id}">Edit products</a>
    
    </div>
        

        
        `

}
fetchProductInfo()
createMenu();