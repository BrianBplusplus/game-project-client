export default function sketch(p) {
  let canvas;
  console.log(p);

  p.setup = () => {
    canvas = p.createCanvas(700, 400);
    p.background(51);
  };

  p.mouseDragged = () => {
    p.noStroke();
    p.fill(255);
    p.ellipse(p.mouseX, p.mouseY, 36, 36);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = newProps => {
    if (canvas)
      //Make sure the canvas has been created
      p.fill(newProps.color);
  };
}
