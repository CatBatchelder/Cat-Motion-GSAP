import {gsap} from "gsap";

console.log("is star 3 working");


export function star3Animation(){
    var tl = gsap.timeline();

    tl.to("#star3", {duration: 2, color: "#Da7e42", rotation: 360, x: "500px"})
    .to("#star3", {duration: 2, color: "#ff8484", rotation: -360, x: "0px"});
        
    return tl;
}