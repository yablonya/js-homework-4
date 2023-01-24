export const mapFunctions = {
  myMap : [],

  addItem(key, value) {
    this.myMap.push([key, value]);
  },

  valueByKey(key) {
    let item = this.myMap.find(arrayItem => arrayItem[0] === key);

    if (item === undefined) {
      return undefined;
    }

    return item[1];
  },

  findItem(key) {
    return this.myMap.some(item => item[0] === key);
  },

  deleteItem(key) {
    if (!(this.myMap.some(item => item[0] === key))) {
      return undefined;
    }
    let itemIndex = this.myMap.findIndex(item => item[0] === key);

    this.myMap.splice(itemIndex, 1);
  },

  clearMap() {
    this.myMap.length = 0;
  },

  mapLength() {
    return this.myMap.length;
  },

  mapKeys() {
    let keys = [];

    this.myMap.forEach(item => keys.push(item[0]));

    return keys;
  },

  mapValues() {
    let values = [];

    this.myMap.forEach(item => values.push(item[1]));

    return values;
  },

  mapEntries() {
    return this.myMap;
  }
}