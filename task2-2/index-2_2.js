export const zooMaster2 = {
  zoo: [],

  numOfAnimal(name) {
    for (let animal of this.zoo) {
      if (animal.name === name) {
        return animal.number;
      }
    }

    return 0;
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
      return [];
    }

    return namesArray;
  },

  sortZoo() {
    let sortedZoo = Array.from(this.zoo);
    let termItem;

    for (let i = 0; i < sortedZoo.length - 1; i++) {
      for (let j = 0; j < sortedZoo.length - 1; j++) {
        if (sortedZoo[j].number > sortedZoo[j + 1].number) {
          [sortedZoo[j], sortedZoo[j + 1]] = [sortedZoo[j + 1], sortedZoo[j]];
        }
      }
    }

    return sortedZoo;
  },

  addAnimal(name, number = 1) {
    if ( this.existAnimal(name) ) {
      for (let animal of this.zoo) {
        if (animal.name === name) {
          animal.number += number;
        }
      }
    } else {
      this.zoo[this.zoo.length] = {name, number};
    }
  },

  outputZoo() {
    return this.zoo;
  },

  deleteAnimal(name) {
    for (let i = 0; i < this.zoo.length; i++) {
      if (this.zoo[i].name === name) {
        for (i; i < this.zoo.length; i++) {
          this.zoo[i] = this.zoo[i++];
        }
        this.zoo.length--;
      }
    }
  },

  existAnimal(name) {
    for (let animal of this.zoo) {
      if (animal.name === name) {
        return true;
      }
    }
    return false;
  }
}