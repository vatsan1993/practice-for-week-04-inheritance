const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName, undefined);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }
  static combinedYearsOfExperience(teachers) {
    let totalExperience = teachers.reduce((acc, teacher) => {
      return acc + teacher.yearsOfExperience;
    }, 0);
    return totalExperience;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
