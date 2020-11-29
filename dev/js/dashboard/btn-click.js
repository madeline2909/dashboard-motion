import $ from "jquery";
import {modeChange} from "./mode-change.js";

export function btnClick(){
    $("#mode-container").on("click", function () {
        console.log("click");
        modeChange();
    });
}