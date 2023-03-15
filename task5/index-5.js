let studentPassword = new Map();
let transformed = new Map();
export function transformation(obj) {
  if (typeof obj.name !== "string") {
    return undefined
  }

  if (typeof obj.surname !== "string") {
    return undefined
  }

  if (typeof obj.year !== "number" && (obj.year < 1 || obj.year > 4)) {
    return undefined
  }

  if (typeof obj.faculty !== "string") {
    return undefined
  }

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

  studentPassword.set(newStudent.username, obj.security.password);
  transformed.set(newStudent.username, newStudent)

  return newStudent;
}

function username(name, surname) {
  return `${name} ${surname}`;
}

function averageMark(obj) {
  let marks = Object.values(obj);
  let result = marks.reduce((sum, current) => sum + +current);

  return result / marks.length;
}

export function GPAbyRequest(username, password) {
  if (studentPassword.get(username) === password) {
    return transformed.get(username).averageMark;
  }
  return undefined;
}