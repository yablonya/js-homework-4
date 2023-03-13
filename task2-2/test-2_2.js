import {zooMaster2} from "./index-2_2.js";
import {assert} from "../errorChecker.js";
import {errorCatcher} from "../errorChecker.js";

export function twoSecond() {
  zooMaster2.addAnimal('dog', 3);
  zooMaster2.addAnimal('cat');
  zooMaster2.addAnimal('kangaroo', 3);
  zooMaster2.addAnimal('horse', 13);
  zooMaster2.addAnimal('cow', 6);

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
  let result = zooMaster2.zoo.length;

  assert(result, 5);
}

function testNumOfAnimal() {
  let result1 = zooMaster2.numOfAnimal('cat');
  let result2 = zooMaster2.numOfAnimal('ca');

  assert(result1, 1);
  assert(result2, 0);
}

function testNameByNumber() {
  let standard = [ 'dog', 'kangaroo' ];
  let result1 = zooMaster2.nameByNumber(3);
  let result2 = zooMaster2.nameByNumber(44);

  assert(JSON.stringify(result1), JSON.stringify(standard));
  assert(JSON.stringify(result2), JSON.stringify([]));
}

function testAllAnimalsNum() {
  let result = zooMaster2.allAnimalsNum();

  assert(result, 26);
}

function testOutputZoo() {
  let standard = JSON.stringify(zooMaster2.zoo);
  let result = JSON.stringify(zooMaster2.outputZoo());

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
  let result = JSON.stringify(zooMaster2.sortZoo());

  assert(result,standard);
}

function testExistAnimal() {
  let result1 = zooMaster2.existAnimal('cow');
  let result2 = zooMaster2.existAnimal('pipi');

  assert(result1, true);
  assert(result2, false);
}

function testDelete() {
  zooMaster2.deleteAnimal('horse');

  let result = zooMaster2.zoo.length;

  assert(result, 4);
}
