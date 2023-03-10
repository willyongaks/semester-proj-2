import { baseUrl } from "./settings/baseUrl.js";
import { displayMessage } from "./components/logErrorMessage.js";
import { saveToken, saveUser } from "./localStorage/loginStorage.js";
import { createMenu } from "./components/createMenu.js";

const form = document.querySelector("form")
const username = document.querySelector("#email")
const password = document.querySelector("#password")
const message = document.querySelector(".message-container")


createMenu();


form.addEventListener("submit", submitForm);

function submitForm(event) {

    event.preventDefault();

    message.innerHTML = "";

    const emailValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("warning", "invalid values", ".message-container")
    }

    doLogin(emailValue, passwordValue);

}

async function doLogin() {
    console.log(username.value)
    const link = baseUrl + "auth/local";

    const formData = JSON.stringify({ identifier: username.value, password: password.value });

    const options = { 
        method: 'POST', 
        body: formData, 
        headers: { 
            "Content-Type": "application/json",
        },
    }
  

    try {
        const response = await fetch(link, options);
        const json = await response.json();
        console.log(json);

    

        if (json.user) {
            displayMessage("success", "Successfully logged in", ".message-container");

            saveToken(json.jwt);
            saveUser(json.user)

            window.location.replace("http://127.0.0.1:5501/add.html")
        }

        if (json.error) {
            displayMessage("warning", "Invalid login details", ".message-container");
        }
        
    } 
    catch (error) {
        console.log(error);
      
    }
}


