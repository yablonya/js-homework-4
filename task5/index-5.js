let students = new Map();
let transformed = new Map();
export function transformation(obj) {
  let {
    name,
    surname,
    year,
    faculty,
    security: {
      password,
      email
    },
    ...rest
  } = obj;
  let newStudent = {
    username: username(name, surname),
    email: email,
    averageMark: averageMark(rest),
    marks: rest
  };

  students.set(newStudent.username, obj);
  transformed.set(newStudent.username, newStudent)

  return newStudent;
}

function username(name, surname) {
  return `${name} ${surname}`;
}

function averageMark(obj) {
  let marks = Object.values(obj);
  let sum = 0;

  for (let mark of marks) {
    sum += mark;
  }

  return sum / marks.length;
}

export function GPAbyRequest(username, password) {
  if (students.has(username)) {
    if (students.get(username).security.password === password) {
      return transformed.get(username).averageMark;
    }
    throw new Error('You entered incorrect password');
  }
  throw new Error('There is no such student here');
}