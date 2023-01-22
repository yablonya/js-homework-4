import {one} from './task1/test1.js';

ask();
function ask() {
  let tasks = {
    '1' : one,
  }

  for (let task in tasks) {
    console.log(`Task №${task}`)
    tasks[task]();
  }
}