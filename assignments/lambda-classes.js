// CODE here for your Lambda Classes
// =============== PERSON ================
class Person {
  constructor(personObj){
    this.name = personObj.name;
    this.location = personObj.location;
    this.age = personObj.age;
    this.gener = personObj.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}
// =============== INSTRUCTOR ================
class Instructor extends Person {
  constructor(insObj){
    super(insObj);
    this.specialty = insObj.specialty;
    this.favLanguage = insObj.favLanguage;
    this.catchPhrase = insObj.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }

  grade(stuObj, subject) {
    return `${stuObj.name} receives a perfect score on ${subject}`
  }

  points(stuObj) {
    console.log(`${this.name} is changing ${stuObj.name}'s grade....`);
    let subtractGrade = stuObj.grade - Math.floor(Math.random() * 40);
    let addGrade = stuObj.grade + Math.floor(Math.random() * 40);
    let gradeArray = [subtractGrade, addGrade];
    stuObj.grade = gradeArray[Math.floor(Math.random() * 2)];
    return stuObj.grade;
  }
}
// =============== PROJECT MANAGER ================
class ProjectManager extends Instructor {
  constructor(pmObj){
    super(pmObj);
    this.gradClassName = pmObj.gradClassName;
    this.favInstructor = pmObj.favInstructor;
  }

  standUp(channel){
    return `${this.name} announces to ${channel}, @channel standup time!`
  }

  debugsCode(stuObj, subject) {
    return `${this.name} debugs ${stuObj.name}'s code on ${subject}`
  }
}
// =============== STUDENT ================
class Student extends Person {
  constructor(stuObj){
    super(stuObj);
    this.previousBackground = stuObj.previousBackground;
    this.className = stuObj.className;
    this.favSubjects = stuObj.favSubjects;
    this.grade = stuObj.grade;
  }
  listsSubjects(arr) {
    console.log('    ---------------');
    arr.forEach(function(val){
      console.log(val);
    });
    return `This is a list of favorite subjects from ${this.name}`;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }

  graduate(insObj) {
    while(this.grade < 70) {
      insObj.points(this);
      console.log(`ReGrading......`)
      console.log(this.grade);
    }
      return `${this.name} is ready to graduate!`;
  }
}
// =============== OBJECTS ================
const josh = new Instructor({
  name: 'Josh Knell',
  location: 'Utah',
  age: 35,
  gender: 'Male',
  specialty: 'Teaching JS',
  favLanguage: 'JavaScript',
  catchPhrase: 'Nyob zoo hoob kawm'
});

const roxanne = new ProjectManager({
  name: 'Roxanne Printice',
  location: 'LA',
  age: 28,
  gender: 'Female',
  specialty: 'Game Dev',
  favLanguage: 'C#',
  catchPhrase: 'Standup Time!',
  gradClassName: 'Web16',
  favInstructor: 'Josh Knell'
});

const zach = new Student({
  name: 'Zach Christy',
  location: 'Seattle',
  age: 30,
  gender: 'Male',
  previousBackground: 'RF Engineer',
  className: 'Web19',
  favSubjects: ['JavaScript', 'Preprocessing', 'React', 'Node', 'MongoDB', 'Restful Routing', 'AJAX/JSON/HTTP', 'OAuth'],
  grade: 100
});


console.log('===========================================================');
console.log(josh.speak());
console.log(josh.demo('JavaScript'));
console.log(josh.grade(zach, 'JavaScript-IV'));
console.log('===========================================================');
console.log(roxanne.speak());
console.log(roxanne.standUp('Web19_Roxanne'));
console.log(roxanne.debugsCode(zach, 'JavaScript'));
console.log('===========================================================');
console.log(zach.speak());
console.log(zach.listsSubjects(zach.favSubjects));
console.log('    ---------------');
console.log(zach.PRAssignment('JavaScript-IV'));
console.log(zach.sprintChallenge('JavaScript-IV'));
console.log('===========================================================');
console.log('Stretch Goal');
console.log('===========================================================');
console.log(josh.points(zach));
console.log(zach.graduate(josh));
