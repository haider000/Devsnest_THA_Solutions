// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
//  Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased

var cylinder = {
  r: 8.3254187,
  h: 12.2667752148,
};
let PI = 3.14;
const v = (2 * PI * cylinder.r * cylinder.h).toFixed(4);
console.log(`volume = ${v}`);
