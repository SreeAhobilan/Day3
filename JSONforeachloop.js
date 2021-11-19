var info = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
];

//for each loop

result = "  ";

info.forEach(function (information) {
  result += ` 
  person:${information.person}
  age:${information.age}
  company:${information.company}
  `;
});

console.log(result);