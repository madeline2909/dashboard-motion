import {gsap} from "gsap";

import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {MotionPathHelper} from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MorphSVGPlugin, DrawSVGPlugin, MotionPathHelper);

// main tl for the mode-change animations
export const modeChangeTL = gsap.timeline();

export function modeChange() {
    modeChangeTL
    .add(btnMove(), "mode change")
    .add(musicChange(), "mode change")
    .add(fuelAndTemp(),"-=.5", "mode change")
    .add(rpmAndMile(), "mode change")
    .add(speedAndIcon(), "mode change")
    .add(road(), "mode change")

    return modeChangeTL;
}

//tl for the rpm animations
const rpmAndMileTL = gsap.timeline();

gsap.set("#rpm-circle-data-2",{alpha:0})

function rpmAndMile() {
    rpmAndMileTL
        .to("#rpm-numbers", {
            duration: 0.5,
            alpha:0
        })
        .to("#rpm-text", {
            duration:0.5,
            motionPath:
            {
                path:"#rpm-text-motion-path",
                align: "#rpm-text-motion-path",
                alignOrigin: [0.5, 0.5]
            }
        },"-=.25")
        .to("#rpm-outline", {
            duration: 0.5,
            drawSVG: "0%"
        },"-=.5", "rpm and mile")
        .to("#rpm-circle-data-1", {
            duration: 0.5,
            alpha:0
        },"-=.25", "rpm and mile")
        .fromTo("#rpm-circle-data-2",{alpha:0}, {
            duration: 0.5,
            alpha:1
        }, "rpm and mile")
        .fromTo("#rpm-circle-outline",{
            stroke:"#fff", drawSVG:"100% 100%"}, {
            duration: 0.5,
            drawSVG: "100%"
        }, "rpm and mile")
        .from("#total-miles", {
            duration: 0.5,
            motionPath:
            {
                path:"#mile-motion-path",
                align: "#mile-motion-path",
                alignOrigin: [0.5, 0.5]
            }
        },"rpm and mile")
        
        
        //MotionPathHelper.create("#rpm-text");
    return rpmAndMileTL;
    
}

const roadTL = gsap.timeline();

function road() {
    roadTL
        .to("#road", {
            duration: 0.01,
            stroke: "#fff"
        })
        .fromTo(".road", 
        {drawSVG:"20% 0%"}, {drawSVG:"80% 100%", repeat:1, ease:"none",duration:1}, "-=.25")
        .to("#road", {
            stroke: "none",
            duration:0.5,
            fill:"#fff"
        },"-=0.25")

    return roadTL;
}

const speedAndIconTL = gsap.timeline();

//gsap.set("#speedTag",{transformOrigin: "right bottom"})

function speedAndIcon() {
    speedAndIconTL
        .to("#speed-circle-bg", {
            duration: 0.5,
            fill:"#fff"
        })
        .to("#speedTag", {
            fill: "#D16504",
            duration: 1,
            scale: 0.7,
            motionPath:
            {
                path:"#speed-motion-path",
                align: "#speed-motion-path",
                alignOrigin: [1, 1]
            }
        }, "speed")
        .to("#KMH", {
            fill: "#D16504",
            duration: 1,
            motionPath:
            {
                path:"#kmh-motion-path",
                align: "#kmh-motion-path",
                alignOrigin: [0.5, 0.5]
            }
        }, "speed")
        .to("#warning-icons", {
            duration: 1,
            motionPath:
            {
                path:"#icons-motion-path",
                align: "#icons-motion-path",
                alignOrigin: [0.5, 0.5]
            }
        }, "speed")

    //MotionPathHelper.create("#speedTag");
    return speedAndIconTL;
}

const fuelTempTL = gsap.timeline();

function fuelAndTemp() {
    fuelTempTL
        .to("#temp", {
            duration: 0.75,
            x:-8,
            y:-90
        }, "vertical move")
        .to("#fuel", {
            duration: 0.75,
            x:40,
            y:-260
        }, "vertical move")

    return fuelTempTL;
}

const musicChangeTL = gsap.timeline();

gsap.set("#music-container",{transformOrigin: "right center"})
gsap.set("#music-small-container",{drawSVG:"0%"})

function musicChange() {
    musicChangeTL
        .to(".music-change-fade", {
            duration: 0.5,
            alpha:0
        }, "music change")
        .fromTo("#music-container", 
        {drawSVG:"100% 0%"}, {drawSVG:"25% 25%", duration: 0.75}, "music change")
        .fromTo("#music-small-container", 
        {drawSVG:"100% 100%"}, {drawSVG:"100%", duration: 0.5}, "-=.25")

    return musicChangeTL;
}

const btnTL = gsap.timeline();

gsap.set("#mode-2D-container",{alpha:0})

function btnMove() {
    btnTL
        .to("#mode-3D-container", {
            duration: 0.5,
            alpha:0
        }, "btn change")
        .to("#mode-2D-container", {
            duration: 0.5,
            alpha:1
        }, "btn change")

    return btnTL;
}

