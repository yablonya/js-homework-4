import {one} from './task1/test-1.js';
import {twoFirst} from "./task2-1/test-2_1.js";
import {twoSecond} from "./task2-2/test-2_2.js";
import {three} from "./task3/test-3.js";
import {four} from "./task4/test-4.js";
import {five} from "./task5/test-5.js";
import {six} from "./task6/test-6.js";

ask();
function ask() {
  let tasks = [
    ['1', one],
    ['2.1', twoFirst],
    ['2.2', twoSecond],
    ['3', three],
    ['4', four],
    ['5', five],
    ['6', six]
  ]

  for (let task of tasks) {
    console.log(`Task №${task[0]}`);
    task[1]();
  }
}