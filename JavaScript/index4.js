//Getting the item from the local storage
const data1 = localStorage.getItem('online');
const online = JSON.parse(data1)

const data2 = localStorage.getItem('storage');
const storage = JSON.parse(data2)

const data3 = localStorage.getItem('profile');
const profile = JSON.parse(data3)

console.log(online)
console.log(storage)
console.log(profile)

// inserting the selected item inside the webpage
const selectedTxt = document.querySelector('#m-left-js');
const selectedPrice = document.querySelector('#price-js')

console.log(selectedTxt);
console.log(selectedPrice);
if (online === true) {
    selectedTxt.innerHTML += `<p id="online-js-4">Online service</p>`;
    selectedPrice.innerHTML += `<p>+$1/mo</p>`
}else{
    selectedTxt.innerHTML +='';
    selectedPrice.innerHTML += '';
}
if (storage === true) {
    selectedTxt.innerHTML += `<p id="storage-js-4">Large storage</p>`;
    selectedPrice.innerHTML += `<p>+$2/mo</p>`
}else{
    selectedTxt.innerHTML +='';
    selectedPrice.innerHTML += '';
}
if (profile === true) {
    selectedTxt.innerHTML += `<p id="profile-js-4">Customizable Profile</p>`;
    selectedPrice.innerHTML += `<p>+$2/mo</p>`
}else{
    selectedTxt.innerHTML +='';
    selectedPrice.innerHTML += '';
}

console.log(selectedTxt);
console.log(selectedPrice);

// checking the total and Adding the total together
let totalPriceMonthly = 9;

let onlinePriceMonthly = 1;
let storagePriceMonthly = 2;
let profilePriceMonthly = 2;

if (online === true) {
    totalPriceMonthly += onlinePriceMonthly;
}else{
    totalPriceMonthly += 0;
}
if (storage === true) {
    totalPriceMonthly += storagePriceMonthly;
}else{
    totalPriceMonthly += 0;
}
if (profile === true) {
    totalPriceMonthly += profilePriceMonthly;
}else{
    totalPriceMonthly += 0;
}

console.log(totalPriceMonthly)

// Add the total Price to the webPage
const totalPrice = document.querySelector('#last-js')

totalPrice.innerHTML += `<span id="total-js">+$${totalPriceMonthly}/mo</span>`