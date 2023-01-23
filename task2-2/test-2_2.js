import {zooMaster2} from "./index-2_2.js";
export function twoSecond() {
  zooMaster2.addAnimal('dog', 3);
  zooMaster2.addAnimal('cat');
  zooMaster2.addAnimal('kangaroo', 3);
  zooMaster2.addAnimal('horse', 13);
  zooMaster2.addAnimal('cow', 6);

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
    let result = zooMaster2.zoo.length;

    assertResult(result, 5);
  } catch (e) {
    console.log(e);
  }
}

function testNumOfAnimal() {
  try {
    let result = zooMaster2.numOfAnimal('cat');

    assertResult(result, 1);
  } catch (e) {
    console.log(e);
  }
}

function testNameByNumber() {
  try {
    let standard = JSON.stringify([ 'dog', 'kangaroo' ]);
    let result = JSON.stringify(zooMaster2.nameByNumber(3));

    assertResult(result, standard);
  } catch (e) {
    console.log(e);
  }
}

function testAllAnimalsNum() {
  try {
    let result = zooMaster2.allAnimalsNum();

    assertResult(result, 26);
  } catch (e) {
    console.log(e);
  }
}

function testOutputZoo() {
  try {
    let standard = JSON.stringify(zooMaster2.zoo);
    let result = zooMaster2.outputZoo();

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
    let result = JSON.stringify(zooMaster2.sortZoo());

    assertResult(result,standard);
  } catch (e) {
    console.log(e);
  }
}

function testFindAnimal() {
  try {
    let result = zooMaster2.findAnimal('cow');

    assertResult(result, true);
  } catch (e) {
    console.log(e);
  }
}

function testDelete() {
  try {
    zooMaster2.deleteAnimal('horse');
    let result = zooMaster2.zoo.length;

    assertResult(result, 4);
  } catch (e) {
    console.log(e);
  }
}

function assertResult(result, standard) {
  if (result !== standard) {
    throw new Error('test failed');
  }
  console.log('test passed successfully');
}