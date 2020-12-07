import {gsap} from "gsap";

import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {MotionPathHelper} from "gsap/MotionPathHelper";
gsap.registerPlugin(MorphSVGPlugin, MotionPathPlugin, MotionPathHelper);

const valueStartTL = gsap.timeline();

export function valueStart() {
    valueStartTL
        .to("#rpm-value-0", {
            ease:"none",
            duration: 0.25,
            morphSVG: "#rpm-value-mid",
            fill: "#fff"
        }, "start full")
        .to("#rpm-value-0", {
            ease:"none",
            duration: 0.25,
            morphSVG: "#rpm-value-full",
            fill: "#fff"
        })
        .from(".gsap-drop", {
            y:"-10px",
            alpha:0,
            stagger: -0.02
        }, "start full")
        .to("#temp-value-0", {
            ease:"none",
            duration: 0.25,
            morphSVG: "#temp-value-full",
            fill: "#fff"
        }, "start full")
        .from(".fuel-values", {
            alpha: 0,
            stagger: -0.05
        }, "start full")
        .fromTo("#speedTag",{alpha: 0}, {
            duration: 0.5,
            alpha:1,
            motionPath:
            {
                path:"#speed-first-motion-path",
                align: "#speed-first-motion-path",
                alignOrigin: [0.5, 0.5]
            }
        }, "start full")
        //MotionPathHelper.create("#speedTag");
    return valueStartTL;
}

const valueTrueTL = gsap.timeline();

export function valueTrue() {
    valueTrueTL
        .to("#rpm-value-0", {
            ease:"none",
            duration: 0.25,
            morphSVG: "#rpm-value-mid",
            fill: "#fff"
        })
        .to("#rpm-value-0", {
            duration: 0.25,
            morphSVG: "#rpm-value-0",
            fill: "#fff"
        }, "return true")
        .to("#temp-value-0", {
            duration: 0.5,
            morphSVG: "#temp-value-true",
            fill: "#fff"
        }, "return true")
        .to(".fuel-fade-away", {
            alpha: 0,
            stagger: 0.05
        }, "return true")

    return valueTrueTL;
}