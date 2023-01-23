export const zooMaster = {
  zoo: [],

  numOfAnimal(name) {
    let beast = this.zoo.find(animal => animal.name === name);

    return beast.number;
  },

  allAnimalsNum() {
    let sum = 0;

    this.zoo.forEach(animal => sum += animal.number);

    return sum;
  },

  nameByNumber(num) {
    let animalsArray = this.zoo.filter(animal => animal.number === num);
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
    this.zoo.push({name, number});
  },

  outputZoo() {
    return JSON.stringify(this.zoo);
  },

  deleteAnimal(name) {
    let animalIndex = this.zoo.findIndex(animal => animal.name === name);

    this.zoo.splice(animalIndex, 1);
  },

  findAnimal(name) {
    return this.zoo.some(animal => animal.name === name);
  }
}