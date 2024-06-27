// index.js
import initScrollReveal from "./scripts/scrollReveal";
// import initTiltEffect from "./scripts/tiltAnimation";
import toggleSwitch from "./scripts/toggleSwitch";
import PopupWindow from "./scripts/PopupWindow";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
toggleSwitch();
PopupWindow();
