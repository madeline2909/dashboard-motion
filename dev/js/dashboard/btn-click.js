import $ from "jquery";
// import {catBtnTL} from "./btn-animation.js";

export function btnClick(){
    $("#mode-container").on("click", function () {
        console.log("click");
        // catBtnTL.play();
    });
}