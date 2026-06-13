// LOAD CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let discountAmount = 0;

/* =========================
   CART COUNT
========================= */

function updateCartCount(){

const countEl = document.getElementById("cart-count");

if(!countEl) return;

let totalQty = cart.reduce((sum,item)=>sum + item.qty,0);

countEl.innerText = totalQty;

}

/* =========================
   ADD TO CART
========================= */

function addToCart(name, price){

let existing = cart.find(item => item.name === name);

if(existing){

existing.qty += 1;

}else{

cart.push({
name,
price,
qty:1
});

}

localStorage.setItem("cart", JSON.stringify(cart));

updateCart();

alert(name + " added to cart");

}


/* =========================
   ARCHIE CHIMP
========================= */

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

/* =========================
   OLLIE ORANGUTANG
========================= */

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

/* =========================
   AWA GIRAFFE
========================= */

function addAWAGiraffeToCart(){

const sign =
document.getElementById("giraffeSign").value;

addToCart(
"AWA Giraffe - " + sign,
14
);

}
/* =========================
   RAPTOR SKELLY
========================= */

function addRaptorToCart(){

const style =
document.getElementById("raptorStyle").value;

let price = 4;

if(style === "Multicolor Small"){
price = 7;
}

if(style === "Multicolor Large"){
price = 14;
}

if(style === "Single Color Large"){
price = 8;
}

addToCart(
"Raptor Skelly - " + style,
price
);

}
/* =========================
   QUACK COLOR
========================= */

function addQuackToCart(){

const color =
document.getElementById("quackColor").value;

addToCart("Quack Off (" + color + ")", 10);

}

/* =========================
   LLAMA COLOR
========================= */

function addLlamaToCart(){

const color =
document.getElementById("llamaColor").value;

addToCart("No Prob Llama (" + color + ")", 12);

}

/* =========================
   RHINO OPTIONS
========================= */
function addRhinoToCart(){

const sign =
document.getElementById("rhinoSign").value;

addToCart(
"Rhino - " + sign,
10
);

}
/* =========================
   BEAVER OPTIONS
========================= */
function addBeaverToCart(){

const sign =
document.getElementById("beaverSign").value;

addToCart(
"Beaver - " + sign,
12
);

}

/* =========================
   PANDA OPTIONS
========================= */

function addPandaToCart(){

const sign =
document.getElementById("pandaSign").value;

addToCart(
"Panda - " + sign,
11
);

}
/* =========================
   AXOLOTL OPTIONS
========================= */

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

/* =========================
   PLAY DEAD OPTIONS
========================= */

function addPlayDeadToCart(){

const sign =
document.getElementById("playDeadSign").value;

addToCart(
"Play Dead - " + sign,
12
);

}
/* =========================
   UNBEARABLE OPTIONS
========================= */

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

function addDonkeyToCart(){

const sign =
document.getElementById("donkeySign").value;

addToCart(
"Donkey - " + sign,
10
);

}
function addStinkinToCart(){

const sign =
document.getElementById("stinkinSign").value;

addToCart(
"Stinkin Tired - " + sign,
12
);

}
function addBeefToCart(){

const sign =
document.getElementById("beefSign").value;

addToCart(
"Eat More Beef - " + sign,
12
);

}


/* =========================
   UNICORN OPTIONS
========================= */

function addUnicornToCart(){

const sign =
document.getElementById("unicornSign").value;

addToCart(
"Unicorn - " + sign,
14
);

}


/* =========================
   GOAT OPTIONS
========================= */

function addGoatToCart(){

const sign =
document.getElementById("goatSign").value;

addToCart(
"Goat - " + sign,
12
);

}
/* =========================
   SNAKE OPTIONS
========================= */

function addSnakeToCart(){

const sign =
document.getElementById("snakeSign").value;

addToCart(
"Snake - " + sign,
12
);

}
/* =========================
   OWL OPTIONS
========================= */

function addOwlToCart(){

const sign =
document.getElementById("owlSign").value;

addToCart(
"Owl - " + sign,
12
);

}
/* =========================
   SQUIRREL OPTIONS
========================= */

function addSquirrelToCart(){

const sign =
document.getElementById("squirrelSign").value;

addToCart(
"Squirrel - " + sign,
12
);

}

/* =========================
   UPDATE CART
========================= */

function updateCart(){

const list = document.getElementById("cart-items");

if(!list) return;

list.innerHTML = "";

let subtotal = 0;

cart.forEach((item, index)=>{

let li = document.createElement("li");

li.innerHTML = `
${item.name} (x${item.qty}) - $${(item.price * item.qty).toFixed(2)}
<br>
<button onclick="decreaseQty(${index})">-</button>
<button onclick="increaseQty(${index})">+</button>
<button onclick="removeItem(${index})">Remove</button>
`;

list.appendChild(li);

subtotal += item.price * item.qty;

});

/* SHIPPING */

let totalItems =
cart.reduce((sum,item)=>sum + item.qty,0);

let shippingMethod =
document.getElementById("shippingMethod")?.value || "ship";

let shipping = 0;

if(shippingMethod === "pickup"){

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

/* TAX */

let zip =
document.getElementById("zip")?.value || "";

let taxRate =
zip.startsWith("7") ? 0.095 : 0;

let tax = subtotal * taxRate;

/* TOTAL */

let total =
subtotal + tax + shipping - discountAmount;

if(total < 0){

total = 0;

}

/* DISPLAY */

document.getElementById("subtotal").textContent =
subtotal.toFixed(2);

document.getElementById("discount").textContent =
discountAmount.toFixed(2);

document.getElementById("tax").textContent =
tax.toFixed(2);

document.getElementById("shipping").textContent =
shipping.toFixed(2);

document.getElementById("total").textContent =
total.toFixed(2);

updateCartCount();

}

/* =========================
   INCREASE QTY
========================= */

function increaseQty(index){

cart[index].qty += 1;

localStorage.setItem("cart", JSON.stringify(cart));

updateCart();

}

/* =========================
   DECREASE QTY
========================= */

function decreaseQty(index){

if(cart[index].qty > 1){

cart[index].qty -= 1;

}else{

cart.splice(index,1);

}

localStorage.setItem("cart", JSON.stringify(cart));

updateCart();

}

/* =========================
   REMOVE ITEM
========================= */

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

updateCart();

}

/* =========================
   CLEAR CART
========================= */

function clearCart(){

cart = [];

localStorage.removeItem("cart");

updateCart();

updateCartCount();

}

/* =========================
   TOGGLE CART
========================= */

function toggleCart(){

document.getElementById("cart").classList.toggle("open");

}

/* =========================
   APPLY COUPON
========================= */

function applyCoupon(){

const code =
document.getElementById("coupon").value.toLowerCase();

let subtotal =
cart.reduce((sum,item)=>sum + (item.price * item.qty),0);

if(code === "save10"){

discountAmount = subtotal * 0.10;

alert("10% discount applied!");

}

else if(code === "freeship"){

discountAmount = 0;

document.getElementById("shippingMethod").value = "pickup";

alert("Free shipping applied!");

}

else{

discountAmount = 0;

alert("Invalid code");

}

updateCart();

}

/* =========================
   CHECKOUT
========================= */

function checkout(){

if(cart.length === 0){

alert("Your cart is empty");

return;

}

let subtotal =
cart.reduce((sum,item)=>sum + (item.price * item.qty),0);

/* SHIPPING */

let totalItems =
cart.reduce((sum,item)=>sum + item.qty,0);

let shippingMethod =
document.getElementById("shippingMethod")?.value || "ship";

let shipping = 0;

if(shippingMethod === "pickup"){

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

/* TAX */

let zip =
document.getElementById("zip")?.value || "";

let taxRate =
zip.startsWith("7") ? 0.095 : 0;

let tax = subtotal * taxRate;

/* TOTAL */

let total =
subtotal + tax + shipping - discountAmount;

if(total < 0){

total = 0;

}

/* PAYPAL */

let paypalURL =
"https://www.paypal.com/cgi-bin/webscr?cmd=_xclick";

paypalURL += "&business=katzrose@att.net";

paypalURL += "&currency_code=USD";

paypalURL += "&amount=" + total.toFixed(2);

paypalURL += "&item_name=Katz 3D Kreationz Order";

window.open(paypalURL,"_blank");
}

/* =========================
   AWA-CAT OPTIONS
========================= */

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
/* =========================
   LOAD CART ON PAGE LOAD
========================= */

updateCart();

updateCartCount();