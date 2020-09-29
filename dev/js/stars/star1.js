import {gsap} from "gsap";

console.log("is star 1 working");

// import {starSpeed} from "./stars/animationSpeed.js"


// export function star1Animation(){
//     var tl = gsap.timeline();

//     tl.to("#star1", {duration: 4, color: "#ffa500", rotation: 360, x: "500px"})
//     .to("#star1", {duration: 4, color: "#0000ff", rotation: -360, x: "0px"});

//     return tl;
// }

export function star1Animation(){
    var tl = gsap.timeline();

    tl.to("#star1", {duration: 2, color: "#cee8f0", rotation: 360, x: "500px"})
    .to("#star1", {duration: 2, color: "#fffdd0", rotation: -360, x: "0px"});

    return tl;
}

// tl.to("#star1", {duration: 4, color: "#ffa500", rotation: 360, x: "500px"})
//     .to("#star1", {duration: 4, color: "#0000ff", rotation: -360, x: "0px"});
