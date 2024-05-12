let pw = document.getElementById('password');
let cpw = document.querySelector('#confpassword');
let rpwInfo = document.querySelector('#pw-match');
let upper = document.getElementById("pw-upper");
let number = document.getElementById("pw-numb");
let lower = document.getElementById("pw-lower");
let char = document.getElementById("pw-chars");
let list = document.querySelector(".pw-req");

cpw.addEventListener("input", () => {
    if(pw.value !== cpw.value) {
        rpwInfo.classList.replace('invisible', 'visible');
    } else {
        rpwInfo.classList.replace('visible', 'invisible');
    }
});

pw.addEventListener("input", () => {
    cpw.value = "";
})

pw.addEventListener("input", () => {
    // check for number
    if(pw.value.match(/(?=.*\d)/) !== null) {
        number.style.color = "green";
    } else if((pw.value.match(/(?=.*\d)/) === null)) {
        number.style.color = "red";
    }

    // check for lowercase
    if(pw.value.match(/(?=.*[a-z])/) !== null) {
        lower.style.color = "green";
    } else if((pw.value.match(/(?=.*\d)/) === null)) {
        lower.style.color = "red";
    }

    // check for uppercase
    if(pw.value.match(/(?=.*[A-Z])/) !== null) {
        upper.style.color = "green";
    } else if((pw.value.match(/(?=.*\d)/) === null)) {
        upper.style.color = "red";
    }

    // check for 8 chars
    if(pw.value.length >= 8) {
        char.style.color = "green";
    } else if(pw.value.length < 8) {
        char.style.color = "red";
    }
})


function reload() {
    location.reload();
  }