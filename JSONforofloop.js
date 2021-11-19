var info = [
  { person: "Name 1", age: "2", company: "GUVI" },
  { person: "Name 2", age: "5", company: "GUVI geek" },
  { person: "Name 3", age: "8", company: "GUVI geek network" },
];

//for of loop

result = "  ";
  for (let informations of info) {
   result += ` 
   person:${informations.person} 
   age:${informations.age} 
   company:${informations.company} 
   
   `;
}
console.log(result);