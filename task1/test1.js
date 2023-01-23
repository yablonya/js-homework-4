import {difference} from "./index1.js";
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
  try {
    let result = difference(object);

    assertResult(result, true);
  } catch (e) {
    console.log(e);
  }
}
function testWithSym(object) {
  try {
    let result = difference(object);

    assertResult(result, false);
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