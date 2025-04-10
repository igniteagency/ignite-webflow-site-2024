import debounce from 'debounce';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import SplitType from 'split-type';

import { animatedDetailsAccordions } from '$components/accordions';
import { animateBook } from '$components/book';
import { cursorMove } from '$components/cursor';
import { footerSpacer, footerNextPageAnimation } from '$components/footer';
import { horizontalScroll } from '$components/horizontal-scroll';
import { initLenisSmoothScroll } from '$components/lenis';
import { mouseTrackImage } from '$components/mouse-track-img';
import { initNavigation } from '$components/nav';
import { testimonialCards } from '$components/testimonials';
import { textAnimation } from '$components/text-animation';
import { initializeVimeoPlayers } from '$components/vimeo-player';
import { initBugHerd } from '$utils/bugherd-script';
import { replaceCurrentYear } from '$utils/current-year';
import '$utils/load-external-script';

import { SCRIPTS_LOADED_EVENT } from './constants';

window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
window.CustomEase = CustomEase;
window.gsap.registerPlugin(ScrollTrigger, TextPlugin, CustomEase);
window.SplitType = SplitType;
window.debounce = debounce;

initLenisSmoothScroll();

window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  textAnimation();

  cursorMove();

  initNavigation();

  horizontalScroll();

  testimonialCards();

  mouseTrackImage();

  animatedDetailsAccordions();

  animateBook();

  initializeVimeoPlayers();

  footerSpacer();
  footerNextPageAnimation();

  replaceCurrentYear();

  addScrollTimelinePolyfillScript();

  initBugHerd();
});

function addScrollTimelinePolyfillScript() {
  window.loadExternalScript('https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js');
}
