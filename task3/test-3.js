import {iterators} from "./index-3.js";

export function three() {
  errorCatcher(testCouples);
  errorCatcher(testWords);
  errorCatcher(testSentences);
  errorCatcher(testVowelLetters);
}

function testCouples() {
  let standard = JSON.stringify([
    'l', 'v', 'd', 'v',
    'e', 'a', 't', 'e',
    't', 't', 'a', 'e',
    'm', 'h', 'p', 'y'
  ]);
  let result = [];

  for (let couple of iterators.coupleOfChar) {
    result.push(couple);
  }

  assert(JSON.stringify(result), standard);
}

function testWords() {
  let standard = JSON.stringify([ 'I', 'love', 'dev', 'department', 'It', 'makes', 'me', 'happy' ]);
  let result = [];

  for (let word of iterators.words) {
    result.push(word);
  }

  assert(JSON.stringify(result), standard);
}

function testSentences() {
  let standard = JSON.stringify([ 'I love dev department', 'It makes me happy' ]);
  let result = [];

  for (let sentence of iterators.sentences) {
    result.push(sentence);
  }

  assert(JSON.stringify(result), standard);
}

function testVowelLetters() {
  let standard = JSON.stringify([
    'I', 'o', 'e', 'e',
    'e', 'a', 'e', 'I',
    'a', 'e', 'e', 'a',
    'y'
  ]);
  let result = [];

  for (let letter of iterators.vowelLetters) {
    result.push(letter);
  }

  assert(JSON.stringify(result), standard);
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