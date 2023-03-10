import { baseUrl } from "./baseUrl.js";


const link =  baseUrl + "home";


export async function heroImage() {
    const heroContainer = document.querySelector(".hero-image");


    try {
        const response = await fetch(link);
        let result = await response.json();

        heroContainer.innerHTML = `<img src="http://localhost:4000${result.hero_banner.url}">`
       
    }

    catch(error){

    }
}