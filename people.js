const createPerson = require("./names");
const createHobbies = require("./hobbies");

function createProfile() {
  const person = createPerson("Lorenzo", "Scalvini");

  const hobbies = createHobbies("Reading", "Music", "Gaming");
  return {
    firstName: person.firstName,
    lastName: person.lastName,
    hobbies: hobbies,
  };
}

module.exports = createProfile;
