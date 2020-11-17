import {gsap} from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

const logoTL = gsap.timeline();

gsap.set("#badge",{transformOrigin: "center"});

export function logoAnimation(){
    logoTL
    // .from("#moon-rings",{duration:3, y:1000})
    // .from(".rings",{duration:1, scale:0, stagger:-0.5, ease: "back.out(1.7)"},"-=2")
    .fromTo(".badge-lines",{drawSVG:"0%"},{duration:0.5, drawSVG: "100%", stagger:-0.05}, "badge logo")
    .fromTo(".badge-lines-2",{drawSVG:"0%"},{duration:0.5, drawSVG: "100%", stagger:0.05}, "badge logo")
    .from("#badge",{duration:0.5, scale: 4.5}, "-=.5")
    .from("#left-wing",{duration:0.25, x:200, alpha :0}, "wings")
    .from("#right-wing",{duration:0.25, x:-200, alpha :0}, "wings")
    .from("#panther-holder-outline", {duration:0.5, drawSVG:"0%"})
    .from("#panther-holder",{duration:0.5, alpha :0}, "-=.25","panther text")
    .from("#panther-text",{duration:0.5, alpha :0}, "-=.25", "panther text");

    return logoTL;

}