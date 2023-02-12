export const cityTemp = {

  Kyiv: 23,
  Vashington: 14,
  Lviv: 20,
  NewYork: 8,

  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      const keyValue = Object.entries(this)
      let out = "";

      for(let i = 0; i < keyValue.length; i++) {
        out += `${keyValue[i][0]}: ${keyValue[i][1]}`;
        i !== (keyValue.length - 1) ? out += ";\n" : out += ".";
      }

      return out;
    }
    const values = Object.values(this);
    let sum = 0;

    values.forEach(value => sum += value);

    return sum;
  }
}
