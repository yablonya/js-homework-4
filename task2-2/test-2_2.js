import {zooMaster2} from "./index-2_2.js";
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
  errorCatcher(testFindAnimal);
  errorCatcher(testDelete);

}

function testAddition() {
  let result = zooMaster2.zoo.length;

  assert(result, 5);
}

function testNumOfAnimal() {
  let result = zooMaster2.numOfAnimal('cat');

  assert(result, 1);
}

function testNameByNumber() {
  let standard = JSON.stringify([ 'dog', 'kangaroo' ]);
  let result = JSON.stringify(zooMaster2.nameByNumber(3));

  assert(result, standard);
}

function testAllAnimalsNum() {
  let result = zooMaster2.allAnimalsNum();

  assert(result, 26);
}

function testOutputZoo() {
  let standard = JSON.stringify(zooMaster2.zoo);
  let result = zooMaster2.outputZoo();

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

function testFindAnimal() {
  let result = zooMaster2.findAnimal('cow');

  assert(result, true);
}

function testDelete() {
  zooMaster2.deleteAnimal('horse');
  let result = zooMaster2.zoo.length;

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