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
const isYearly = toggleBtn.checked;
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


localStorage.setItem('priceSelection',isYearly);
// console.log(isYearly);



//getting the plan that was selected
const arcadeSelect = document.querySelector('.arcade-plan');
const advanceSelect = document.querySelector('.advance-plan');
const proSelect = document.querySelector('.pro-plan')

const arcadeCard = document.querySelector('#arcade-card');
const advanceCard = document.querySelector('#advance-card');
const proCard = document.querySelector('#pro-card');


console.log(arcadeSelect.checked);

arcadeSelect.addEventListener('change', ()=>{
    const arcadePlan = arcadeSelect.checked
    console.log(arcadePlan)
    if (arcadePlan === true) {
        arcadeCard.style.border = '2px solid darkblue';
    }else{
        arcadeCard.style.border = '1px solid gray';
    }
    localStorage.setItem('arcadePlan', JSON.stringify(arcadePlan))
})

advanceSelect.addEventListener('change', ()=>{
    const advancePlan = advanceSelect.checked
    console.log(advancePlan)
    if (advancePlan === true) {
        advanceCard.style.border = '2px solid darkblue';
    }else{
        advanceCard.style.border = '1px solid gray';
    }
    localStorage.setItem('advancePlan', JSON.stringify(advancePlan))
})

proSelect.addEventListener('change', ()=>{
    const proPlan = proSelect.checked
    console.log(proPlan)
    if (proPlan === true) {
        proCard.style.border = '2px solid darkblue';
    }else{
        proCard.style.border = '1px solid gray';
    }
    localStorage.setItem('proPlan', JSON.stringify(proPlan))
    return
})

//Making sure the werey only select one
const isAllSelected =()=>{
    const proPlan = proSelect.checked
    const advancePlan = advanceSelect.checked
    const arcadePlan = arcadeSelect.checked
    
const allSelect = proPlan === true && advancePlan === true && arcadePlan === true; 
const select2n3 = proPlan === true && advancePlan === true;
const select1n2 = arcadePlan === true && advancePlan === true;
const select1n3 = arcadePlan === true && proPlan === true;

return all = allSelect === true || select2n3 === true || select1n2 === true || select1n3 === true
}

const nextBtn = document.querySelector('.next-stp');
nextBtn.addEventListener('click', (next) => {
        if (isAllSelected()) {
            next.preventDefault(); 
            alert(' Select Only one Plan please');
        }
    return 
})

//Making sure the werey select at least one
const atLeastOne = () => {
    const proPlan = proSelect.checked
    const advancePlan = advanceSelect.checked
    const arcadePlan = arcadeSelect.checked

    const allSelect = proPlan === false && advancePlan === false && arcadePlan === false; 
    
    return allSelect
}

nextBtn.addEventListener('click', (next) => {
    if (atLeastOne()) {
        next.preventDefault(); 
        alert('Select at least One Plan please');
    }
return 
})


// disable the button if all or two was selected
// const nextBtn = document.querySelector('.next-stp');

// nextBtn.addEventListener('click', (next) =>{
//     if (isAllSelected() === true) {
//         next.preventDefault(); 
//         alert(' Select Only one Plan please');
//     }else{
//         next.Default(); 
//     }

//     return
// })


// alert(' Select Only one Plan please')





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
    



