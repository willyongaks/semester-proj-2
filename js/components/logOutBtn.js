import { clearStorage } from "../localStorage/loginStorage.js";

export function logOutButton() {
    const button = document.querySelector(".log_out_btn");


    if(button){
        button.onclick = function() {
            const doLogOut = confirm("Are you sure");

            if(doLogOut) {
                clearStorage();
                location.href = "http://127.0.0.1:5501/index.html"
            }
        }
    }
}