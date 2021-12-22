function useractivate(login){
    let user = getUser(login);
    user.isActive = !user.isActive;
    localStorage.setItem(user.login, JSON.stringify(user));
    location.reload();
}
function userrestore(login){
    let user = getUser(login);
    user.password = "Newpassword_13";
    localStorage.setItem(user.login, JSON.stringify(user));
    alert("USER'S PASSWORD " + user.login + " SUCCESSFULLY INSTALLED \n NEW PASSWORD: Newpassword_123");
}

function userdelete(login){
    localStorage.removeItem(login);
    location.reload();
}

function getUser(login){
    return JSON.parse(localStorage.getItem(login));
}
function countOfUser(){
    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let keys = Object.keys(localStorage);
    let count = 0;
    keys.forEach(key => {
        if(key.match(regExp)) {
            let user = JSON.parse(localStorage.getItem(key));
        }
    });
}