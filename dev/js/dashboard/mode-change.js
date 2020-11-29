import {gsap} from "gsap";

import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {MotionPathHelper} from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MorphSVGPlugin, DrawSVGPlugin, MotionPathHelper);

// main tl for the mode-change animations
const modeChangeTL = gsap.timeline();

export function modeChange() {
    modeChangeTL
    .add(rpmMorph(), "speed and rpm")
    .add(speedMorph(), "speed and rpm")
    return modeChangeTL;
}

//tl for the rpm animations
const rpmMorphTL = gsap.timeline();

function rpmMorph() {
    rpmMorphTL
        .to("#rpm-outline", {
            duration: 1,
            morphSVG: "#rpm-circle-outline"
        })
}

const speedMorphTL = gsap.timeline();

function speedMorph() {
    speedMorphTL
        .from("#speed-circle-bg", {
            duration: 1,
            alpha:0
        })
}