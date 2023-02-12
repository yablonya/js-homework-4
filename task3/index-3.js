export const iterators = {
  coupleOfChar: {
    text : 'I love dev department. It makes me happy!',

    [Symbol.iterator]() {
      let clearText = '';

      for (let char of this.text) {
        if (char === ' ' || char === '.' || char === ',' || char === '!' || char === '?') {
          continue;
        }
        clearText += char;
      }
      let counter = -1;

      return {
        next() {
          counter += 2;

          if (counter < clearText.length) {
            return { done: false, value: clearText[counter] };
          } else {
            return { done: true };
          }
        }
      };
    }
  },

  words: {
    text : 'I love dev department. It makes me happy!',

    [Symbol.iterator]() {
      let counter = 0;
      let obj = this;
      let punctuation = [' ', '.', ',', '!', '?', ':', ';'];

      return {
        next() {
          if (counter < obj.text.length) {
            let word = '';

            if (obj.text[counter] === ' ') {
              counter++;
            }

            while (!punctuation.includes(obj.text[counter])) {
              word += obj.text[counter];
              counter++;
            }
            counter++;

            return { done: false, value: word };
          } else {
            return { done: true };
          }
        }
      };
    }
  },

  sentences: {
    text : 'I love dev department. It makes me happy!',

    [Symbol.iterator]() {
      let counter = 0;
      let obj = this;
      let punctuation = ['.', '!', '?'];

      return {
        next() {
          if (counter < obj.text.length) {
            let sentence = '';

            while (!punctuation.includes(obj.text[counter])) {
              sentence += obj.text[counter];
              counter++;
              if (counter === obj.text.length) {
                break;
              }
            }
            counter += 2;

            return { done: false, value: sentence };
          } else {
            return { done: true };
          }
        }
      };
    }
  },

  vowelLetters: {
    text : 'I love dev department. It makes me happy!',

    [Symbol.iterator]() {
      let clearText = '';

      for (let char of this.text) {
        if (char === ' ' || char === '.' || char === ',' || char === '!' || char === '?') {
          continue;
        }
        clearText += char;
      }
      let counter = -1;
      let abc = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'B', 'I', 'O', 'U', 'Y']

      return {
        next() {
          if (counter < clearText.length) {
            while(!abc.includes(clearText[counter])) {
              counter++;
            }
            let vowel = clearText[counter];
            counter++;

            return { done: false, value: vowel };
          } else {
            return { done: true };
          }
        }
      };
    }
  }
}
