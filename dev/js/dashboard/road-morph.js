import {gsap} from "gsap";

import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

const roadMorphTL = gsap.timeline();

export function roadMorph() {
    roadMorphTL
        .to("#left-road-r",{
            duration: 6,
            morphSVG:"#left-road-l"
        },"road morph 1") 
        .to("#right-road-r",{
            duration: 6,
            morphSVG:"#right-road-l"
        },"road morph 1")
        .to("#left-road-r",{
            duration: 6,
            morphSVG:"#left-road-r"
        },"road morph 2") 
        .to("#right-road-r",{
            duration: 6,
            morphSVG:"#right-road-r"
        },"road morph 2")
        .to("#left-road-r",{
            duration: 6,
            morphSVG:"#left-road-l"
        },"road morph 3") 
        .to("#right-road-r",{
            duration: 6,
            morphSVG:"#right-road-l"
        },"road morph 3")
    return roadMorphTL;
}
