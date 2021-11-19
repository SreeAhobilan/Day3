var info = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];
  //normal for loop
    let result = "  ";
    for (let i = 0; i < info.length; i++) {
    result += `
     person:${info[i].person}
     age:${info[i].age}
     company:${info[i].company}

    `;
 }

console.log(result);
 
 
