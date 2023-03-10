import { getUserName } from "../localStorage/loginStorage.js";
import { logOutButton } from "./logOutBtn.js";




export function createMenu() {
    const { pathname } = document.location;
    console.log(pathname)

    const container = document.querySelector(".navbar");

    const username = getUserName();

    let authLink = `<li class="nav-item">
                                        <a class="nav-link " href="/login.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-person-circle ${pathname === "/login.html" ? "active" : ""}" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fill-rule="evenodd"
                                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg><span></span></a>
                                    </li>`

    if (username) {
        authLink = `<li class="nav-item"><a class="nav-link ${pathname === "/add.html" ? "active" : ""}" href="/add.html">Add Product
                    </a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${pathname === "/add.html" ? "active" : ""}" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Hi ${username}
                        </a>
                        <ul class="dropdown-menu">
                            <li><button class="log_out_btn">Log Out</button></li>
                        </ul>
                    </li>
        `
    }


    container.innerHTML += `<div class="container-fluid">
                            <a class="navbar-brand ${pathname === "/" || pathname === "/index.html" ? "active" : ""}" href="/">Shuzy</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/products.html">Products</a>
                                    </li>
                                    
                                    ${authLink}
                                    
                                    <li class="nav-item">
                                        <a class="nav-link" href="cart.html"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                            height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                            <path
                                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg></a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                            `


}
logOutButton();

