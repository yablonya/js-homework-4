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
  mapFunctions.addItem('test', {'1' : true});

  assertResult(mapFunctions.myMap.length, 3);
}

function testValueByKey() {
  let result1 = mapFunctions.valueByKey(23);
  let result2 = mapFunctions.valueByKey('test');
  let result3 = mapFunctions.valueByKey('pizda');

  assertUndefined(result1, 'js');
  assertUndefined(result2, {'1' : true});
  assertUndefined(result3, 'sraka');
}

function testFindItem() {
  let result1 = mapFunctions.findItem('cake');
  let result2 = mapFunctions.findItem('test');

  assertResult(result1, false);
  assertResult(result2, true);
}

function testDeleteItem() {
  mapFunctions.deleteItem('test');
  let standard = JSON.stringify([ [ true, 3 ], [ 23, 'js' ] ]);

  assertUndefined(JSON.stringify(mapFunctions.myMap), standard);
  assertUndefined(mapFunctions.deleteItem('jack'));
}

function testMapLength() {
  let result = mapFunctions.mapLength();

  assertResult(result, 2);
}

function testMapKeys() {
  let standard = JSON.stringify([ true, 23 ]);
  let result = JSON.stringify(mapFunctions.mapKeys());

  assertResult(result, standard);
}

function testMapValues() {
  let standard = JSON.stringify([ 3, 'js' ]);
  let result = JSON.stringify(mapFunctions.mapValues());

  assertResult(result, standard);
}

function testMapEntries() {
  let standard = JSON.stringify([ [ true, 3 ], [ 23, 'js' ] ]);
  let result = JSON.stringify(mapFunctions.mapEntries());

  assertResult(result, standard);
}

function testClearMap() {
  mapFunctions.clearMap();

  assertResult(mapFunctions.myMap.length, 0);
}

function assertUndefined(result, standard) {
  if (result === undefined) {
    return console.log('you have entered incorrect data');
  }
  assertResult(result, standard);
}

function assertResult(result, standard) {
  if (JSON.stringify(result) !== JSON.stringify(standard)) {
    return console.log('test failed');
  }
  console.log('test passed successfully');
}



