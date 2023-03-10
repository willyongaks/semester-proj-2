 import { displayMessage } from "./components/logErrorMessage.js";
 import { getToken } from "./localStorage/loginStorage.js";
 import { baseUrl } from "./settings/baseUrl.js";
 import { createMenu } from "./components/createMenu.js";
 import { logOutButton } from "./components/logOutBtn.js";

const token = getToken(); 
if(!token) {
    location.href = "/index.html"
}
const form = document.querySelector("form")
const title = document.querySelector(".name")
const price = document.querySelector(".price")
const description = document.querySelector(".description");
const imageInput = document.querySelector(".file");
const message = document.querySelector(".message-container");


createMenu();
form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault()

    message.innerHTML = "";
    
    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const image_url = imageInput.value.trim();

    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        return displayMessage("warning", "Please enter correct values", ".message-container");
    }

    addProcuct(titleValue, priceValue, descriptionValue, image_url);
}

async function addProcuct(title, price, description, imageInput) {
    const linkUrl = baseUrl + "products";


    const data = JSON.stringify({ title: title, price: price, description: description, image_url: imageInput});
    
    


    console.log(data)

    const options = {
        method: 'POST',
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try{

        const response = await fetch(linkUrl, options);
        const json = await response.json();
        console.log(json)
    }
    
    catch(error){

    }
}

logOutButton();