import {cityTemp} from "./index-6.js";
export function six() {
  errorCatcher(toStringTest);
  errorCatcher(toNumberTest);
}

function toStringTest() {
  const stringCheck = "Kyiv: 23;\n" +
                      "Vashington: 14;\n" +
                      "Lviv: 20;\n" +
                      "NewYork: 8.";
  const result = String(cityTemp);

  assert(result, stringCheck);
}

function toNumberTest() {
  const numCheck = 65;
  const result = +cityTemp;

  assert(result, numCheck);
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