import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {logoAnimation} from "./logo/logo.js";
import {logoScaleAnim} from "./logo/logo.js";

import {dashboardAppear} from "./dashboard/dashboard-appear.js";
import {musicPlay} from "./dashboard/dashboard-appear.js";
import {location} from "./dashboard/dashboard-appear.js";

import {valueStart} from "./dashboard/morph-value.js";
import {valueTrue} from "./dashboard/morph-value.js";

import {carMove} from "./dashboard/car-moving.js";
import {carSpeedUp} from "./dashboard/car-moving.js";

import {roadMorph} from "./dashboard/road-morph.js";

import {btnClick} from "./dashboard/btn-click.js";

musicPlay();
location();


const mainTL = gsap.timeline()
mainTL
.add(logoAnimation())
.add(logoScaleAnim(), "+=.25", "logo move")
.add(dashboardAppear(), "logo move")
.add(valueStart(), "-=1")
.add(valueTrue())
.add(carMove(), "+=1")
.add(btnClick())
.add(carSpeedUp(), "car move")
.add(roadMorph(), "car move");


//instantiate GSDevTools with default settings
//GSDevTools.create();

