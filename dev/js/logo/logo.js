import {gsap} from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

const logoTL = gsap.timeline();

gsap.set("#badge",{transformOrigin: "center"});

export function logoAnimation(){
    logoTL
    // .from("#moon-rings",{duration:3, y:1000})
    // .from(".rings",{duration:1, scale:0, stagger:-0.5, ease: "back.out(1.7)"},"-=2")
    .fromTo(".badge-lines",{drawSVG:"0% 0%"},{duration:1, drawSVG: "100%", stagger:-0.05}, "badge logo")
    .fromTo(".badge-lines-2",{drawSVG:"0% 0%"},{duration:1, drawSVG: "100%", stagger:0.05}, "badge logo")
    .from("#badge",{scale: 5});

    return logoTL;

}