import { greetA } from './js-modules/ModuleA.js';
import { greetB } from './js-modules/ModuleB.js';
import { greetC } from './js-modules/ModuleC.js';

export function rootGreet() {
  console.log('Hello from RootModule');
  greetA();
  greetB();
  greetC();
}
