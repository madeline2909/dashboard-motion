import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {logoAnimation} from "./logo/logo.js";
import {logoScaleAnim} from "./logo/logo.js";

import {dashboardAppear} from "./dashboard/dashboard-1.js";
import {musicPlay} from "./dashboard/dashboard-1.js";
import {location} from "./dashboard/dashboard-1.js";

import {valueStart} from "./dashboard/morph-value.js";
import {valueTrue} from "./dashboard/morph-value.js";

import {carMove} from "./dashboard/car-moving.js";
import {carSpeedUp} from "./dashboard/car-moving.js";

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
.add(carSpeedUp());

//instantiate GSDevTools with default settings
GSDevTools.create();

