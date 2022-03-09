

const person = {


    name: "Zain gillani",
    id: 12121212,
    hobies: ["cricket", "football", 'waliball']



}
for (const key in person.hobies) {
    console.log(person.hobies[key]);
}
console.log(person.hobies[1]);