function Animal (name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};

function Cat(name) {
  // this.name = name;
  Animal.call(this, name)
}
 

Cat.prototype.meow = function () {
  console.log('Meow!');
};




const garfield = new Cat('Garfield');
garfield.eat();
garfield.meow();

const noCat = new Animal('noCat');
noCat.meow();