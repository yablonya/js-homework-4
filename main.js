import {one} from './task1/test-1.js';
import {twoFirst} from "./task2-1/test-2_1.js";
import {twoSecond} from "./task2-2/test-2_2.js";
import {four} from "./task4/test-4.js";

ask();
function ask() {
  let tasks = [
    ['1', one],
    ['2.1', twoFirst],
    ['2.2', twoSecond],
    ['4', four],
  ]

  for (let task of tasks) {
    console.log(`Task №${task[0]}`);
    task[1]();
  }
}