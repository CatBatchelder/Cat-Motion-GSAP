import {gsap} from "gsap";

console.log("is star 1 working");


// export function star1Animation(){
//     var tl = gsap.timeline();

//     tl.to("#star1", {duration: 4, color: "#ffa500", rotation: 360, x: "500px"})
//     .to("#star1", {duration: 4, color: "#0000ff", rotation: -360, x: "0px"});

//     return tl;
// }

export function star1Animation(){
    var tl = gsap.timeline();

    tl.to("#star1", {duration: 1, alpha: .5, scale: 4, rotate: 30, x: 300})
    tl.to("#star1", {duration: 1, color: "white", y: "300px"});

    return tl;
}

// tl.to("#star1", {duration: 4, color: "#ffa500", rotation: 360, x: "500px"})
//     .to("#star1", {duration: 4, color: "#0000ff", rotation: -360, x: "0px"});
