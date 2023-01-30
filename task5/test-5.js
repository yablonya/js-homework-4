import {transformation} from "./index-5.js";
import {GPAbyRequest} from "./index-5.js";

export function five() {
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


  testTransformation(student1, standard1);
  testGPAbyRequest('Dania Yablonskyi', 12345678)
}

function testTransformation(obj, stand) {
  try {
    let result = JSON.stringify(transformation(obj));
    let standard = JSON.stringify(stand);

    assert(result, standard);
  } catch (e) {
    console.log(e);
  }

}

function testGPAbyRequest(name, password) {
  try {
    let result = GPAbyRequest(name, password);

    assert(result, 94.75);
  } catch (e) {
    console.log(e);
  }

}
function assert(result, standard) {
  if (result !== standard) {
    throw new Error('test failed');
  }
  console.log('test passed successfully');
}