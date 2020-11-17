import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {logoAnimation} from "./logo/logo.js";
import {logoScaleAnim} from "./logo/logo.js";
import {dashboardAppear} from "./dashboard/dashboard-1.js";

const mainTL = gsap.timeline()
mainTL
.add(logoAnimation())
.add(logoScaleAnim(), "logo move")
.add(dashboardAppear(), "logo move");

//instantiate GSDevTools with default settings
GSDevTools.create();

