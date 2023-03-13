import {difference} from "./index-1.js";
import {assert} from "../errorChecker.js";
import {errorCatcher} from "../errorChecker.js";

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

export function one() {
  errorCatcher(testWithoutSym);
  errorCatcher(testWithSym);
}

function testWithoutSym() {
  let result = difference(user1);

  assert(result, true);
}
function testWithSym() {
  let result = difference(user2);

  assert(result, false);
}
