import {gsap} from "gsap";

console.log("is star 2 working");


export function star2Animation(){
    var tl = gsap.timeline();

    tl.to("#star2", {duration: 2, color: "#fffdd0", rotation: 360, x: "500px"})
    .to("#star2", {duration: 2, color: "#Da7e42", rotation: -360, x: "0px"});
        
    return tl;
}