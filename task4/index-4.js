export const mapFunctions = {
  myMap : [],

  set(key, value) {
    let itemIndex = this.myMap.findIndex(item => item[0] === key);

    if (itemIndex === -1) {
      this.myMap.push([key, value]);
    } else {
      this.myMap[itemIndex][1] = value;
    }
  },

  get(key) {
    let item = this.myMap.find(arrayItem => arrayItem[0] === key);

    if (item === undefined) {
      return undefined;
    }

    return item[1];
  },

  has(key) {
    return this.myMap.some(item => item[0] === key);
  },

  delete(key) {
    if (!this.has(key)) {
      return undefined;
    }
    let itemIndex = this.myMap.findIndex(item => item[0] === key);

    this.myMap.splice(itemIndex, 1);
  },

  clear() {
    this.myMap.length = 0;
  },

  size() {
    return this.myMap.length;
  },

  keys() {
    return this.myMap.map((item) => item[0]);
  },

  values() {
    return this.myMap.map((item) => item[1]);
  },

  entries() {
    return this.myMap;
  }
}