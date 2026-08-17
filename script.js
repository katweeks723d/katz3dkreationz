// =========================
// LOAD CART
// =========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let discountAmount = 0;


// =========================
// CART COUNT
// =========================

function updateCartCount(){

    const countEl =
        document.getElementById("cart-count");

    if(!countEl) return;

    let totalQty =
        cart.reduce(
            (sum,item) => sum + item.qty,
            0
        );

    countEl.innerText = totalQty;

}


// =========================
// ADD TO CART
// =========================

function addToCart(name, price){

    let existing =
        cart.find(item => item.name === name);

    if(existing){

        existing.qty += 1;

    }else{

        cart.push({
            name,
            price,
            qty: 1
        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();

    alert(name + " added to cart");

}


// =========================
// ARCHIE CHIMP
// =========================

function addArchieChimpToCart(){

    const size =
        document.getElementById("archieSize").value;

    let price = 8;

    if(size === "Medium"){
        price = 10;
    }

    if(size === "Large"){
        price = 12;
    }

    addToCart(
        "Archie Chimp - " + size,
        price
    );

}


// =========================
// OLLIE ORANGUTANG
// =========================

function addOllieToCart(){

    const size =
        document.getElementById("ollieSize").value;

    let price = 8;

    if(size === "Medium"){
        price = 10;
    }

    if(size === "Large"){
        price = 12;
    }

    addToCart(
        "Ollie Orangutang - " + size,
        price
    );

}


// =========================
// AWA GIRAFFE
// =========================

function addAWAGiraffeToCart(){

    const sign =
        document.getElementById("giraffeSign").value;

    addToCart(
        "AWA Giraffe - " + sign,
        14
    );

}


// =========================
// RAPTOR SKELLY
// =========================

function addRaptorToCart(){

    const style =
        document.getElementById("raptorStyle").value;

    let price = 4;

    if(style === "Multicolor Small"){
        price = 6;
    }

    if(style === "Multicolor Large"){
        price = 12;
    }

    if(style === "Single Color Large"){
        price = 8;
    }

    addToCart(
        "Raptor Skelly - " + style,
        price
    );

}


// =========================
// QUACK COLOR
// =========================

function addQuackToCart(){

    const color =
        document.getElementById("quackColor").value;

    addToCart(
        "Quack Off (" + color + ")",
        10
    );

}


// =========================
// LLAMA COLOR
// =========================

function addLlamaToCart(){

    const color =
        document.getElementById("llamaColor").value;

    addToCart(
        "No Prob Llama (" + color + ")",
        12
    );

}


// =========================
// RHINO OPTIONS
// =========================

function addRhinoToCart(){

    const sign =
        document.getElementById("rhinoSign").value;

    addToCart(
        "Rhino - " + sign,
        10
    );

}


// =========================
// BEAVER OPTIONS
// =========================

function addBeaverToCart(){

    const sign =
        document.getElementById("beaverSign").value;

    addToCart(
        "Beaver - " + sign,
        12
    );

}


// =========================
// PANDA OPTIONS
// =========================

function addPandaToCart(){

    const sign =
        document.getElementById("pandaSign").value;

    addToCart(
        "Panda - " + sign,
        11
    );

}


// =========================
// AXOLOTL OPTIONS
// =========================

function addAxolotlToCart(){

    const color =
        document.getElementById("axolotlColor").value;

    const sign =
        document.getElementById("axolotlSign").value;

    addToCart(
        "Axolotl (" + color + ") - " + sign,
        12
    );

}


// =========================
// PLAY DEAD OPTIONS
// =========================

function addPlayDeadToCart(){

    const sign =
        document.getElementById("playDeadSign").value;

    addToCart(
        "Play Dead - " + sign,
        12
    );

}


// =========================
// UNBEARABLE OPTIONS
// =========================

function addUnbearableToCart(){

    const color =
        document.getElementById("unbearableColor").value;

    const sign =
        document.getElementById("unbearableSign").value;

    addToCart(
        "Unbearable (" + color + ") - " + sign,
        12
    );

}


// =========================
// DONKEY OPTIONS
// =========================

function addDonkeyToCart(){

    const sign =
        document.getElementById("donkeySign").value;

    addToCart(
        "Donkey - " + sign,
        10
    );

}


// =========================
// STINKIN TIRED OPTIONS
// =========================

function addStinkinToCart(){

    const sign =
        document.getElementById("stinkinSign").value;

    addToCart(
        "Stinkin Tired - " + sign,
        12
    );

}


// =========================
// EAT MORE BEEF OPTIONS
// =========================

function addBeefToCart(){

    const sign =
        document.getElementById("beefSign").value;

    addToCart(
        "Eat More Beef - " + sign,
        12
    );

}


// =========================
// UNICORN OPTIONS
// =========================

function addUnicornToCart(){

    const sign =
        document.getElementById("unicornSign").value;

    addToCart(
        "Unicorn - " + sign,
        14
    );

}


// =========================
// GOAT OPTIONS
// =========================

function addGoatToCart(){

    const sign =
        document.getElementById("goatSign").value;

    addToCart(
        "Goat - " + sign,
        12
    );

}


// =========================
// SNAKE OPTIONS
// =========================

function addSnakeToCart(){

    const sign =
        document.getElementById("snakeSign").value;

    addToCart(
        "Snake - " + sign,
        12
    );

}


// =========================
// OWL OPTIONS
// =========================

function addOwlToCart(){

    const sign =
        document.getElementById("owlSign").value;

    addToCart(
        "Owl - " + sign,
        12
    );

}


// =========================
// SQUIRREL OPTIONS
// =========================

function addSquirrelToCart(){

    const sign =
        document.getElementById("squirrelSign").value;

    addToCart(
        "Squirrel - " + sign,
        12
    );

}


// =========================
// AWA CAT OPTIONS
// =========================

function addAWACatToCart(){

    const color =
        document.getElementById("awaCatColor").value;

    const sign =
        document.getElementById("awaCatSign").value;

    addToCart(
        "AWA Cat (" + color + ") - " + sign,
        14
    );

}


// =========================
// GHOST OPTIONS
// =========================

function addGhostToCart(){

    const sign =
        document.getElementById("ghostSign").value;

    addToCart(
        "Ghost - " + sign,
        8
    );

}


// =========================
// MUMMY OPTIONS
// =========================

function addMummyToCart(){

    const sign =
        document.getElementById("mummySign").value;

    addToCart(
        "Mummy - " + sign,
        8
    );

}


// =========================
// ZOMBIE OPTIONS
// =========================

function addZombieToCart(){

    const sign =
        document.getElementById("zombieSign").value;

    addToCart(
        "Zombie - " + sign,
        8
    );

}


// =========================
// CANDLE OPTIONS
// =========================

function addCandleToCart(){

    const sign =
        document.getElementById("candleSign").value;

    addToCart(
        "Candle - " + sign,
        7
    );

}


// =========================
// CUSTOMER INFORMATION
// =========================

function getCustomerInfo(){

    return {
        name:
            document.getElementById("customerName")?.value.trim() || "",

        email:
            document.getElementById("customerEmail")?.value.trim() || "",

        phone:
            document.getElementById("customerPhone")?.value.trim() || "",

        address:
            document.getElementById("customerAddress")?.value.trim() || "",

        city:
            document.getElementById("customerCity")?.value.trim() || "",

        state:
            document.getElementById("customerState")?.value || "",

        zip:
            document.getElementById("zip")?.value.trim() || ""
    };

}


function saveCustomerInfo(){

    localStorage.setItem(
        "customerInfo",
        JSON.stringify(getCustomerInfo())
    );

}


function loadCustomerInfo(){

    const saved =
        JSON.parse(
            localStorage.getItem("customerInfo") || "null"
        );

    if(!saved) return;

    const fields = {
        customerName: saved.name,
        customerEmail: saved.email,
        customerPhone: saved.phone,
        customerAddress: saved.address,
        customerCity: saved.city,
        customerState: saved.state,
        zip: saved.zip
    };

    Object.entries(fields).forEach(([id,value])=>{

        const el =
            document.getElementById(id);

        if(el && value){
            el.value = value;
        }

    });

}


function validateCustomerInfo(){

    const info =
        getCustomerInfo();

    if(!info.name){

        alert("Please enter your name.");

        document
            .getElementById("customerName")
            ?.focus();

        return false;

    }

    if(!info.email){

        alert("Please enter your email address.");

        document
            .getElementById("customerEmail")
            ?.focus();

        return false;

    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(info.email)){

        alert("Please enter a valid email address.");

        document
            .getElementById("customerEmail")
            ?.focus();

        return false;

    }

    const shippingMethod =
        document
            .getElementById("shippingMethod")
            ?.value || "ship";

    if(shippingMethod === "ship"){

        if(!info.address){

            alert("Please enter your shipping address.");

            document
                .getElementById("customerAddress")
                ?.focus();

            return false;

        }

        if(!info.city){

            alert("Please enter your city.");

            document
                .getElementById("customerCity")
                ?.focus();

            return false;

        }

        if(!info.state){

            alert("Please select your state.");

            document
                .getElementById("customerState")
                ?.focus();

            return false;

        }

        if(!/^\d{5}(-\d{4})?$/.test(info.zip)){

            alert("Please enter a valid 5-digit ZIP code.");

            document
                .getElementById("zip")
                ?.focus();

            return false;

        }

    }

    saveCustomerInfo();

    return true;

}


// =========================
// PRODUCT SEARCH
// =========================

function filterProducts(){

    const input =
        document.getElementById("productSearch");

    if(!input) return;

    const search =
        input.value.trim().toLowerCase();

    const products =
        document.querySelectorAll(".product");

    let visible = 0;

    products.forEach(product=>{

        const text =
            product.innerText.toLowerCase();

        const match =
            !search || text.includes(search);

        product.style.display =
            match ? "" : "none";

        if(match){
            visible++;
        }

    });

    const message =
        document.getElementById("searchMessage");

    if(message){

        if(search && visible === 0){

            message.textContent =
                "No products found. Try another search.";

            message.style.display = "block";

        }else{

            message.style.display = "none";

        }

    }

}


// =========================
// IMAGE VIEWER
// =========================

function openImageModal(src, alt){

    const modal =
        document.getElementById("imageModal");

    const image =
        document.getElementById("modalImage");

    if(!modal || !image) return;

    image.src = src;

    image.alt =
        alt || "Product preview";

    modal.classList.add("open");

}


function closeImageModal(event){

    if(event && event.target){

        if(
            event.target.id !== "imageModal" &&
            !event.target.classList.contains("image-modal-close")
        ){

            return;

        }

    }

    document
        .getElementById("imageModal")
        ?.classList.remove("open");

}


function setupImageViewer(){

    document
        .querySelectorAll(".image-container img")
        .forEach(img=>{

            img.addEventListener(
                "click",
                function(){

                    openImageModal(
                        this.src,
                        this.alt
                    );

                }
            );

        });

}


// =========================
// PRODUCT BADGES
// =========================

function addProductBadges(){

    const popular = [
        "Axolotl",
        "Unicorn",
        "AWA Giraffe",
        "Unbearable"
    ];

    const newProducts = [
        "Ghost",
        "Mummy",
        "Zombie",
        "Candle",
        "Knight Skelly"
    ];

    document
        .querySelectorAll(".product")
        .forEach(product=>{

            const title =
                product.querySelector("h2");

            if(!title) return;

            const name =
                title.textContent.trim();

            let badgeText = "";

            if(newProducts.includes(name)){

                badgeText = "NEW";

            }else if(popular.includes(name)){

                badgeText = "⭐ POPULAR";

            }

            if(!badgeText) return;

            const badge =
                document.createElement("span");

            badge.className =
                "product-badge";

            badge.textContent =
                badgeText;

            product.appendChild(badge);

        });

}


// =========================
// UPDATE CART
// =========================

function updateCart(){

    const list =
        document.getElementById("cart-items");

    if(!list) return;

    list.innerHTML = "";

    let subtotal = 0;

    cart.forEach((item,index)=>{

        let li =
            document.createElement("li");

        li.innerHTML = `
            ${item.name} (x${item.qty}) -
            $${(item.price * item.qty).toFixed(2)}
            <br>
            <button onclick="decreaseQty(${index})">-</button>
            <button onclick="increaseQty(${index})">+</button>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        list.appendChild(li);

        subtotal +=
            item.price * item.qty;

    });


    // =========================
    // SHIPPING
    // =========================

    let totalItems =
        cart.reduce(
            (sum,item) => sum + item.qty,
            0
        );

    let shippingMethod =
        document
            .getElementById("shippingMethod")
            ?.value || "ship";

    let freeShipping =
        localStorage.getItem(
            "freeShippingCoupon"
        ) === "true";

    let shipping = 0;

    if(
        shippingMethod === "pickup" ||
        freeShipping
    ){

        shipping = 0;

    }else{

        if(totalItems <= 2){

            shipping = 4;

        }else if(totalItems <= 5){

            shipping = 7;

        }else{

            shipping = 10;

        }

    }


    // =========================
    // TAX
    // =========================

    let zip =
        document
            .getElementById("zip")
            ?.value || "";

    let taxRate =
        zip.startsWith("7")
        ? 0.095
        : 0;

    let tax =
        subtotal * taxRate;


    // =========================
    // TOTAL
    // =========================

    let total =
        subtotal +
        tax +
        shipping -
        discountAmount;

    if(total < 0){

        total = 0;

    }


    // =========================
    // DISPLAY
    // =========================

    document
        .getElementById("subtotal")
        .textContent =
            subtotal.toFixed(2);

    document
        .getElementById("discount")
        .textContent =
            discountAmount.toFixed(2);

    document
        .getElementById("tax")
        .textContent =
            tax.toFixed(2);

    document
        .getElementById("shipping")
        .textContent =
            shipping.toFixed(2);

    document
        .getElementById("total")
        .textContent =
            total.toFixed(2);

    updateCartCount();

}


// =========================
// INCREASE QTY
// =========================

function increaseQty(index){

    cart[index].qty += 1;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();

}


// =========================
// DECREASE QTY
// =========================

function decreaseQty(index){

    if(cart[index].qty > 1){

        cart[index].qty -= 1;

    }else{

        cart.splice(index,1);

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();

}


// =========================
// REMOVE ITEM
// =========================

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();

}


// =========================
// CLEAR CART
// =========================

function clearCart(){

    cart = [];

    discountAmount = 0;

    localStorage.removeItem("cart");

    localStorage.removeItem(
        "freeShippingCoupon"
    );

    updateCart();

    updateCartCount();

}


// =========================
// TOGGLE CART
// =========================

function toggleCart(){

    document
        .getElementById("cart")
        .classList
        .toggle("open");

}


// =========================
// APPLY COUPON
// =========================

function applyCoupon(){

    const code =
        document
            .getElementById("coupon")
            .value
            .trim()
            .toLowerCase();

    let subtotal =
        cart.reduce(
            (sum,item) =>
                sum + (item.price * item.qty),
            0
        );

    localStorage.removeItem(
        "freeShippingCoupon"
    );


    if(code === "save10"){

        discountAmount =
            subtotal * 0.10;

        alert(
            "10% discount applied!"
        );

    }

    else if(code === "freeship"){

        discountAmount = 0;

        localStorage.setItem(
            "freeShippingCoupon",
            "true"
        );

        alert(
            "Free USPS shipping applied!"
        );

    }

    else{

        discountAmount = 0;

        alert(
            "Invalid code"
        );

    }

    updateCart();

}


// =========================
// CHECKOUT
// =========================

function checkout(){

    if(cart.length === 0){

        alert("Your cart is empty");

        return;

    }

    if(!validateCustomerInfo()){

        return;

    }


    let subtotal =
        cart.reduce(
            (sum,item) =>
                sum + (item.price * item.qty),
            0
        );


    let totalItems =
        cart.reduce(
            (sum,item) =>
                sum + item.qty,
            0
        );


    let shippingMethod =
        document
            .getElementById("shippingMethod")
            ?.value || "ship";


    let freeShipping =
        localStorage.getItem(
            "freeShippingCoupon"
        ) === "true";


    let shipping = 0;

    if(
        shippingMethod === "pickup" ||
        freeShipping
    ){

        shipping = 0;

    }else{

        if(totalItems <= 2){

            shipping = 4;

        }else if(totalItems <= 5){

            shipping = 7;

        }else{

            shipping = 10;

        }

    }


    let zip =
        document
            .getElementById("zip")
            ?.value || "";


    let taxRate =
        zip.startsWith("7")
        ? 0.095
        : 0;


    let tax =
        subtotal * taxRate;


    let total =
        subtotal +
        tax +
        shipping -
        discountAmount;


    if(total < 0){

        total = 0;

    }


    const orderNumber =
        "K3K-" +
        Date.now()
            .toString()
            .slice(-8);


    const customer =
        getCustomerInfo();


    const orderSummary =
        cart
            .map(
                item =>
                    item.name +
                    " x" +
                    item.qty
            )
            .join(", ");


    localStorage.setItem(
        "lastOrder",
        JSON.stringify({
            orderNumber,
            customer,
            items: cart,
            subtotal,
            tax,
            shipping,
            discount: discountAmount,
            total,
            shippingMethod,
            created:
                new Date().toISOString()
        })
    );


    let paypalURL =
        "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick";


    paypalURL +=
        "&business=" +
        encodeURIComponent(
            "katzrose@att.net"
        );


    paypalURL +=
        "&currency_code=USD";


    paypalURL +=
        "&amount=" +
        encodeURIComponent(
            total.toFixed(2)
        );


    paypalURL +=
        "&item_name=" +
        encodeURIComponent(
            "Katz 3D Kreationz " +
            orderNumber +
            " - " +
            orderSummary
        );


    paypalURL +=
        "&invoice=" +
        encodeURIComponent(
            orderNumber
        );


    paypalURL +=
        "&custom=" +
        encodeURIComponent(
            orderNumber
        );


    window.open(
        paypalURL,
        "_blank"
    );


    alert(
        "Order " +
        orderNumber +
        " created. Please complete payment in the PayPal window."
    );

}


// =========================
// PAGE ENHANCEMENTS
// =========================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const search =
            document.getElementById(
                "productSearch"
            );


        if(search){

            search.addEventListener(
                "input",
                filterProducts
            );

        }


        setupImageViewer();

        addProductBadges();

        loadCustomerInfo();

        updateCart();

        updateCartCount();

    }
);


document.addEventListener(
    "keydown",
    function(event){

        if(event.key === "Escape"){

            closeImageModal();

        }

    }
);
