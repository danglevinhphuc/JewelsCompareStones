const convertStringToObject = (str = "") => {
  let result = {};
  for (var i = 0; i < str.length; i++) {
    result[str.charAt(i)] = 0;
  }
  return result;
};
class JewelsCompareStones {
  constructor(jewels = "", stones = "") {
    this._jewels = convertStringToObject(jewels);
    this._stones = stones;
    this._count = 0;
  }
  get() {
    return this._count;
  }
  set() {
    return this._count++;
  }
  checkExitAndCount(key = "") {
    if (this._jewels[key] !== undefined) {
      this._jewels[key]++;
      this.set();
    }
  }
  ext() {
    for (var i = 0; i < this._stones.length; i++) {
      this.checkExitAndCount(this._stones.charAt(i));
    }
  }
}
const test = new JewelsCompareStones("aA", "aAAbbbb");
test.ext();
alert(test.get());
