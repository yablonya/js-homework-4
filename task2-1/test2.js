import {zooMaster} from "./index2.js";
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
  try {
    let result = zooMaster.zoo.length;

    assertResult(result, 5);
  } catch (e) {
    console.log(e);
  }
}

function testNumOfAnimal() {
  try {
    let result = zooMaster.numOfAnimal('cat');

    assertResult(result, 1);
  } catch (e) {
    console.log(e);
  }
}

function testNameByNumber() {
  try {
    let standard = JSON.stringify([ 'dog', 'kangaroo' ]);
    let result = JSON.stringify(zooMaster.nameByNumber(3));

    assertResult(result, standard);
  } catch (e) {
    console.log(e);
  }
}

function testAllAnimalsNum() {
  try {
    let result = zooMaster.allAnimalsNum();

    assertResult(result, 26);
  } catch (e) {
    console.log(e);
  }
}

function testOutputZoo() {
  try {
    let standard = JSON.stringify(zooMaster.zoo);
    let result = zooMaster.outputZoo();

    assertResult(result, standard);
  } catch (e) {
    console.log(e);
  }
}

function testSortZoo() {
  try {
    let standard = JSON.stringify([
        { name: 'cat', number: 1 },
        { name: 'dog', number: 3 },
        { name: 'kangaroo', number: 3 },
        { name: 'cow', number: 6 },
        { name: 'horse', number: 13 }
      ]);
    let result = JSON.stringify(zooMaster.sortZoo());

    assertResult(result,standard);
  } catch (e) {
    console.log(e);
  }
}

function testFindAnimal() {
  try {
    let result = zooMaster.findAnimal('cow');

    assertResult(result, true);
  } catch (e) {
    console.log(e);
  }
}

function testDelete() {
  try {
    zooMaster.deleteAnimal('horse');
    let result = zooMaster.zoo.length;

    assertResult(result, 4);
  } catch (e) {
    console.log(e);
  }
}

function assertResult(result, standard) {
  if (result !== standard) {
    throw new Error('test failed');
  }
  console.log('test was passed successfully');
}