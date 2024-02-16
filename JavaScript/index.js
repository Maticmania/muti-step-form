const nameErr = document.querySelector("form .error");
const emailErr = document.querySelector('#emailError');
const phoneErr = document.querySelector('#phoneError');
const inputName = document.getElementById("name");
const inputEmail = document.querySelector('#email');
const inputNo = document.querySelector('#number');
const btnNext = document.querySelector('#next')
const link = document.querySelector('#link');




//color declaration
let Strawberryred = 'hsl(354, 84%, 57%)';
let Purplishblue = 'hsl(243, 100%, 62%)';

console.log(inputName);
console.log(inputEmail);
console.log(inputNo);

// nameInput, nameError

inputName.addEventListener("focus", function(){
    inputName.style.outlineColor = Strawberryred;
})

    inputName.addEventListener("input", function () {
        const inputValue = inputName.value.trim();
        if(inputValue.length >= 3){
            inputName.style.outlineColor = Purplishblue;
            nameErr.style.display = '';
            
        }else{
            inputName.style.outlineColor =  Strawberryred;
            nameErr.innerHTML = 'This field is required';
        }
    
    })

//inputEmail, emailErr
inputEmail.addEventListener("focus", function(){
    inputEmail.style.outlineColor = Strawberryred;
})
inputEmail.addEventListener("input", function (event) {
    const emailValue = inputEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailValue.length >= 6 && emailRegex.test(emailValue)){
        inputEmail.style.outlineColor = Purplishblue;
        emailErr.textContent = "";
    }else if(emailValue.length <= 3){
        inputEmail.style.outlineColor = Strawberryred;
        emailErr.textContent = "must be 6 characters long or more";
        console.log(emailErr.textContent)
    }else{
        inputEmail.style.border = Strawberryred;
        emailErr.innerHTML = "Invalid email format";
        console.log(emailErr.innerHTML)
    }
})

//inputNo, PhoneErr
inputNo.addEventListener("focus", function(){
    inputNo.style.outlineColor = Strawberryred;
})
inputNo.addEventListener("input", function (event) {
    const inputValue = inputNo.value.trim();
    if(inputValue.length === 11 && !isNaN(inputValue) ){
        inputNo.style.outlineColor = Purplishblue;
        phoneErr.textContent = '';
    }else if (!isNaN(inputValue) && inputValue.length < 11 || inputValue.length > 11) {
        inputNo.style.border = Strawberryred;
        phoneErr.textContent = "Enter a valid phone number";
      }
       else{
        inputNo.style.outlineColor =  Strawberryred;
        phoneErr.innerHTML= 'Invalid input';
    }
})

//btnNext
const isFormValid =()=>{
    const phoneValue = inputNo.value.trim();
    const emailValue = inputEmail.value.trim();
    const nameValue = inputName.value.trim();

    //checking each input validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isNameValid = nameValue.length >= 3;
    const isEmailValid = emailValue.length >= 5 && emailRegex.test(emailValue);
    const isPhoneValid = phoneValue.length === 11 && !isNaN(phoneValue)

    return isNameValid && isEmailValid && isPhoneValid
}

//Add click event to the nextBtn

btnNext.addEventListener('click', (event) =>{
    if(!isFormValid ()){
        event.preventDefault();
        inputName.style.outlineColor =  Strawberryred;
        nameErr.innerHTML = 'This field is required';

        inputEmail.style.outlineColor =  Strawberryred;
        emailErr.innerHTML = 'This field is required';
        inputNo.style.outlineColor =  Strawberryred;
        phoneErr.innerHTML = 'This field is required';
        return
    }

    const phoneValue = inputNo.value.trim();
    const emailValue = inputEmail.value.trim();
    const nameValue = inputName.value.trim();

    const formData = {
        name: nameValue,
        email: emailValue,
        phone: phoneValue
    }
    localStorage.setItem('InputData', JSON.stringify(formData))

})

const data = localStorage.getItem("InputData")
console.log(data);
const parsedData = JSON.parse(data)
console.log(parsedData);

if(parsedData){
    inputName.value = parsedData.name || ""
    inputEmail.value = parsedData.email || ""
    inputNo.value = parsedData.phone || ""
  }


// remove items from local storage
setTimeout(() => {
   localStorage.removeItem('InputData') 
}, 5000);