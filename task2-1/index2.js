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
    let sortedZoo = [];

    this.zoo.forEach(animal => sortedZoo.push(animal.number));

    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    }

    sortedZoo.sort(compareNumeric);

    for (let i = 0; i < sortedZoo.length; i++) {
      sortedZoo[i] = this.zoo.find(animal => animal.number === sortedZoo[i]);
    }

    let output = []

    for (let animal of sortedZoo) {
      output.push(`${animal.name} : ${animal.number}`);
    }

    return output;
  },

  addAnimal(name, number = 1) {
    this.zoo.push({"name": name, "number": number});
  },

  outputZoo() {
    let output = []

    for (let animal of this.zoo) {
      output.push(`${animal.name} : ${animal.number}`);
    }

    return output;
  },

  deleteAnimal(name) {
    let animalIndex = this.zoo.findIndex(animal => animal.name === name);

    this.zoo.splice(animalIndex, 1);
  },

  findAnimal(name) {
    return this.zoo.some(animal => animal.name === name);
  }
}