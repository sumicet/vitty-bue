import { Buffer } from 'buffer';

/**
 * Polyfills needed to for Rainbow Kit.
 * @see https://github.com/rainbow-me/rainbowkit/blob/main/examples/with-vite/src/polyfills.ts
 */

window.global = window.global ?? window;
window.Buffer = window.Buffer ?? Buffer;
window.process = window.process ?? { env: {} }; // Minimal process polyfill

export {};
