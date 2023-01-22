import {difference} from "./index1.js";
export function one() {
  let user1 = {
    '1' : 1,
    '2' : 2,
  };
  let sym = Symbol('3')
  let user2 = {
    '1' : 1,
    '2' : 2,
    [sym] : 3
  };

  assertWithoutSym(user1);
  assertWithSym(user2);
}

function assertWithoutSym(object) {
  try {
    let result = difference(object);
    if (!result) {
      throw new Error('the comparison was made incorrect');
    } else {
      console.log('test #1 was passed successfully')
    }
  } catch (e) {
    console.log(e);
  }
}
function assertWithSym(object) {
  try {
    let result = difference(object);
    if (result) {
      throw new Error('the comparison was made incorrect');
    } else {
      console.log('test #2 was passed successfully')
    }
  } catch (e) {
    console.log(e);
  }
}