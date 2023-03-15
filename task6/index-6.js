export const cityTemp = {

  Kyiv: 23,
  Vashington: 14,
  London: NaN,
  Lviv: 20,
  NewYork: '8',

  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      const entries = Object.entries(this);
      let out = "";

      for(let i = 0; i < entries.length; i++) {
        if (isNaN(entries[i][1])) {
          continue;
        }
        out += `${entries[i][0]}: ${entries[i][1]}`;
        i !== (entries.length - 1) ? out += ";\n" : out += ".";
      }

      return out;
    }
    const values = Object.values(this);
    let sum = 0;

    for (let value of values) {
      if (isNaN(value)) {
        continue;
      }
      sum += +value;
    }

    return (sum / --values.length).toFixed(2);
  }
}
