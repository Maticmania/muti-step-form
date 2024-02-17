//Getting the item from the local storage monthly
const data1 = localStorage.getItem('online');
const online = JSON.parse(data1)

const data2 = localStorage.getItem('storage');
const storage = JSON.parse(data2)

const data3 = localStorage.getItem('profile');
const profile = JSON.parse(data3)

// console.log(online)
// console.log(storage)
// console.log(profile)

// getting everything set for yearly and monthly

// get data for is yearly
const data = localStorage.getItem("priceSelection");
const isYearly = JSON.parse(data)
// console.log(isYearly);

// inserting the selected item inside the webpage
const selectedTxt = document.querySelector('#m-left-js');
const selectedPrice = document.querySelector('#price-js')

// console.log(selectedTxt);
// console.log(selectedPrice);

if(online == true && isYearly === true){
    selectedTxt.innerHTML += `<p id="online-js-4">Online service</p>`;
    selectedPrice.innerHTML += `<p>+$10/yr</p>`;
}else if(online == true){
    selectedTxt.innerHTML += `<p id="online-js-4">Online service</p>`;
    selectedPrice.innerHTML += `<p>+$1/mo</p>`
}else{
    selectedTxt.innerHTML += '';
    selectedPrice.innerHTML += '';
}


if(storage === true && isYearly === true) {
    selectedTxt.innerHTML += `<p id="storage-js-4">Large storage</p>`;
    selectedPrice.innerHTML += `<p>+$20/yr</p>`
}else if(storage === true) {
    selectedTxt.innerHTML += `<p id="storage-js-4">Large storage</p>`;
    selectedPrice.innerHTML += `<p>+$2/mo</p>`
}else{
    selectedTxt.innerHTML +='';
    selectedPrice.innerHTML += '';
}



if (profile === true && isYearly === true) {
    selectedTxt.innerHTML += `<p id="profile-js-4">Customizable Profile</p>`;
    selectedPrice.innerHTML += `<p>+$20/yr</p>`
}else if (profile === true) {
    selectedTxt.innerHTML += `<p id="profile-js-4">Customizable Profile</p>`;
    selectedPrice.innerHTML += `<p>+$2/mo</p>`
}else{
    selectedTxt.innerHTML +='';
    selectedPrice.innerHTML += '';
}

// console.log(selectedTxt);
// console.log(selectedPrice);


//get the plan slected from local storage
const plan1 = localStorage.getItem('arcadePlan');
const arcadePlan = JSON.parse(plan1)

const plan2 = localStorage.getItem('advancePlan');
const advancePlan = JSON.parse(plan2)

const plan3 = localStorage.getItem('proPlan');
const proPlan = JSON.parse(plan3)

console.log(arcadePlan)
console.log(advancePlan)
console.log(proPlan)

//showing the plan selected on the webpage
const planSelected = document.querySelector('.plan-select');
const planPrice = document.querySelector('.right p');

//Arcade Plan and Price 
if(arcadePlan === true && isYearly === true){
    planSelected.innerHTML += 'Arcade (Yearly)';
    planPrice.innerHTML += '$90/yr'
}else if (arcadePlan === true){
    planSelected.innerHTML += 'Arcade (Monthly)';
    planPrice.innerHTML += '$9/mo';
}else{
    planSelected.innerHTML += '';
    planPrice.innerHTML += '';
}

//Advance Plan and Price 
if(advancePlan === true && isYearly === true){
    planSelected.innerHTML += 'Advanced (Yearly)';
    planPrice.innerHTML += '$120/yr'
}else if (advancePlan === true){
    planSelected.innerHTML += 'Advanced (Monthly)';
    planPrice.innerHTML += '$12/mo';
}else{
    planSelected.innerHTML += '';
    planPrice.innerHTML += '';
}

//Pro Plan and Price 
if(proPlan === true && isYearly === true){
    planSelected.innerHTML += 'Pro (Yearly)';
    planPrice.innerHTML += '$150/yr'
}else if (proPlan === true){
    planSelected.innerHTML += 'Pro (Monthly)';
    planPrice.innerHTML += '$15/mo';
}else{
    planSelected.innerHTML += '';
    planPrice.innerHTML += '';
}



//declearing yearly plan price
let arcadePriceYearly = 90;
let advancePriceYearly = 120;
let proPriceYearly = 150;

//declearing monthly plan price
let arcadePriceMonthly = 9;
let advancePriceMonthly = 12;
let proPriceMonthly = 15;
// checking the total and Adding the total together
let totalPlanPrice = 0;
let currentPrice = 0;
// declaring add on price for monthly
let onlinePriceMonthly = 1;
let storagePriceMonthly = 2;
let profilePriceMonthly = 2;

// declaring add on price for yearly
let onlinePriceYearly = 10;
let storagePriceYearly = 20;
let profilePriceYearly = 20;

//calculate monthly price and Yearly price for Pro plan
if (arcadePlan === true && isYearly === true) {
    currentPrice += arcadePriceYearly
}else if(arcadePlan === true){
    currentPrice += arcadePriceMonthly
}else{
    currentPrice += 0
}
//calculate monthly price and Yearly price for Pro plan
if (advancePlan === true && isYearly === true) {
    currentPrice += advancePriceYearly
}else if(advancePlan === true){
    currentPrice += advancePriceMonthly
}else{
    currentPrice += 0
}

//calculate monthly price and Yearly price for Pro plan
if (proPlan === true && isYearly === true) {
    currentPrice += proPriceYearly
}else if(proPlan === true){
    currentPrice +=proPriceMonthly
}else{
    currentPrice += 0
}


console.log(currentPrice)

//calculate monthly price and Yearly price for online
if (online === true && isYearly === true) {
    currentPrice += onlinePriceYearly;
}else if (online === true) {
    currentPrice += onlinePriceMonthly;
}else{
    currentPrice += 0;
}

//calculate monthly price and Yearly price for storage
if (storage === true && isYearly === true) {
    currentPrice += storagePriceYearly;
}else if (storage === true) {
    currentPrice += storagePriceMonthly;
}else{
    currentPrice += 0;
}

//calculate monthly price and Yearly price for profile
if (profile === true) {
    currentPrice += profilePriceYearly;
}else if (profile === true) {
    currentPrice += profilePriceMonthly;
}else{
    currentPrice += 0;
}

console.log(currentPrice)

// Add the total Price to the webPage
const totalPrice = document.querySelector('#last-js')

totalPrice.innerHTML += `<span id="total-js">+$${currentPrice}/mo</span>`

const totalMonthlyOrYearlyTxt = document.querySelector('#m-y-txt');

if (isYearly === true) {
    totalMonthlyOrYearlyTxt.innerHTML += '(per Year)';
}else{
    totalMonthlyOrYearlyTxt.innerHTML += '(per month)';
}

//reset all Plan when the click is press
const changeBtn = document.querySelector('#change-btn');

console.log(changeBtn)
changeBtn.addEventListener('click', () =>{
    
})

function change() {
    setTimeout(() => {
        localStorage.clear('arcadePlan')
     }, 1000);
}