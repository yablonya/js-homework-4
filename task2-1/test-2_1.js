import {zooMaster} from "./index-2_1.js";
export function twoFirst() {
  zooMaster.addAnimal('dog', 3);
  zooMaster.addAnimal('cat');
  zooMaster.addAnimal('kangaroo', 3);
  zooMaster.addAnimal('horse', 13);
  zooMaster.addAnimal('cow', 6);

  testAddition();
  testNumOfAnimal();
  testNameByNumber();
  testAllAnimalsNum();
  testOutputZoo();
  testSortZoo();
  testFindAnimal();
  testDelete();
}

function testAddition() {
  let result = zooMaster.zoo.length;

  assertResult(result, 5);
}

function testNumOfAnimal() {
  let result = zooMaster.numOfAnimal('cat');

  assertResult(result, 1);
}

function testNameByNumber() {
  let standard = JSON.stringify([ 'dog', 'kangaroo' ]);
  let result = JSON.stringify(zooMaster.nameByNumber(3));

  assertResult(result, standard);
}

function testAllAnimalsNum() {
  let result = zooMaster.allAnimalsNum();

  assertResult(result, 26);
}

function testOutputZoo() {
  let standard = JSON.stringify(zooMaster.zoo);
  let result = zooMaster.outputZoo();

  assertResult(result, standard);
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

  assertResult(result,standard);
}

function testFindAnimal() {
  let result = zooMaster.findAnimal('cow');

  assertResult(result, true);
}

function testDelete() {
  zooMaster.deleteAnimal('horse');

  let result = zooMaster.zoo.length;

  assertResult(result, 4);
}

function assertResult(result, standard) {
  if (result !== standard) {
    console.log('test failed');
  }
  console.log('test passed successfully');
}
