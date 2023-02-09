import {transformation} from "./index-5.js";
import {GPAbyRequest} from "./index-5.js";

let student1 = {
  name: 'Dania',
  surname: 'Yablonskyi',
  year: 1,
  faculty: 'FICT',
  security: {
    password: 12345678,
    email: 'example@gmail.com'
  },
  programming: 95,
  dm: 96,
  math: 95,
  os: 93
}
let standard1 = {
  username: 'Dania Yablonskyi',
  email: 'example@gmail.com',
  averageMark: 94.75,
  marks: {
    programming: 95,
    dm: 96,
    math: 95,
    os: 93
  }
}

export function five() {
  errorCatcher(testTransformation);
  errorCatcher(testGPAbyRequest1);
  errorCatcher(testGPAbyRequest2);
  errorCatcher(testGPAbyRequest3);
}

function testTransformation() {
  const result = JSON.stringify(transformation(student1));
  const standard = JSON.stringify(standard1);

  assert(result, standard);
}

function testGPAbyRequest1() {
  const name1 = 'Dania Yablonskyi';
  const password1 = 12345678;
  const result1 = GPAbyRequest(name1, password1);

  assert(result1, 94.75);
}

function testGPAbyRequest2() {
  const name2 = 'Svyat';
  const password2 = 12345678;
  const result2 = GPAbyRequest(name2, password2);

  assert(result2, 94.75);
}

function testGPAbyRequest3() {
  const name3 = 'Dania Yablonskyi';
  const password3 = 1234;
  const result3 = GPAbyRequest(name3, password3);

  assert(result3, 94.75);
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