
function filterAdults(people) {
  const adults = []; 

  for (let i = 0; i < people.length; i++) {
    
    if (people[i].age >= 18) {
      adults.push(people[i]); 
    }
  }

  return adults; 
}

module.exports = filterAdults; 


function findByName(students, name) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      return students[i]; 
    }
  }
  return null; 
}