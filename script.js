let pw = document.querySelector('#password');
let cpw = document.querySelector('#confpassword');
let rpwInfo = document.querySelector('#pw-match');

cpw.addEventListener("input", () => {
    if(pw.value !== cpw.value) {
        rpwInfo.classList.replace('invisible', 'visible');
    } else {
        rpwInfo.classList.replace('visible', 'invisible');
    }
});