import {gsap} from "gsap";

import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

const carMove1TL = gsap.timeline();

export function carMove() {
    carMove1TL
        .from("#gearshift-R", {
            duration: 0.25,
            x: 40
        }, "gearshift")
        .to("#gearshift-P", {
            duration: 0.25,
            x: -40
        }, "gearshift")
        
    return carMove1TL;
}
