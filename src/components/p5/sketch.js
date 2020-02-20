import axios from "axios";

export default function sketch(p) {
  let canvas;

  p.setup = () => {
    canvas = p.createCanvas(700, 400);
    p.background(255);
  };

  p.mouseDragged = () => {
    p.fill(51, 255, 177);
    p.noStroke();
    p.square(p.mouseX, p.mouseY, 10);

    let data = [p.mouseX, p.mouseY];

    mouseData.push(data);
  };

  const mouseData = [];

  p.mouseReleased = async () => {
    const url = `http://localhost:4000/canvas`;
    await axios.post(url, { data: mouseData });
  };
}
