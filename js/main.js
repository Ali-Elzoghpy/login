let nameInput = document.getElementById("nameInput")
let emailInput = document.getElementById("emailInput")
let passwordInput = document.getElementById("passwordInput")
let loginBtn = document.getElementById("loginBtn")
let signinAnchor = document.getElementById("signinAnchor")
let signupBtn = document.getElementById("signupBtn")
let SucsessAlert = document.getElementById("SucsessAlert")
let alreadyExistAlert = document.getElementById("alreadyExistAlert")
let incorrectEmail = document.getElementById("incorrectEmail")
let inputsInquiedtAlert = document.getElementById("inputsInquiedtAlert")
let validAlert = document.getElementById("validAlert")
let validPassword = document.getElementById("validPassword")




function formBehavior() {
    let formElment = document.querySelector("form")
    formElment.addEventListener("submit", function (e) {
        e.preventDefault();
    })
}


let mainArr = []
if (localStorage.getItem("Data") != null) {
    mainArr = JSON.parse(localStorage.getItem("Data"))

}





function signUp() {

    let newArr = mainArr.find((elment) => {
        return elment.email == emailInput.value


    })


    if ( validInputs() == true && validPass()==true ) {
        if (newArr == undefined) {
            let data = {
                fName: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value,
            }
            mainArr.push(data)
            localStorage.setItem("Data", JSON.stringify(mainArr))
            SucsessAlert.classList.remove("d-none")
            alreadyExistAlert.classList.add("d-none")
            inputsInquiedtAlert.classList.replace("d-block", 'd-none')


        }
        else {
            alreadyExistAlert.classList.remove("d-none")
            SucsessAlert.classList.add("d-none")
            inputsInquiedtAlert.classList.add("d-none")


        }

    }else{
inputsInquiedtAlert.classList.remove("d-none")
 alreadyExistAlert.classList.add("d-none")
    }





}










let logIn = () => {


    let newArr = mainArr.find((elment) => {


        return elment.email == emailInput.value && elment.password == passwordInput.value
    })





    if (emailInput.value == '' && passwordInput.value == '') {

        inputsInquiedtAlert.classList.remove("d-none")
        incorrectEmail.classList.add("d-none")
    } else {


        if (newArr) {

            localStorage.setItem('fName', newArr.fName)
            console.log("ali");
            

            location.replace("./home.html")



        } else {
            incorrectEmail.classList.remove("d-none")
            inputsInquiedtAlert.classList.add("d-none")
        }


    }


}

function validInputs() {
    var reg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/
    if (reg.test(emailInput.value) == true) {
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
        

        return true

    }
    else {
        emailInput.classList.add("is-invalid")
        emailInput.classList.remove("is-valid")
       
        return false

    }
}
if(emailInput){
    emailInput.addEventListener("input", validInputs)
}


function validPass() {
    var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    if (reg.test(passwordInput.value) == true) {
        passwordInput.classList.add("is-valid")
        passwordInput.classList.remove("is-invalid")
        

        return true

    }
    else {
        passwordInput.classList.add("is-invalid")
        passwordInput.classList.remove("is-valid")
        return false

    }
}
if(passwordInput){
    passwordInput.addEventListener("input", validPass)
}






