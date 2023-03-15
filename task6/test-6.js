import {cityTemp} from "./index-6.js";
import {assert} from "../errorChecker.js";
import {errorCatcher} from "../errorChecker.js";
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
  const numCheck = 16.25;
  const result = +cityTemp;

  assert(result, numCheck);
}
