var info = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
];

//for in loop

let final = "  ";
 for (let index in info) {
  final += ` 
  person:${info[index].person}
  age:${info[index].age}
  company:${info[index].company}

  `;
 }
 console.log(final);