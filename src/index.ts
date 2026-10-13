import "./styles.css";
import { Fit, Rive, Layout } from "@rive-app/webgl2";

const layout = new Layout({
  fit: Fit.Contain,
});


const riveCanvas2 = document.getElementById("rive-canvas2") as HTMLCanvasElement;

const riveSrc = new URL(
  "./asian_dad_v2.riv",
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

    document.getElementById("tombol").addEventListener("click", () => {
      console.log("tombol di pencet");
      const triggerProperty = vmi.trigger("leftin");
      triggerProperty.trigger();
    });

    document.getElementById("leftin").addEventListener("click", () => {
      console.log("LEFT DI KLIK");
      const triggerProperty = vmi.trigger("leftin");
      triggerProperty.trigger();
    });

    document.getElementById("leftout").addEventListener("click", () => {
      console.log("LEFT DI KLIK");
      const triggerProperty = vmi.trigger("leftout");
      triggerProperty.trigger();
    });
    
    document.getElementById("rightin").addEventListener("click", () => {
      console.log("LEFT DI KLIK");
      const triggerProperty = vmi.trigger("rightin");
      triggerProperty.trigger();
    });

    document.getElementById("rightout").addEventListener("click", () => {
      console.log("LEFT DI KLIK rightout");
      const triggerProperty = vmi.trigger("rightout");
      triggerProperty.trigger();
    });

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
