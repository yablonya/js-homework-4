import {one} from './task1/test1.js';
import {twoFirst} from "./task2-1/test2.js";

ask();
function ask() {
  let tasks = {
    '1' : one,
    '2.1' : twoFirst,
  }

  for (let task in tasks) {
    console.log(`Task №${task}`)
    tasks[task]();
  }
}