function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}
var favoriteNumber = 42;

var instructor = {
  firstName: 'Colt',
};

instructor[favoriteNumber] = 'That is my favorite!';

var instructor = {
  firstName: 'Colt',
  sayHi: function () {
    return 'Hi!';
  },
  sayBye: function () {
    return this.firstName + 'saysbye!';
  },
};

const d = createAnimal('dog', 'bark', 'Woooof!');
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal('sheep', 'bleet', 'BAAAAaaaa');
// {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"
