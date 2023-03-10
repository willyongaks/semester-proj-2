import { baseUrl } from "../settings/baseUrl.js";
import { getToken } from "../localStorage/loginStorage.js";

export function deleteButton(id) {

    const container = document.querySelector(".delete_container");

    container.innerHTML += ` <button type="button" class="delete_btn">Delete</button>`
    
    const button = document.querySelector("button.delete_btn");

    button.onclick = async function() {

        console.log(id)

        const deleteItem = confirm( "Delete this product item from the list?");

        if(deleteItem) {
            const url = baseUrl + "products/" + id;

            const token = getToken();

            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try{
                const response = await fetch(url, options);
                const json = await response.json();

                location.href = "/";

            }
            catch(error){
                
            }
        
        }
    };
}