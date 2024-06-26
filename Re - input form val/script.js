document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; //pattern => (1234) 567-8910
  let validationResult = phoneRe.test(phoneInput);

  if (validationResult === false) {
    return false;
  }
  return true;
};

//search for patterns online

//inherted classes

class User {
  //privet property
  #e;
  constructor(id, user, eSalary) {
    this.i = id;
    this.u = user;
    this.#e = eSalary;
  }
  getSalary() {
    return parseInt(this.#e);
  }
}
let userOne = new User(100, "jasmine", "5000 genh");
console.log(userOne.getSalary() * 0.3);

class Num {
  #c;
  constructor(id, numName, charc) {
    this.n = id;
    this.w = numName;
    this.#c = charc;
  }
  getNums() {
    return parseInt(this.#c);
  }
}
let numTwo = new Num(200, "Two", "2 nu");

console.log(numTwo.getNums());