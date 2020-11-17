import {gsap} from "gsap";

import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {MotionPathHelper} from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, MotionPathHelper);

const logoTL = gsap.timeline();

gsap.set("#badge", {
    transformOrigin: "center"
});
gsap.set("#panther-logo", {
    transformOrigin: "center"
});

export function logoAnimation() {
    logoTL
        .fromTo(".badge-lines", {
            drawSVG: "0%"
        }, {
            duration: 0.5,
            drawSVG: "100%",
            stagger: -0.05
        }, "badge logo")
        .fromTo(".badge-lines-2", {
            drawSVG: "0%"
        }, {
            duration: 0.5,
            drawSVG: "100%",
            stagger: 0.05
        }, "badge logo")
        .from("#badge", {
            duration: 0.5,
            scale: 4.5
        }, "-=.5")
        .from("#left-wing", {
            duration: 0.25,
            x: 200,
            alpha: 0
        }, "wings")
        .from("#right-wing", {
            duration: 0.25,
            x: -200,
            alpha: 0
        }, "wings")
        .from("#panther-holder-outline", {
            duration: 0.5,
            drawSVG: "0%"
        })
        .from("#panther-holder", {
            duration: 0.5,
            alpha: 0
        }, "-=.25", "panther text")
        .from("#panther-text", {
            duration: 0.5,
            alpha: 0
        }, "-=.25", "panther text");

    return logoTL;

}

const logoScaleTL = gsap.timeline();

export function logoScaleAnim() {
    logoScaleTL
        .to("#panther-logo", {
            duration: 0.5,
            scale: 0.15,
            motionPath: {
                path: "#logo-scale-path",
                align: "#logo-scale-path",
                alignOrigin: [0.5, 0.5]
            }
        }, "logo move")
        .to("#panther-container", {
            backgroundColor: "#17061E"
        }, "logo move");

        //MotionPathHelper.create("#panther-logo");

    return logoScaleTL;
}