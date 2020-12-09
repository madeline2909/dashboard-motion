import {gsap} from "gsap";

import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

import {speedCounter} from "./count-up.js";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, MotionPathPlugin);

const carMoveTL = gsap.timeline();

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

const carSpeedUpTL = gsap.timeline();
gsap.set("#current-location",{transformOrigin:"center"})

export function carSpeedUp() {
    carSpeedUpTL
        .from("#current-location", {
            duration: 30,
            motionPath: {
                path: "#nav-solid-path",
                align: "#nav-solid-path",
                end: 0.7,
                autoRotate: -90,
                alignOrigin: [0.5, 0.5]
            }
        }, "speed up") 
        .fromTo("#rpm-circle-data-2",{stroke:"#fff", drawSVG:"100% 100%"}, {
            duration: 30,
            drawSVG: "100%"
        }, "speed up")
        .to("#rpm-value-0", {
            duration: 30,
            ease:"none",
            morphSVG: "#rpm-value-mid",
            fill: "#fff"
        }, "speed up")
        .add(speedCounter())
        .fromTo("#navigation",{x:40,y:50}, {
            duration: 30,
            x:250,
            y:250
        },"speed up") 
        
    return carSpeedUpTL;
}
