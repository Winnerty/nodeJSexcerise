const student = {
    name: "Marie",
    age: 20,
    courses: [],
}

student.age = 21;
student.grade = "A";
student.courses.push("Math", "Physics", "Chemistry");
var ind = student.courses.indexOf("Physics");
var newArr = student.courses.slice(0, 2); 

console.log(student);
console.log(ind);
console.log(newArr);