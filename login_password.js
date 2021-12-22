function generateId() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

checkAuth();

let userObj = {
    id: "",
    login: "",
    password: "",
    isActive: true,
}

// let keys = Object.keys(localStorage);
console.log(JSON.parse(localStorage.getItem("TEST")));

let loginBox = document.getElementById("login");
let regBox = document.getElementById("register");
let loginTab = document.getElementById("num1");
let regTab = document.getElementById("num2");

function loginfunc() {
    regBox.style.visibility = "hidden";
    loginBox.style.visibility = "visible";

    loginTab.style.backgroundColor = "#f5f5f5";
    regTab.style.backgroundColor = "#ddd";
}

function regfunc() {
    regBox.style.visibility = "visible";
    loginBox.style.visibility = "hidden";

    regTab.style.backgroundColor = "#f5f5f5";
    loginTab.style.backgroundColor = "#ddd";

}

function register() {
    let email = document.getElementById("num5").value;
    let password = document.getElementById("num6").value;
    let passwordRetype = document.getElementById("num7").value;
    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (email.length === 0) {
        alert('PLEASE ENTER YOUR EMAIL');
    } else if ((!email.match(regExp))) {
        alert('INVALID EMAIL');
    } else if (password.length === 0) {
        alert('PLEASE ENTER YOUR PASSWORD');
    } else if ((password.length < 4) || (password.length > 15)) {
        alert('MINIMUM 4 CHAR & MAX 15 CHAR');
    } else if (!password.match(numbers)) {
        alert('PLEASE ADD 1 DIGIT INTO PASSWORD');
    } else if (!password.match(upperCaseLetters)) {
        alert('PLEASE ADD 1 UPPERCASE LETTER INTO PASSWORD');
    } else if (!password.match(lowerCaseLetters)) {
        alert('PLEASE ADD 1 LOWERCASE LETTER INTO PASSWORD');
    } else if (passwordRetype === "") {
        alert("RE WRITE PASSWORD");
    } else if (password !== passwordRetype) {
        alert("PASSWORD DON'T MATCH RETYPE YOUR PASSWORD.");
    } else if (localStorage.getItem(email) === null) {
        let newUser = userObj;
        newUser.id = generateId();
        newUser.login = email;
        newUser.password = password;
        localStorage.setItem(email, JSON.stringify(newUser));
        alert(email + "  THANKS FOR REGISTRATION");

        document.getElementById("num5").value = "";
        document.getElementById("num6").value = "";
        document.getElementById("num7").value = "";
    } else {
        alert(email + "IT IS ALREADY REGISTER. PLEASE, MAKE NEW REGISTER.");
    }
}

function login() {
    // let msg = document.getElementById('msg');
    let email = document.getElementById("num3").value;
    let password = document.getElementById("num4").value;
    if(email==="Zhansaya@bk.ru" && password==="Zhansaya123"){
                window.open('./admin_panel.html','_blank').focus();
            }
    try {
        let loggedUser = JSON.parse(localStorage.getItem(email));
        if (loggedUser.password !== password) {
            if (password === "") {
                alert("PASSWORD REQUIRED.");
                return;
            }
            alert("INCORRECT LOGIN OR PASSWORD. TRY AGAIN!");
        } else {
            if(!loggedUser.isActive){
                alert(email + " IS NOT ACTIVATED. PLEASE, WAIT FOR ADMIN TO GIVE PERMISSION.");
                return;
            }
            localStorage.setItem("authUser", email);
            // alert(email + " you are successfully logged in now\nWelcome to our website.");
     
            
            window.open('./webpages.html','_blank').focus();
                
            window.close();
            document.getElementById("num3").value = "";
            document.getElementById("num4").value = "";
            location.reload();
        }
    } catch (e){
        alert("USER DOESN'T EXIST. PLEASE, REGISTER FIRST.");
    }
}

function logout() {
    localStorage.removeItem("authUser");
    checkAuth();
    location.reload();
}

function checkAuth(){
    let email = localStorage.getItem("authUser");
    let el = document.getElementById("logout");
    if(email !== null){
        el.classList.remove("d-none");
        el.append('LOG OUT ' + email, document.createElement("b"));
    } else {
        el.classList.add("d-none");
    }
}

function showPass() {
    let x = document.getElementById("num4");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}