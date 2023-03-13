import {mapFunctions} from "./index-4.js";
import {assert} from "../errorChecker.js";
import {errorCatcher} from "../errorChecker.js";

let trueMap = new Map();

export function four() {
  mapFunctions.set(true, 3);
  mapFunctions.set(23, 'js');
  mapFunctions.set('test', {'1' : true});

  trueMap.set(true, 3);
  trueMap.set(23, 'js');
  trueMap.set('test', {'1' : true});

  errorCatcher(testAdding);
  errorCatcher(testValueByKey);
  errorCatcher(testFindItem);
  errorCatcher(testDeleteItem);
  errorCatcher(testMapKeys);
  errorCatcher(testMapValues);
  errorCatcher(testMapEntries);
  errorCatcher(testClearMap);
}

function testAdding() {
  let i = 0;
  let counter = 0;
  for (let item of trueMap.entries()) {
    if (JSON.stringify(item) === JSON.stringify(mapFunctions.myMap[i])) {
      counter++;
    }
    i++;
  }

  assert(counter, 3);
}

function testValueByKey() {
  const result1 = mapFunctions.get(true);
  const standard1 = trueMap.get(true);
  const result2 = mapFunctions.get('bleb');
  const standard2 = trueMap.get('bleb');

  assert(result1, standard1);
  assert(result2, standard2);
}

function testFindItem() {
  const result1 = mapFunctions.has(23);
  const standard1 = trueMap.has(23);

  const result2 = mapFunctions.has(21);
  const standard2 = trueMap.has(21);

  assert(result1, standard1);
  assert(result2, standard2);
}

function testDeleteItem() {
  mapFunctions.delete(23);
  trueMap.delete(23);

  const result1 = mapFunctions.has(23);
  const standard1 = trueMap.has(23);

  const result2 = mapFunctions.delete(21);

  assert(result1, standard1);
  assert(result2, undefined);
}

function testMapKeys() {
  let i = 0;
  let counter = 0;

  for (let item of trueMap.keys()) {
    if (item === mapFunctions.keys()[i]) {
      counter++;
    }
    i++;
  }

  assert(counter, 2);
}

function testMapValues() {
  let i = 0;
  let counter = 0;
  for (let item of trueMap.values()) {
    if (JSON.stringify(item) === JSON.stringify(mapFunctions.values()[i])) {
      counter++;
    }
    i++;
  }

  assert(counter, 2);
}

function testMapEntries() {
  let i = 0;
  let counter = 0;
  for (let item of trueMap.entries()) {
    if (JSON.stringify(item) === JSON.stringify(mapFunctions.entries()[i])) {
      counter++;
    }
    i++;
  }

  assert(counter, 2);
}

function testClearMap() {
  mapFunctions.clear();
  trueMap.clear();

  const result = mapFunctions.size();
  const standard = trueMap.size;

  assert(result, standard);
}
