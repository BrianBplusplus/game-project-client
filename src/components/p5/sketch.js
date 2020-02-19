import axios from "axios";

export default function sketch(p) {
  let canvas;
  console.log(p);

  p.setup = () => {
    canvas = p.createCanvas(700, 400);
    p.background(255);
  };

  p.mouseDragged = () => {
    p.fill(51, 255, 177);
    p.noStroke();
    p.square(p.mouseX, p.mouseY, 4);

    let data = {
      mouseX: p.mouseX,
      mouseY: p.mouseY
    };

    mouseData.push(data);
  };

  const mouseData = [];

  p.mouseReleased = async () => {
    console.log("mouse data", mouseData);
    const url = `https://game-project-alex-brian-server.herokuapp.com/room`;

    await axios.post(url, { name: this.state.room });
  };
}

// p.loadPixels();
// const fullArray = Array.prototype.slice.call(p.pixels);
// R, G, B, A -> 255, 255, 255, 255 ? 0 : 1
// console.log(fullArray.length);
// let d = p.pixelDensity();
// console.log(d);
// const groupedByFour = fullArray.reduce((accumulator, value, index) => {
//   let r = value;
//   let g = fullArray[index + 1];
//   let b = fullArray[index + 2];
//   let a = fullArray[index + 3];
//   if (index === 0 || index % 4 === 0) {
//     accumulator.push([r, g, b, a]);
//     return accumulator;
//   }
//   return accumulator;
// }, []);
// console.log(groupedByFour);
