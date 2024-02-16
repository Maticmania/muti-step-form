const arcade = document.querySelector('#arcade')
const arcadePrice = document.querySelector('#arcPrice')
const advanced = document.querySelector('#advanced')
const advancedPrice = document.querySelector('#advPrice')
const pro = document.querySelector('#pro')
const proPrice = document.querySelector('#proPrice')
const toggleBtn = document.querySelector('#toggle');
const goBack = document.querySelector('#go-back');

// console.log(toggleBtn.checked);

//Function to update the price
// const isYearly = toggleBtn.checked;
function updatePrice(){
    const isYearly = toggleBtn.checked;

    //update pricess for each plan
    arcadePrice.innerHTML = isYearly ? '$90/yr' : '$9/mo';
    advancedPrice.innerHTML = isYearly ? '$120/yr' : '$12/mo';
    proPrice.innerHTML = isYearly ? '$150/yr' : '$15/mo';

    arcade.innerHTML =isYearly ? '2 month free' : '';
    advanced.innerHTML = isYearly ? '2 month free' : '';
    pro.innerHTML = isYearly ? '2 month free' : '';
    
    localStorage.setItem('priceSelection',isYearly );
    
}
updatePrice();

toggleBtn.addEventListener('change', updatePrice);


localStorage.setItem('priceSelection',isYearly );

//localStorage
// saving item to your local storage detItem
// localStorage.setItem('key', value)



// retreiving item from local storage get itme
// Deleting item from local storageitem

// Go Back
// 
// goBack.addEventListener('click', function () {
//     const data = localStorage.getItem('inputData')
//     const parsedData = JSON.parse(data)
//     console.log(data);
    
// })
            
//     const data = localStorage.getItem("formData")
//     console.log(data);
    



