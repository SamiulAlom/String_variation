
function getNum(name) {
    return name.length;
}
function getFC(name) {
    return name[0];
}
function getLC(name) {
    return name[name.length - 1];
}
function getLowC(name) {
    return name.toLowerCase();
}
function getHighC(name) {
    return name.toUpperCase();
}
function getCap(name) {
    return name[0].toUpperCase() + name.substring(1).toLowerCase(); 
}

const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const answer5 = document.querySelector('#answer5');
const answer6 = document.querySelector('#answer6');

const start = document.querySelector("#name");

start.addEventListener("keyup", () => {
    const value = start.value;

    answer1.textContent = getNum(value);
    answer2.textContent = getFC(value);
    answer3.textContent = getLC(value);
    answer4.textContent = getLowC(value);
    answer5.textContent = getHighC(value);
    if (value) {
       answer6.textContent = getCap(value);   
    }else{
        answer6.textContent = "";
    }
});
