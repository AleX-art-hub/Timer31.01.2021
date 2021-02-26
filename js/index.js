'use strict';
const valueElem=document.getElementById("timerValue");
const startElem=document.getElementById("start");
const stopElem=document.getElementById("stop");
const resetElem=document.getElementById("reset");

const date = new Date();
const DELAY = 10;

let idTimer = null;

startElem.onclick = function(){
    if(idTimer) return;
    idTimer = setInterval(addSecond,DELAY);
};

stopElem.onclick = function(){
    if(idTimer){
        clearInterval(idTimer);
        idTimer=null;
    }
};

resetElem.onclick = function(){
    date.setMinutes(0,0,0);
    updateTimer()
};


function addSecond(){
    date.setMilliseconds(date.getMilliseconds()+DELAY);
    updateTimer();
}

function updateTimer(){
    valueElem.innerText= `${dateFormat2(date.getMinutes())}:${dateFormat2(
        date.getSeconds()
    )}:${dateFormat3(date.getMilliseconds())}`;
}

function dateFormat2(value){
    return value < 10 ? `0${value}` : value; //Так проще чем ниже
    /*if(value<10){
        return `0${value}`;
    }
    return value;*/
}
function dateFormat3(value){
    return value <100 ? (value <10 ? `00${value}` : `0${value}`) : value; //Так проще чем ниже
    /*if(value<100){
        if(value<10){
            return `00${value}`;
        }
        return `0${value}`;
    }
    return value;*/
}