import {gsap} from "gsap";

import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

//animation when dashboard 1 appears the first time
const dashboardAppearTL = gsap.timeline();

export function dashboardAppear() {
    dashboardAppearTL
        .from("#dashboard-outline", {
            duration: 0.75,
            drawSVG: "0%"
        }, "dashboard outline")
        .from(".grid-lines", {
            duration: 0.25,
            drawSVG: "0%",
            stagger: 0.05
        }, "dashboard outline")
        .from(".grid-lines-2", {
            duration: 0.25,
            drawSVG: "0%",
            stagger: -0.05
        }, "dashboard outline")
        .from(".info-outlines", {
            duration: 0.75,
            drawSVG: "0%"
        }, "1st info")
        .from(".nav-outlines", {
            duration: 0.75,
            drawSVG: "0%"
        },"-=.5", "2nd info")
        .to("#gearshift-outline", {
            fill: "#F07405"
        },"-=.5", "2nd info")
        .from(".gsap-fade", {
            duration: 0.75,
            alpha: 0,
            stagger: -0.01
        },"-=.5", "2nd info")
    return dashboardAppearTL;
}

const musicPlayTL = gsap.timeline();

export function musicPlay() {
    musicPlayTL
        .fromTo("#song-run", {x:-55},{
            duration: 50,
            x:140
        })
        
    return musicPlayTL;
}

const locationTL = gsap.timeline();

export function location() {
    locationTL
        .to("#current-location", {
            repeat: 20,
            fill:"#F07405"
        }, "location light changes")
        .to("#pointer", {
            repeat: -1,
            fill:"#D2E679"
        }, "location light changes")
    return locationTL;
}


