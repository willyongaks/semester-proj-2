
export function cartFunction() {

    if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", ready)
    } else {
        ready()
    }

    function ready() {

        const removeProductBtn = document.querySelectorAll(".product_remove");

        for (let i = 0; i < removeProductBtn.length; i++) {
            const button = removeProductBtn[i]
            button.addEventListener("click", removeCartProducts)
        }

        // quantity change
        const quantityInput = document.querySelectorAll(".quantity")
        for (let i = 0; i < quantityInput.length; i++) {
            const input = quantityInput[i]
            input.addEventListener("change", quantitychanged)
        }

    }


    // Remove items

    function removeCartProducts(event) {
        const buttonclicked = event.target
        buttonclicked.parentElement.parentElement.parentElement.remove()
        const item = JSON.parse(localStorage.getItem("favourites"))
        const id = event.target.getAttribute("data-id")

        const itemIndex = item.findIndex(x => x.id == id) 
        item.splice(itemIndex, 1)
        localStorage.setItem("favourites", JSON.stringify(item))
        console.log(item)
        updateCartTotal()


    }


    // quantity change function

    function quantitychanged(event) {
        const input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateCartTotal()
    }



    function updateCartTotal() {
        const cartRows = document.querySelectorAll(".cart_products")
        console.log("In Update Cart Total")
 //       console.log(cartRows)
  

        let total = 0;

        for (let i = 0; i < cartRows.length; i++) {
            
            const cartRow = cartRows[i]
            //console.log(cartRow)
            const priceElement = cartRow.querySelector(".product_price")
            console.log(priceElement)
            const quantityElement = cartRow.querySelector(".quantity")


            const price = parseFloat(priceElement.innerText)
            const quantity = quantityElement.value
            total = total + (price * quantity)
        }
        total = Math.round(total * 100) / 100
        document.querySelectorAll(".total_amount")[0].innerText = total
    }
    updateCartTotal()
}


