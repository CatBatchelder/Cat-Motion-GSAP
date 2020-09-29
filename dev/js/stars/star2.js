import {gsap} from "gsap";

console.log("is star 2 working");


export function star2Animation(){
    var tl = gsap.timeline();

    tl.to("#star2",{duration: 2, color: "blue"});
        
    return tl;
}