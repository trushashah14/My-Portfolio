import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import projectcard1 from "./scripts/project1";
import projectcard2 from "./scripts/project2";
import toggleSwitch from "./scripts/toggleSwitch";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
projectcard1();
projectcard2();
toggleSwitch();




