import "./styles.css";
import { Fit, Rive, Layout } from "@rive-app/webgl2";

const layout = new Layout({
  fit: Fit.Contain,
});

const riveCanvas = document.getElementById("rive-canvas") as HTMLCanvasElement;
const button1 = document.getElementById("button") as HTMLButtonElement;
const button2 = document.getElementById("button2") as HTMLButtonElement;
const button3 = document.getElementById("button3") as HTMLButtonElement;
const riveSrc = new URL(
  "./janCat.riv",
  import.meta.url
).href;

const r = new Rive({
  src: riveSrc,
  canvas: riveCanvas,
  artboard: "Artboard",
  stateMachines: "State Machine 1",
  layout,
  autoplay: true,
  autoBind: true,
 
  onLoad: (): void => {
    r.resizeDrawingSurfaceToCanvas();

    const vmi = r.viewModelInstance as ViewModelInstance | null;
    if (!vmi) {
      console.error("ViewModel instance not available");
      return;
    }

    button1.addEventListener("click", changeNumber);
    function changeNumber(): void {
    vmi.number("numberProperty1").value = 1;
    console.log("button1 clicked");
    }
    button2.addEventListener("click", changeNumber2);
    function changeNumber2(): void {
    vmi.number("numberProperty1").value = 2;
    console.log("button2 clicked");
    }
    button3.addEventListener("click", changeNumber3);
    function changeNumber3(): void {
    vmi.number("numberProperty1").value = 0;
    console.log("button3 clicked");
    }
  },
  onLoadError: (error: Error): void => {
    console.error("Failed to load cute_bee.riv:", error);
  },
});

window.addEventListener("resize", () => {
  r.resizeDrawingSurfaceToCanvas();
});
