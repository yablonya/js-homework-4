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
  errorCatcher(testGPAbyRequest);
}

function testTransformation() {
  const result = JSON.stringify(transformation(student1));
  const standard = JSON.stringify(standard1);

  assert(result, standard);
}

function testGPAbyRequest() {
  const name = 'Dania Yablonskyi';
  const password = 12345678;
  const result = GPAbyRequest(name, password);

  assert(result, 94.75);
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