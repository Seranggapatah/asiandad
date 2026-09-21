/*
  Load kanguru_-_david_weller.riv
  Artboard: Artboard
  ViewModel number: state
  0 idle, 1 run, 2 jump, 3 slide
*/

import "./styles.css";
import { Fit, Rive, Layout } from "@rive-app/webgl2";

interface NumberProperty {
  value: number;
}

interface ViewModelInstance {
  number(name: string): NumberProperty;
}

const STATES = [
  { value: 0, label: "Idle" },
  { value: 1, label: "Run" },
  { value: 2, label: "Jump" },
  { value: 3, label: "Slide" },
] as const;

const layout = new Layout({
  fit: Fit.Contain,
});

const riveCanvas = document.getElementById("rive-canvas") as HTMLCanvasElement;
const stateButtons = Array.from(
  document.querySelectorAll<HTMLButtonElement>(".state-buttons button"),
);

const riveSrc = new URL("./kanguru_-_david_weller.riv", import.meta.url).href;

const logDebug = (
  label: string,
  message: string,
  data?: unknown,
): void => {
  const time = new Date().toLocaleTimeString();
  if (data !== undefined) {
    console.log(`[${time}] [${label}] ${message}`, data);
    return;
  }
  console.log(`[${time}] [${label}] ${message}`);
};

const setActiveButton = (value: number): void => {
  for (const button of stateButtons) {
    const isActive = Number(button.dataset.state) === value;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
};

const r = new Rive({
  src: riveSrc,
  canvas: riveCanvas,
  artboard: "Artboard",
  stateMachines: "State Machine 1",
  layout,
  autoplay: true,
  autoBind: true,
  onLoad: (): void => {
    logDebug("Rive", "kanguru_-_david_weller.riv loaded");
    r.resizeDrawingSurfaceToCanvas();

    const vmi = r.viewModelInstance as ViewModelInstance | null;
    if (!vmi) {
      console.error("ViewModel instance not available");
      return;
    }

    let stateProperty: NumberProperty | null = null;
    try {
      stateProperty = vmi.number("state");
    } catch (error) {
      console.error('Failed to bind ViewModel number "state":', error);
    }

    if (!stateProperty) {
      console.error('ViewModel number "state" not found');
      return;
    }

    logDebug("VM Bind", 'number "state" OK', { value: stateProperty.value });
    setActiveButton(stateProperty.value);

    for (const button of stateButtons) {
      button.disabled = false;
      button.addEventListener("click", () => {
        const nextValue = Number(button.dataset.state);
        if (Number.isNaN(nextValue)) {
          return;
        }

        stateProperty.value = nextValue;
        setActiveButton(nextValue);
        const label =
          STATES.find((state) => state.value === nextValue)?.label ??
          String(nextValue);
        logDebug("State", "ViewModel number updated", {
          value: nextValue,
          label,
        });
      });
    }
  },
  onLoadError: (error): void => {
    console.error("Failed to load kanguru_-_david_weller.riv:", error);
  },
});

window.addEventListener("resize", () => {
  r.resizeDrawingSurfaceToCanvas();
});
