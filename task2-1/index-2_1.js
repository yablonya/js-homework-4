export const zooMaster = {
  zoo: [],

  numOfAnimal(name) {
    let beast = this.zoo.find(animal => animal.name === name);

    if (beast === undefined) {
      return 0;
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

    return animalsArray.map((a) => a.name);
  },

  sortZoo() {
    let sortedZoo = this.zoo.slice();

    function compareNumeric(animal1, animal2) {
      return animal1.number - animal2.number;
    }

    return sortedZoo.sort(compareNumeric);
  },

  addAnimal(name, number = 1) {
    if ( this.existAnimal(name) ) {
      let zooAnimal = this.zoo.find(animal => animal.name === name);
      zooAnimal.number += number;
    } else {
      this.zoo.push({name, number});
    }
  },

  outputZoo() {
    return this.zoo;
  },

  deleteAnimal(name) {
    let animalIndex = this.zoo.findIndex(animal => animal.name === name);

    if (animalIndex !== -1) {
      this.zoo.splice(animalIndex, 1);
    }
  },

  existAnimal(name) {
    return this.zoo.some(animal => animal.name === name);
  }
}