import {mapFunctions} from "./index-4.js";

let trueMap = new Map();

export function four() {
  mapFunctions.addItem(true, 3);
  mapFunctions.addItem(23, 'js');
  mapFunctions.addItem('test', {'1' : true});

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
  const result1 = mapFunctions.valueByKey(true);
  const standard1 = trueMap.get(true);
  const result2 = mapFunctions.valueByKey('bleb');
  const standard2 = trueMap.get('bleb');

  assert(result1, standard1);
  assert(result2, standard2);
}

function testFindItem() {
  const result = mapFunctions.findItem(23);
  const standard = trueMap.has(23);

  assert(result, standard);
}

function testDeleteItem() {
  mapFunctions.deleteItem(23);
  trueMap.delete(23);

  const result = mapFunctions.findItem(23);
  const standard = trueMap.has(23);

  assert(result, standard);
}

function testMapKeys() {
  let i = 0;
  let counter = 0;
  for (let item of trueMap.keys()) {
    if (JSON.stringify(item) === JSON.stringify(mapFunctions.mapKeys()[i])) {
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
    if (JSON.stringify(item) === JSON.stringify(mapFunctions.mapValues()[i])) {
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
    if (JSON.stringify(item) === JSON.stringify(mapFunctions.mapEntries()[i])) {
      counter++;
    }
    i++;
  }

  assert(counter, 2);
}

function testClearMap() {
  mapFunctions.clearMap();
  trueMap.clear();

  const result = mapFunctions.mapLength();
  const standard = trueMap.size;

  assert(result, standard);
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



