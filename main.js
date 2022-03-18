// Your code here.
const person1 = {
  firstName: 'Colin',
  lastName: 'Jaffe',
  age: 39,
  married: true,
  spouseName: 'Redacted Jaffe'
};
const person2 = {
  firstName: 'Petra',
  lastName: 'Solano',
  age: 29,
  married: false,
};
/** `getFirstName` - returns the value of the firstName property of the given person object */

function getFirstName(personObj){
  if(!personObj){
    return undefined;
  }else{
    return personObj.firstName
  }
};

function getLastName(personObj){
  if(!personObj){
    return undefined;
  }else{
    return personObj.lastName
  }
};
/* * `getFullName` - returns the value of the firstName property plus the lastName property with a space in the middle for the given person object*/

function getFullName(personObj){
  if (!personObj){
    return undefined
  }else{
    return `${personObj.firstName} ${personObj.lastName}`
  }
};
/** `setFirstName` - changes the value of the firstName property of the given person object to the given value */

function setFirstName(personObj, newName){
  personObj.firstName = newName
  return personObj.firstName
};

//* `setAge` - changes the value of the age property of the given person object to the given value

function setAge(personObj, updatedAge){
  if (!personObj){
    return undefined
  }else{
    personObj.age = updatedAge;
    return personObj.age
  }
}

//* `giveBirthday` - increments by 1 the age property of the given person object, or gives them an age of 1 if they don't have that property

function giveBirthday(personObj){
  if (!personObj || personObj === NaN){
    return undefined
  }
  if(personObj.age === undefined){
  personObj.age = 1;
  }
  else {
    return personObj.age += 1
  }
};

//* `marry` - sets the marital status of both given people to `true` and sets each person's `spouseName` property to be the full name of the other

function marry(person1, person2){
  if (!person1 || !person2){
    return undefined
  }
  person1.married = true;
  person2.married = person1.married;
  const personOneFullName = `${person1.firstName} ${person1.lastName}`;
  const personTwoFullName = `${person2.firstName} ${person2.lastName}`;
  person1.spouseName = personTwoFullName;
  person2.spouseName = personOneFullName;
  return (person1, person2)
}

//* `divorce` - changes the marital status to `false` and removes the `spouseName` property from both given people

function divorce(person1, person2){
  if (!person1 || !person2){
    return undefined
  }else{
  person1.married = false;
  person2.married = person1.married; 
  delete person1.spouseName
  delete person2.spouseName 
  }
  return (person1, person2)
};





















// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
