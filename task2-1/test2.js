import {zooMaster} from "./index2.js";
export function twoFirst() {
  zooMaster.addAnimal('dog', 3);
  zooMaster.addAnimal('cat');
  zooMaster.addAnimal('kangaroo', 3);
  zooMaster.addAnimal('horse', 13);
  zooMaster.addAnimal('cow', 6);

  assertAddition();
  assertNumOfAnimal();
  assertNameByNumber();
  assertAllAnimalsNum();
  assertOutputZoo();
  assertSortZoo();
  assertFindAnimal();
  assertDelete();
}

function assertAddition() {
  try {
    let result = zooMaster.zoo.length === 5;

    if (result !== true) {
      throw new Error('The addition was made incorrectly');
    } else {
      console.log('test #1 was passed successfully');
    }
  } catch (e) {
    console.log(e);
  }
}

function assertNumOfAnimal() {
  try {
    let result = zooMaster.numOfAnimal('cat') === 1;

    if (result !== true) {
      throw new Error('The number was found incorrectly');
    } else {
      console.log('test #2 was passed successfully');
    }
  } catch (e) {
    console.log(e);
  }
}

function assertNameByNumber() {
  try {
    let check = [ 'dog', 'kangaroo' ]
    let result = zooMaster.nameByNumber(3);

    for (let item = 0; item < result.length; item++) {
      if (result[item] !== check[item]) {
        throw new Error('The output was made incorrectly');
      }
    }
    console.log('test #3 was passed successfully');
  } catch (e) {
    console.log(e);
  }
}

function assertAllAnimalsNum() {
  try {
    let result = zooMaster.allAnimalsNum() === 26;

    if (result !== true) {
      throw new Error('The number of animals was found incorrectly');
    } else {
      console.log('test #4 was passed successfully');
    }
  } catch (e) {
    console.log(e);
  }
}

function assertOutputZoo() {
  try {
    let check = [ 'dog : 3', 'cat : 1', 'kangaroo : 3', 'horse : 13', 'cow : 6' ];
    let result = zooMaster.outputZoo();

    for (let item = 0; item < result.length; item++) {
      if (result[item] !== check[item]) {
        throw new Error('The output was made incorrectly');
      }
    }
    console.log('test #5 was passed successfully');
  } catch (e) {
    console.log(e);
  }
}

function assertSortZoo() {
  try {
    let check = [ 'cat : 1', 'dog : 3', 'dog : 3', 'cow : 6', 'horse : 13' ];
    let result = zooMaster.sortZoo();

    for (let item = 0; item < result.length; item++) {
      if (result[item] !== check[item]) {
        throw new Error('The output was made incorrectly');
      }
    }
    console.log('test #6 was passed successfully');
  } catch (e) {
    console.log(e);
  }
}

function assertFindAnimal() {
  try {
    let result = zooMaster.findAnimal('cow');

    if (!result) {
      throw new Error('The finding was made incorrectly');
    } else {
      console.log('test #7 was passed successfully');
    }
  } catch (e) {
    console.log(e);
  }
}

function assertDelete() {
  try {
    zooMaster.deleteAnimal('horse');
    let result = zooMaster.zoo.length === 4;

    if (result !== true) {
      throw new Error('The removal was made incorrectly');
    } else {
      console.log('test #8 was passed successfully');
    }
  } catch (e) {
    console.log(e);
  }
}