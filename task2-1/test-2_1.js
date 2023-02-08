import {zooMaster} from "./index-2_1.js";
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
  errorCatcher(testFindAnimal);
  errorCatcher(testDelete);
}

function testAddition() {
  let result = zooMaster.zoo.length;

  assert(result, 5);
}

function testNumOfAnimal() {
  let result = zooMaster.numOfAnimal('cat');

  assert(result, 1);
}

function testNameByNumber() {
  let standard = JSON.stringify([ 'dog', 'kangaroo' ]);
  let result = JSON.stringify(zooMaster.nameByNumber(3));

  assert(result, standard);
}

function testAllAnimalsNum() {
  let result = zooMaster.allAnimalsNum();

  assert(result, 26);
}

function testOutputZoo() {
  let standard = JSON.stringify(zooMaster.zoo);
  let result = zooMaster.outputZoo();

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

  assert(result,standard);
}

function testFindAnimal() {
  let result = zooMaster.findAnimal('cow');

  assert(result, true);
}

function testDelete() {
  zooMaster.deleteAnimal('horse');

  let result = zooMaster.zoo.length;

  assert(result, 4);
}


function assert(result, standard) {
  if (result !== standard) {
    throw new Error('test failed');
  }
  console.log('test passed successfully');
}

function errorCatcher(func) {
  try {
    func();
  } catch (e) {
    console.log(e);
  }
}