import type { Webflow } from '@finsweet/ts-utils';
import type SplitType from 'split-type';

export type SCRIPTS_ENV = 'dev' | 'prod';

declare global {
  interface Window {
    JS_SCRIPTS: Set<string> | undefined;
    Webflow: Webflow;

    SCRIPTS_ENV: ENV;
    setScriptsENV(env: ENV): void;

    IS_DEBUG_MODE: boolean;
    setDebugMode(mode: boolean): void;
    /**
     * A wrapper function to directly console log when debug mode is active
     */
    DEBUG: (...args: any[]) => void;
    gsap: GSAP;
    ScrollTrigger: typeof ScrollTrigger;
    TextPlugin: typeof TextPlugin;
    CustomEase: typeof CustomEase;
    Draggable: typeof Draggable;
    SplitType: typeof SplitType;
  }

  // Extend `querySelector` and `querySelectorAll` function to stop the nagging of converting `Element` to `HTMLElement` all the time
  interface ParentNode {
    querySelector<E extends HTMLElement = HTMLElement>(selectors: string): E | null;
    querySelectorAll<E extends HTMLElement = HTMLElement>(selectors: string): NodeListOf<E>;
  }
}

export {};
