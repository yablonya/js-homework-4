export function assert(result, standard) {
  if (result !== standard) {
    throw new Error('test failed');
  }
  console.log('test passed successfully');
}

export function errorCatcher(func) {
  try {
    func();
  } catch (e) {
    console.log(e);
  }
}