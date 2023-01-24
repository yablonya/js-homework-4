import {difference} from "./index-1.js";
export function one() {
  let user1 = {
    '1' : 1,
    '2' : 2,
  };

  let sym = Symbol('3');
  let user2 = {
    '1' : 1,
    '2' : 2,
    [sym] : 3,
  };

  testWithoutSym(user1);
  testWithSym(user2);
}

function testWithoutSym(object) {
  let result = difference(object);

  assert(result, true);
}
function testWithSym(object) {
  let result = difference(object);

  assert(result, false);
}
function assert(result, standard) {
  if (result !== standard) {
    console.log('test failed');
  }
  console.log('test passed successfully');
}