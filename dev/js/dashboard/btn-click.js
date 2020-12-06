import $ from "jquery";
import {modeChange} from "./mode-change.js";
import {modeChangeTL} from "./mode-change.js";

export function btnClick(){
    $("#mode-3D-container").on("click", function () {
        console.log("click 3d");
        modeChange();
    });
    $("#mode-2D-container").on("click", function () {
        console.log("click 2d");
        modeChangeTL.reverse();
    });
}
