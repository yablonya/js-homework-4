import {one} from './task1/test1.js';
import {twoFirst} from "./task2-1/test-2_1.js";
import {twoSecond} from "./task2-2/test-2_2.js";

ask();
function ask() {
  let tasks = {
    '1' : one,
    '2.1' : twoFirst,
    '2.2' : twoSecond,
  }

  for (let task in tasks) {
    console.log(`Task №${task}`);
    tasks[task]();
  }
}
