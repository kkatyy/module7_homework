/* Задание 7.1

let person ={
    name:'Ekaterina',
    surname:'Koneva',
    age:18,
}
let activity=Object.create(person);
activity.study='MIREA';
result(activity);
function result(Object){
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
          console.log(` The key ${key}in this object has the value ${object[key]}`);
        }
      }
} */

/* Задание 7.2
function result1(object, string){
    for (key in object) {
        if (key === string) {
          return true;
        }
      }
      return false;
}
let person ={
    name:'Ekaterina',
    surname:'Koneva',
    age:18,
}
let result = result1 (person, 'study');
console.log(result) */

/* Задание 7.3
function Obj(){
    let resilt={};
    return result;
}
let info=Obj();
console.log(info); */

/* Задание 7.4
function electro(name, power){
  this.name = name;
  this.power = power;
  this.condition=false;
}
electro.prototype.value=function(){
  console.log(this.name + " is plugged!" + "The power of device is " + this.power);
  this.condition=true;
}
const computer = new electro ('computer', '200');
const lamp = new electro ('lamp', '150');
computer.value();
lamp.value(); */

/* Задание 7.5
class Devices {
   switch (name, power){
    this.name = name;
    this.power = power;
    this.condition = false;
  }
}
class Value extends devices{
    constructor () {
    console.log(this.name + " is plugged!" + "The power of device is " + this.power);
    this.condition=true;
    }
}
const computer = new electro ('computer', '200');
const lamp = new electro ('lamp', '150');
computer.value();
lamp.value(); */

