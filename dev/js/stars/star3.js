import {gsap} from "gsap";

console.log("is star 3 working");


export function star3Animation(){
    var tl = gsap.timeline();

    tl.to("#star3",{duration: 2, x: 300});
        
    return tl;
}