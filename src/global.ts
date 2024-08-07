import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import { footerSpacer } from './components/footer';
import { horizontalScroll } from './components/horizontal-scroll';
import { mouseTrackImage } from './components/mouse-track-img';
import { testimonialCards } from './components/testimonials';
import { textAnimation } from './components/text';
import { SCRIPTS_LOADED_EVENT } from './constants';

window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
window.gsap.registerPlugin(ScrollTrigger);
window.SplitType = SplitType;

window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  footerSpacer();
  horizontalScroll();
  textAnimation();
  testimonialCards();
  mouseTrackImage();
});

const CURRENT_YEAR = document.getElementById('current-year');

if (CURRENT_YEAR) {
  CURRENT_YEAR.textContent = new Date().getFullYear().toString();
}
