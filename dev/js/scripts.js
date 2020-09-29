// import * as Demo from "./demo.js";

// console.log(Demo);


console.log("is scripts working");

import {gsap} from "gsap";
import {star1Animation} from './stars/star1.js';
import {star2Animation} from './stars/star2.js';
import {star3Animation} from './stars/star3.js';



var mainTL = gsap.timeline();

mainTL.add(star1Animation())
        .add(star2Animation())  
        .add(star3Animation());


// var test = gsap.timeline();

// test.to(".h1", {alpha: 2, duration: 3});