import {gsap} from "gsap";

import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {MotionPathHelper} from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, MotionPathHelper);

const dashboardAppearTL = gsap.timeline();

export function dashboardAppear() {
    dashboardAppearTL
        .from("#dashboard-outline", {
            duration: 0.75,
            drawSVG: "0%"
        })
        .from("#dashboard", {
            duration: 1,
            alpha:0
        })
    return dashboardAppearTL;
}
