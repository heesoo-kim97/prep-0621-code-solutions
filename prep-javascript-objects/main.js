var person = {
  firstName: 'Heesoo',
  lastName: 'Kim',
  hobby: 'soccer'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName + '.');

person.job = 'server';
console.log("The person's current job is: " + person.job + '.');

person.previousJob = 'student';
console.log("The person's previous job is: " + person.previousJob + '.');
console.log('The Complete person object: ', person);

var myCar = {
  make: 'Honda',
  model: 'Civic',
  year: '2018'
};

console.log('Car information ', myCar);
myCar['owner'] = fullName;
console.log('My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] +
  ' ' + myCar['make'] + ' ' + myCar['model'] + '.');

myCar['color'] = 'silver';
console.log('my full car info: ', myCar);
