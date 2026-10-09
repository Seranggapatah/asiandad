import "./styles.css";
import { Fit, Rive, Layout } from "@rive-app/webgl2";

const layout = new Layout({
  fit: Fit.Contain,
});

const riveCanvas = document.getElementById("rive-canvas1") as HTMLCanvasElement;
const riveCanvas2 = document.getElementById("rive-canvas2") as HTMLCanvasElement;

const riveSrc = new URL(
  "./asian_dad.riv",
  import.meta.url
).href;

const r = new Rive({
  src: riveSrc,
  canvas: riveCanvas2,
  artboard: "Artboard",
  stateMachines: "State Machine 1",
  layout,
  autoplay: true,
  autoBind: true,
 
  onLoad: (): void => {
    r.resizeDrawingSurfaceToCanvas();
    const vmi = r.viewModelInstance as ViewModelInstance | null;

    const booleanProperty = vmi.boolean("right");
    const booleanValue = booleanProperty.value;
    booleanProperty.value = true;
    
    document.getElementById("idle").addEventListener("click", () => {
      console.log("Play diklik");
      const numberProperty = vmi.number("state");
      const numberValue = numberProperty.value;
      numberProperty.value = 0;
    });

    document.getElementById("satisfied").addEventListener("click", () => {
      console.log("Play diklik");
      const numberProperty = vmi.number("state");
      const numberValue = numberProperty.value;
      numberProperty.value = 1;
    });

    document.getElementById("angry").addEventListener("click", () => {
      console.log("Play diklik");
      const numberProperty = vmi.number("state");
      const numberValue = numberProperty.value;
      numberProperty.value = 2;
    });

    document.getElementById("superangry").addEventListener("click", () => {
      console.log("Play diklik");
      const numberProperty = vmi.number("state");
      const numberValue = numberProperty.value;
      numberProperty.value = 3;
    });


  },
});


const r2 = new Rive({
  src: riveSrc,
  canvas: riveCanvas,
  artboard: "Artboard",
  stateMachines: "State Machine 1",
  layout,
  autoplay: true,
  autoBind: true,
 
  onLoad: (): void => {
    r2.resizeDrawingSurfaceToCanvas();
    const vmi = r2.viewModelInstance as ViewModelInstance | null;

    document.getElementById("idle").addEventListener("click", () => {
      console.log("Play diklik");
      const numberProperty = vmi.number("state");
      const numberValue = numberProperty.value;
      numberProperty.value = 0;
    });

    document.getElementById("satisfied").addEventListener("click", () => {
      console.log("Play diklik");
      const numberProperty = vmi.number("state");
      const numberValue = numberProperty.value;
      numberProperty.value = 1;
    });

    document.getElementById("angry").addEventListener("click", () => {
      console.log("Play diklik");
      const numberProperty = vmi.number("state");
      const numberValue = numberProperty.value;
      numberProperty.value = 2;
    });

    document.getElementById("superangry").addEventListener("click", () => {
      console.log("Play diklik");
      const numberProperty = vmi.number("state");
      const numberValue = numberProperty.value;
      numberProperty.value = 3;
    });

  },
});

window.addEventListener("resize", () => {
  r.resizeDrawingSurfaceToCanvas();
});

window.addEventListener("resize", () => {
  r2.resizeDrawingSurfaceToCanvas();
});