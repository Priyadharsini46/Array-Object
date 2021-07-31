
const students = [{ name: "Adhi", gender: "male" },
{ name: "Ahamed", gender: "male" },
{ name: "Rutika Kadam", gender: "female" },
{ name: "Priyadharsini", gender: "female" },
{name: "Abirami", gender: 'female'}];


console.log(students.filter((val)=> val.gender==='female'))

console.log(students.filter((val)=>val.name[0] === 'A'))

console.log(students.filter((val)=>val.gender === 'male').map((val)=>val.length))