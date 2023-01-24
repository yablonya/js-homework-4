import {mapFunctions} from "./index-4.js";
export function four() {
  testAdding();
  testValueByKey();
  testFindItem();
  testDeleteItem();
  testMapLength();
  testMapKeys();
  testMapValues();
  testMapEntries();
  testClearMap();
}

function testAdding() {
  mapFunctions.addItem(true, 3);
  mapFunctions.addItem(23, 'js');
  mapFunctions.addItem('test');

  let standard = 3;

  assert(mapFunctions.myMap.length, standard);
}

function testValueByKey() {
  let result1 = mapFunctions.valueByKey(23);
  let result2 = mapFunctions.valueByKey('java');

  assert(result1, 'js');
  assert(result2, 'js');
}

function testFindItem() {
  let result1 = mapFunctions.findItem('cake');
  let result2 = mapFunctions.findItem('test');

  assert(result1, false);
  assert(result2, true);
}

function testDeleteItem() {
  mapFunctions.deleteItem('test');
  let standard = JSON.stringify([ [ true, 3 ], [ 23, 'js' ] ]);

  assert(JSON.stringify(mapFunctions.myMap), standard);
  assert(mapFunctions.deleteItem('jack'));
}

function testMapLength() {
  let result = mapFunctions.mapLength();

  assert(result, 2);
}

function testMapKeys() {
  let standard = JSON.stringify([ true, 23 ]);
  let result = JSON.stringify(mapFunctions.mapKeys());

  assert(result, standard);
}

function testMapValues() {
  let standard = JSON.stringify([ 3, 'js' ]);
  let result = JSON.stringify(mapFunctions.mapValues());

  assert(result, standard);
}

function testMapEntries() {
  let standard = JSON.stringify([ [ true, 3 ], [ 23, 'js' ] ]);
  let result = JSON.stringify(mapFunctions.mapEntries());

  assert(result, standard);
}

function testClearMap() {
  mapFunctions.clearMap();

  assert(mapFunctions.myMap.length, 0);
}

function assert(result, standard) {
  if (result === undefined) {
    return console.log('you have entered incorrect data');
  }
  assertResult(result, standard);
}

function assertResult(result, standard) {
  if (result !== standard) {
    return console.log('test failed');
  }
  console.log('test passed successfully');
}

