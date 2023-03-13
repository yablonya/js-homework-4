import {zooMaster} from "./index-2_1.js";
import {assert} from "../errorChecker.js";
import {errorCatcher} from "../errorChecker.js";

export function twoFirst() {
  zooMaster.addAnimal('dog', 3);
  zooMaster.addAnimal('cat');
  zooMaster.addAnimal('kangaroo', 3);
  zooMaster.addAnimal('horse', 13);
  zooMaster.addAnimal('cow', 6);

  errorCatcher(testAddition);
  errorCatcher(testNumOfAnimal);
  errorCatcher(testNameByNumber);
  errorCatcher(testAllAnimalsNum);
  errorCatcher(testOutputZoo);
  errorCatcher(testSortZoo);
  errorCatcher(testExistAnimal);
  errorCatcher(testDelete);
}

function testAddition() {
  let result = zooMaster.zoo.length;

  assert(result, 5);
}

function testNumOfAnimal() {
  let result1 = zooMaster.numOfAnimal('cat');
  let result2 = zooMaster.numOfAnimal('ca');

  assert(result1, 1);
  assert(result2, 0);
}

function testNameByNumber() {
  let standard =[ 'dog', 'kangaroo' ];
  let result1 = zooMaster.nameByNumber(3);
  let result2 = zooMaster.nameByNumber(44);

  assert(JSON.stringify(result1), JSON.stringify(standard));
  assert(JSON.stringify(result2), JSON.stringify([]));
}

function testAllAnimalsNum() {
  let result = zooMaster.allAnimalsNum();

  assert(result, 26);
}

function testOutputZoo() {
  let standard = JSON.stringify(zooMaster.zoo);
  let result = JSON.stringify(zooMaster.outputZoo());

  assert(result, standard);
}

function testSortZoo() {
  let standard = JSON.stringify([
    { name: 'cat', number: 1 },
    { name: 'dog', number: 3 },
    { name: 'kangaroo', number: 3 },
    { name: 'cow', number: 6 },
    { name: 'horse', number: 13 }
  ]);
  let result = JSON.stringify(zooMaster.sortZoo());

  assert(result, standard);
}

function testExistAnimal() {
  let result1 = zooMaster.existAnimal('cow');
  let result2 = zooMaster.existAnimal('pipi');

  assert(result1, true);
  assert(result2, false);
}

function testDelete() {
  zooMaster.deleteAnimal('horse');

  let result = zooMaster.zoo.length;

  assert(result, 4);
}
