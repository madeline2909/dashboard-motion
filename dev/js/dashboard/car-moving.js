import {gsap} from "gsap";

import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
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
            fill:"#00DBC1",
            stroke:"#00DBC1"
        }, "gearshift")
        .from("#pointer", {
            alpha:0
        }, "gearshift") 
        .to("#current-location", {
            alpha:0
        }, "gearshift") 
        .fromTo("#nav-solid-path", {drawSVG:"100% 100%"}, {drawSVG:"0% 100% "}, "-=.25") 
        
    return carMoveTL;
}

const carSpeedUpTL = gsap.timeline();


export function carSpeedUp() {
    carSpeedUpTL
        .from("#pointer", {
            duration: 50,
            motionPath: {
                path: "#nav-solid-path",
                align: "#nav-solid-path",
                end: 0.5,
                autoRotate: -90,
                alignOrigin: [0.5, 0.5]
            }
        }) 
        
    return carSpeedUpTL;
}
