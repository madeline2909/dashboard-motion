import {gsap} from "gsap";

import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, MotionPathPlugin);

const carMoveTL = gsap.timeline({onComplete:speedCounterUp});

export function carMove() {
    carMoveTL
        .from("#gearshift-R", {
            duration: 0.25,
            x: 40
        }, "gearshift")
        .to("#gearshift-P", {
            duration: 0.25,
            x: -40
        }, "gearshift")
        .to("#gearshift-outline", {
            fill:"#D2E679",
            stroke:"#D2E679"
        }, "gearshift")
        .to("#current-location", {
            duration:0.5,
            morphSVG:"#pointer"
        }, "gearshift") 
        .fromTo("#nav-solid-path", {drawSVG:"100% 100%"}, {drawSVG:"0% 100% "}, "-=.25") 
    return carMoveTL
}

const carSpeedUpTL = gsap.timeline({onComplete:speedCounterDown});
gsap.set("#current-location",{transformOrigin:"center"})

export function carSpeedUp() {
    carSpeedUpTL
        .from("#current-location", {
            duration: 20,
            motionPath: {
                path: "#nav-solid-path",
                align: "#nav-solid-path",
                end: 0.7,
                autoRotate: -90,
                alignOrigin: [0.5, 0.5]
            }
        }, "speed up") 
        .fromTo("#rpm-circle-data-2",{stroke:"#fff", drawSVG:"100% 100%"}, {
            duration: 8,
            drawSVG: "100%"
        }, "speed up")
        .to("#rpm-value-0", {
            duration: 8,
            morphSVG: "#rpm-value-mid",
            fill: "#fff"
        }, "speed up")
        .fromTo("#navigation",{x:40,y:50}, {
            duration: 20,
            x:250,
            y:250
        },"speed up") 
        //.add(speedCounterDown(),"-=3")
        
    return carSpeedUpTL;
}

//speed count up
function speedCounterUp () {
    //console.log("speed up")
    
    /*
    Change the counter speed for how fast your want your number to go up. 1000 is equal to 1 second

    1000 = 1 second
    500 = 1/2 second
    250 = 1/4 second
    */
    var counterSpeed = 100;

    // Set this number you want your counter to count up to. Default is 20
    var topSpeed = 30;
    
    // If yu don't want your speed to start at 0, change it here. Default is 0.
    var speedNumber = 0;
    
    var myVar = setInterval(speedCounter, counterSpeed);
    
    function speedCounter() {
    
        if (speedNumber < topSpeed) {
            speedNumber++;
            document.getElementById("speedTag").innerHTML = speedNumber;
        } else {
            clearInterval(myVar);
        }
    
    return speedNumber;
    }
}

//speed count down
function speedCounterDown () {
    //console.log("speed down")
    
    /*
    Change the counter speed for how fast your want your number to go up. 1000 is equal to 1 second

    1000 = 1 second
    500 = 1/2 second
    250 = 1/4 second
    */
    var counterSpeed = 100;

    // Set this number you want your counter to count up to. Default is 20
    var lowestSpeed = 0;
    
    // If yu don't want your speed to start at 0, change it here. Default is 0.
    var speedNumber = 30;
    
    var myVar = setInterval(speedCounter, counterSpeed);
    
    function speedCounter() {
    
        if (lowestSpeed < speedNumber) {
            speedNumber--;
            document.getElementById("speedTag").innerHTML = speedNumber;
        } else {
            clearInterval(myVar);
        }
    
    return speedNumber;
    }
}


