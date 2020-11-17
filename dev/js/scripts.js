import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {logoAnimation} from "./logo/logo.js";

const mainTL = gsap.timeline()
mainTL.add(logoAnimation(),"logo");

//instantiate GSDevTools with default settings
GSDevTools.create();

