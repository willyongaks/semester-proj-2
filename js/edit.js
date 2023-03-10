import { baseUrl } from "./settings/baseUrl.js"
import { getToken } from "./localStorage/loginStorage.js";
import { createMenu } from "./components/createMenu.js";
import { displayMessage} from "./components/logErrorMessage.js"
import { deleteButton} from "./products/deleteButton.js"


createMenu();

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id)

if(!id) {
    document.location.href = "/"
}

const itemUrl = baseUrl + "products/" + id;

const form = document.querySelector("form")
const title = document.querySelector(".name")
const price = document.querySelector(".price")
const description = document.querySelector(".description");
const idInput = document.querySelector(".id");
const imageInput = document.querySelector(".file");
const message = document.querySelector(".message-container");


(async function() {

    try{
        const response = await fetch(itemUrl);
        const result = await response.json();

        console.log(result)
        title.value = result.title;
        price.value = result.price;
        description.value = result.description;
        idInput.value = result.id;
        imageInput.value = result.image_url;

        deleteButton(result.id);

    }
    catch(error){
        console.log(error)
    }
    finally{
        form.style.display = "block"
    }

})();


form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML += "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const idValue = idInput.value;
    const imagevalue = imageInput.value;
    
    
    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imagevalue.length === 0) {
        return displayMessage("warning", "Please enter correct values", ".message-container");
    }

    updateProduct(titleValue, priceValue, descriptionValue, idValue, imagevalue);
}

async function updateProduct(title, price, description, imageInput) {

    const urlLink = baseUrl + "products/" + id;
    const data = JSON.stringify({title: title, price: price, description: description, imageInput: imageInput});

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try{
        const response = await fetch(urlLink, options);
        const json = await response.json();
        console.log(json);

        if (json.updated_at) {
            displayMessage("success", "Product successfully updated", ".message-container");
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }
    }

    catch(error){
        console.log(error)
    }
};






















































































// import { baseUrl } from "./settings/baseUrl.js";
// import { logOutButton } from "./components/logOutBtn.js";
// import { displayMessage} from "./components/logErrorMessage.js"
// import { createMenu } from "./components/createMenu.js";
// import { deleteButton} from "./products/deleteButton.js";




// createMenu();














// logOutButton();