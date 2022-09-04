"use strict";

document.body.style.background = randomColorGeneration();
const button = document.getElementById("scrollButton");
let saveIndex = [];

function randomColorGeneration (){
    return '#'+(0x1000000+Math.random()*0xffffff).toString(16).substring(1,7);
}

function buttonToTop (){
    let scroll = window.scrollY;
    if (scroll >= 9000) {
        button.classList.add("scrollButton_active");
    } else {
        button.classList.remove("scrollButton_active");
    }
}

function goToTop (){
    window.scrollTo(0,0);
}

// Առաջին տարբերակ 

/*
Աշխատում է կատարելապես եւ փոխում է գույնը, առանց որեւէ սխալի
*/

function changeBackgroundColor1(){
    let width = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (width / height) * 100;
    if (parseInt(scrolled) === 10 && saveIndex.indexOf(parseInt(scrolled)) == -1) {
        saveIndex = [];
        document.body.style.background = randomColorGeneration();
        saveIndex.push(parseInt(scrolled));
    }
    if (parseInt(scrolled) === 10 && saveIndex.indexOf(parseInt(scrolled)) == -1) {
        saveIndex = [];
        document.body.style.background = randomColorGeneration();
        saveIndex.push(parseInt(scrolled));
    }
    if (parseInt(scrolled) === 20 && saveIndex.indexOf(parseInt(scrolled)) == -1) {
        saveIndex = [];
        document.body.style.background = randomColorGeneration();
        saveIndex.push(parseInt(scrolled));
    }
    if (parseInt(scrolled) === 30 && saveIndex.indexOf(parseInt(scrolled)) == -1) {
        saveIndex = [];
        document.body.style.background = randomColorGeneration();
        saveIndex.push(parseInt(scrolled));
    }
    if (parseInt(scrolled) === 40 && saveIndex.indexOf(parseInt(scrolled)) == -1) {
        saveIndex = [];
        document.body.style.background = randomColorGeneration();
        saveIndex.push(parseInt(scrolled));
    }
    if (parseInt(scrolled) === 50 && saveIndex.indexOf(parseInt(scrolled)) == -1) {
        saveIndex = [];
        document.body.style.background = randomColorGeneration();
        saveIndex.push(parseInt(scrolled));
    }
    if (parseInt(scrolled) === 60 && saveIndex.indexOf(parseInt(scrolled)) == -1) {
        saveIndex = [];
        document.body.style.background = randomColorGeneration();
        saveIndex.push(parseInt(scrolled));
    }
    if (parseInt(scrolled) === 70 && saveIndex.indexOf(parseInt(scrolled)) == -1) {
        saveIndex = [];
        document.body.style.background = randomColorGeneration();
        saveIndex.push(parseInt(scrolled));
    }
    if (parseInt(scrolled) === 80 && saveIndex.indexOf(parseInt(scrolled)) == -1) {
        saveIndex = [];
        document.body.style.background = randomColorGeneration();
        saveIndex.push(parseInt(scrolled));
    }
    if (parseInt(scrolled) === 90 && saveIndex.indexOf(parseInt(scrolled)) == -1) {
        saveIndex = [];
        document.body.style.background = randomColorGeneration();
        saveIndex.push(parseInt(scrolled));
    }
    if (parseInt(scrolled) === 100 && saveIndex.indexOf(parseInt(scrolled)) == -1) {
        document.body.style.background = randomColorGeneration();
        saveIndex.push(parseInt(scrolled));
        saveIndex = [];
    }

}

// եկրորդ տարբերակ 
/*

Այս տարբերակը շատ պարզ է եւ արագ է աշխատում, բայց կա մի բան,
երբեմն այն մի քանի անգամ փոխում է գույները մի տեղում

*/

function changeBackgroundColor2 () {
    let width = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (width / height) * 100;
    switch (parseInt(scrolled)) {
        case 10: document.body.style.background = randomColorGeneration(); break;
        case 20: document.body.style.background = randomColorGeneration(); break;
        case 30: document.body.style.background = randomColorGeneration(); break;
        case 40: document.body.style.background = randomColorGeneration(); break;
        case 50: document.body.style.background = randomColorGeneration(); break;
        case 60: document.body.style.background = randomColorGeneration(); break;
        case 70: document.body.style.background = randomColorGeneration(); break;
        case 80: document.body.style.background = randomColorGeneration(); break;
        case 90: document.body.style.background = randomColorGeneration(); break;
        case 100: document.body.style.background = randomColorGeneration(); break;
        default: break;
    }
}


button.addEventListener("click",goToTop);
window.addEventListener('scroll', changeBackgroundColor1);
window.addEventListener('scroll', buttonToTop);
