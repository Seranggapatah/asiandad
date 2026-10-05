import "./styles.css";
import { Fit, Rive, Layout } from "@rive-app/webgl2";

const layout = new Layout({
  fit: Fit.Contain,
});

const riveCanvas = document.getElementById("rive-canvas") as HTMLCanvasElement;
const riveCanvas2 = document.getElementById("rive-canvas2") as HTMLCanvasElement;
const riveCanvas3 = document.getElementById("rive-canvas3") as HTMLCanvasElement;
const riveCanvas4 = document.getElementById("rive-canvas4") as HTMLCanvasElement;
const riveCanvas5 = document.getElementById("rive-canvas5") as HTMLCanvasElement;

const riveSrc = new URL(
  "./jihoonChar.riv",
  import.meta.url
).href;

const r = new Rive({
  src: riveSrc,
  canvas: riveCanvas2,
  artboard: "Thriving",
  stateMachines: "State Machine 1",
  layout,
  autoplay: true,
  autoBind: true,
 
  onLoad: (): void => {
    r.resizeDrawingSurfaceToCanvas();
  },
});


const r2 = new Rive({
  src: riveSrc,
  canvas: riveCanvas,
  artboard: "happy",
  stateMachines: "State Machine 1",
  layout,
  autoplay: true,
  autoBind: true,
 
  onLoad: (): void => {
    r.resizeDrawingSurfaceToCanvas();
  },
});

const r3 = new Rive({
  src: riveSrc,
  canvas: riveCanvas3,
  artboard: "needcare",
  stateMachines: "State Machine 1",
  layout,
  autoplay: true,
  autoBind: true,
 
  onLoad: (): void => {
    r.resizeDrawingSurfaceToCanvas();
  },
});

const r4 = new Rive({
  src: riveSrc,
  canvas: riveCanvas4,
  artboard: "Neglected",
  stateMachines: "State Machine 1",
  layout,
  autoplay: true,
  autoBind: true,
 
  onLoad: (): void => {
    r.resizeDrawingSurfaceToCanvas();
  },
});

const r5 = new Rive({
  src: riveSrc,
  canvas: riveCanvas5,
  artboard: "Scan",
  stateMachines: "State Machine 1",
  layout,
  autoplay: true,
  autoBind: true,
 
  onLoad: (): void => {
    r.resizeDrawingSurfaceToCanvas();
  },
});

window.addEventListener("resize", () => {
  r.resizeDrawingSurfaceToCanvas();
});
