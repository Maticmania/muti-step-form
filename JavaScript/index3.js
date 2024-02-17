const online = document.querySelector('.price')
const storage = document.querySelector('.price-2')
const profile = document.querySelector('.price-3')

//Task
const data = localStorage.getItem("priceSelection");

const priceChosen = JSON.parse(data)
console.log(priceChosen);

    // if (priceChosen == true) {
    //     monthlyPrice.innerHTML = '+$10/yr'
    // }else{
    //     monthlyPrice.innerHTML = '+$1/mo'
    // }

    // if (priceChosen == true) {
    //     monthlyPrice2.innerHTML = '+$20/yr'
    // }else{
    //     monthlyPrice2.innerHTML = '+$2/mo'
    // }
    // if (priceChosen == true) {
    //     monthlyPrice3.innerHTML = '+$20/yr'
    // }else{
    //     monthlyPrice3.innerHTML = '+$2/mo'
    // }


    online.innerHTML = priceChosen ? '+$10/yr' : '+$1/mo';
    storage.innerHTML = priceChosen ? '+$20/yr' : '+$2/mo';
    profile.innerHTML = priceChosen ? '+$20/yr' : '+$2/mo' ;  


const onlineCheck = document.querySelector('#online')
const storageCheck = document.querySelector('#storage')
const profileCheck = document.querySelector('#profile')

// console.log(onlineCheck.checked);
// console.log(storageCheck.checked);
// console.log(profileCheck.checked);

onlineCheck.addEventListener('change', () =>{
    const onlineSelect = onlineCheck.checked
    // onlineCheck = onlineSelect
    localStorage.setItem('online', JSON.stringify(onlineSelect))
    // console.log(onlineCheck.checked)
})
storageCheck.addEventListener('change', () =>{
    const storageSelect = storageCheck.checked
    // console.log(storageCheck.checked)
    localStorage.setItem('storage', JSON.stringify(storageSelect))
})

profileCheck.addEventListener('change', () =>{
    const profileSelect = profileCheck.checked
    // console.log(profileCheck.checked)
    localStorage.setItem('profile', JSON.stringify(profileSelect))
})

const data1 = localStorage.getItem('online');
const onlineData = JSON.parse(data1)

const data2 = localStorage.getItem('storage');
const storageData = JSON.parse(data2)

const data3 = localStorage.getItem('profile');
const profileData = JSON.parse(data3)

if (onlineData === true) {
    online.checked
    
}else{
    online
}

// if(parsedData){
//     inputName.value = parsedData.name || ""
//     inputEmail.value = parsedData.email || ""
//     inputNo.value = parsedData.phone || ""
//   }


