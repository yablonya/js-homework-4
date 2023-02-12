export const zooMaster = {
  zoo: [],

  numOfAnimal(name) {
    let beast = this.zoo.find(animal => animal.name === name);

    if (beast === undefined) {
      throw new Error('There is no such animal in the zoo');
    }

    return beast.number;
  },

  allAnimalsNum() {
    let sum = 0;

    this.zoo.forEach(animal => sum += animal.number);

    return sum;
  },

  nameByNumber(num) {
    let animalsArray = this.zoo.filter(animal => animal.number === num);

    if (animalsArray.length === 0) {
      throw new Error('There are no such number of animals');
    }

    let namesArray = [];

    for (let animal of animalsArray) {
      if (animal.number === num) {
        namesArray.push(animal.name);
      }
    }

    return namesArray;
  },

  sortZoo() {
    let sortedZoo = this.zoo.slice();

    function compareNumeric(animal1, animal2) {
      return animal1.number - animal2.number;
    }

    return sortedZoo.sort(compareNumeric);
  },

  addAnimal(name, number = 1) {
    if ( this.findAnimal(name) ) {
      let zooAnimal = this.zoo.find(animal => animal.name === name);
      zooAnimal.number += number;
    } else {
      this.zoo.push({name, number});
    }
  },

  outputZoo() {
    return JSON.stringify(this.zoo);
  },

  deleteAnimal(name) {
    let availability = this.zoo.some(animal => animal.name === name);

    if (availability) {
      let animalIndex = this.zoo.findIndex(animal => animal.name === name);

      this.zoo.splice(animalIndex, 1);
    } else {
      throw new Error('There is no such animal in the zoo');
    }
  },

  findAnimal(name) {
    return this.zoo.some(animal => animal.name === name);
  }
}