export const zooMaster2 = {
  zoo: [],

  numOfAnimal(name) {
    for (let animal of this.zoo) {
      if (animal.name === name) {
        return animal.number;
      }
    }
    throw new Error('There is no such animal in the zoo');
  },

  allAnimalsNum() {
    let sum = 0;

    for (let animal of this.zoo) {
      sum += animal.number;
    }

    return sum;
  },

  nameByNumber(num) {
    let namesArray = [];

    for (let animal of this.zoo) {
      if (animal.number === num) {
        namesArray.length++;
        namesArray[namesArray.length - 1] = animal.name;
      }
    }

    if (namesArray.length === 0) {
      throw new Error('There are no such number of animals');
    }

    return namesArray;
  },

  sortZoo() {
    let sortedZoo = Array.from(this.zoo);
    let termItem;

    for (let i = 0; i < sortedZoo.length - 1; i++) {
      for (let j = 0; j < sortedZoo.length - 1; j++) {
        if (sortedZoo[j].number > sortedZoo[j + 1].number) {
          termItem = sortedZoo[j + 1];
          sortedZoo[j + 1] = sortedZoo[j];
          sortedZoo[j] = termItem;
        }
      }
    }

    return sortedZoo;
  },

  addAnimal(name, number = 1) {
    if ( this.findAnimal(name) ) {
      for (let animal of this.zoo) {
        if (animal.name === name) {
          animal.number += number;
        }
      }
    } else {
      this.zoo.length++;
      this.zoo[this.zoo.length - 1] = {name, number};
    }
  },

  outputZoo() {
    return JSON.stringify(this.zoo);
  },

  deleteAnimal(name) {
    let originLength = this.zoo.length
    for (let i = 0; i < this.zoo.length; i++) {
      if (this.zoo[i].name === name) {
        for (let j = i; j < this.zoo.length; j++) {
          this.zoo[j] = this.zoo[j++];
        }
        this.zoo.length--;
      }
    }
    if (originLength === this.zoo.length) {
      throw new Error('There is no such animal in the zoo');
    }
  },

  findAnimal(name) {
    for (let animal of this.zoo) {
      if (animal.name === name) {
        return true;
      }
    }
    return false;
  }
}