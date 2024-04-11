"use strict";

// let obj = new Object({ name: "gurban" });
// let obj1 = {
//   name: "gurban",
// };

// console.log(obj);
// console.log(obj.name);

class Car {
  #vin;
  constructor(marka, model, year, color) {
    this.marka = marka;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  getInfo() {
    return `${this.marka} ${this.model} ${this.year} ${this.color} `;
  }

  setVin(param) {
    if (typeof param == "boolean") {
      console.log("yalnis deyer girmisiniz");
    } else if (param.length > 3) {
      this.#vin = param;
    } else {
      console.log("uzunluq 3 den kicikdir");
    }

    // return this._vin;
  }

  getVin() {
    return this.#vin;
  }

  sayClassNmae() {
    return "Car";
  }
}

class ElecCar extends Car {
  constructor(marka, model, year, color, engineType) {
    super(marka, model, year, color);
    this.engineType = engineType;
  }

  getInfo() {
    // console.log(
    //   `${this.marka} ${this.model} ${this.year} ${this.color}  ${this.engineType}`
    // );

    // super.sayClassNmae();
    return super.getInfo() + " " + this.engineType;
  }
}
let car1 = new Car("bsadasdmw", "f10", 2013, "blue");
let ec1 = new ElecCar("tesla", "models", "2022", "gray", "electric");

console.log(ec1);

// car1.getInfo();
console.log(ec1.getInfo());
console.log(ec1.sayClassNmae());

// ec1.console.log(ec1);
// polymorphism;

// let car1 = new Car("bsadasdmw", "f10", 2013, "blue");
// console.log(car1);

// // car1.vin = "123456";
// // console.log(car1.vin);

// car1.setVin("123345678");
// car1.vin = "shahnaz";
// console.log(car1);
// console.log(car1.getVin());

// // console.log(car1.#vin);

// let ad = "gurban";
