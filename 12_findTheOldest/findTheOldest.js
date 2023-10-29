const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
    const name = people.reduce((oldest, person) => {
        if (!oldest) {
            oldest.age = person.yearOfDeath - person.yearOfBirth
        }
        return oldest
    }, {})
    console.log(name.name);
    return(name.name);
};

findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
