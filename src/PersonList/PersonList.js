
import Person from "../Person/Person";
//import Person from "./components/PersonList/PersonList";
import classes from "./PersonList.module.css";
const PersonList = ({ persons }) => {
    return (
        <div className={classes.PersonList}>
            {persons.map(person => <Person {...person} />)}
        </div>
    );
}
export default PersonList;














/*let numbers = [-1, -5, 3, 7,]
let neg = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    neg.push(numbers[i])
  }
}
console.log(neg)

let neg2 = numbers.filter(function (item) {
  return item < 0;
})
console.log(neg2)*/
/*
const example =[-1, -5,0, -7, 5, 8, 9];
const result = [ ];
 for(const number of example){
   if(number >=0){
     result.push(number)
   }
 }
console.log(result);
*/
//////2
/*
 const result2 = example.filter(number =>{
   if (number >= 0){
     return true;
   }
   return false
 })  
console.log(result2);
*/
/*
let example1 = [1,8,12,34, 3, 5, 7];
let o = [];
for(let r of example1 ){
  if(r % 3){
    o.push(r)
  }
}
console.log(o)
*/

/*
let example1 = [1,8,12,34, 3, 5, 7];
const result = [];

for (const number of example){
  if (number % 5 == 0){
    result.push(number)
  }
}
console.log(result)

*/
/*
const example =["hello","dfgnvergbfd","sefgfd","ef"];
const result = [ ];
 const result2 = example.filter(number =>{
   if (number.length <= 5 ){
     return true;
   }
   return false
 })  
console.log(result2);
const example5 = [
  "Hello world",
  "Bey world",
  "World of warcraft",
  "JavaScript",
  "HTML",
  "CSS",
];
const list5 = example5.filter(number => number.length < 6)
console.log(list5);
*//*
const example2 = [
  "Hello world",
  "Bey world",
  "World of warcraft",
  "JavaScript",
  "HTML",
  "CSS",
];

const result = [];
// const list6 = example5.filter(example6 => examle6.toLowerCase().includes("world"))
// console.log(list6);

const result2 = example2.filter(text =>text.toLowerCase().includes("world"))
console.log(result2)

const result3 = example2.filter(text => text.split(" ").length ==2 )
console.log(result3)
*/

/*
const example3 = [
  { name: "Elaman", role: "Teacher", wpm: 10, commits: 100 },
  { name: "Choro", role: "Assistant", wpm: 78, commits: 10401 },
  { name: "Tynchtyk", role: "Teacher", wpm: 102, commits: 0 },
  { name: "Danila", role: "Student", wpm: -5, commits: 1244 },
  { name: "Madina", role: "Student", wpm: 30, commits: 5000 },
];

const result = [];
const list4 = example3.filter(person=> person.wpm >= 30)
console.log(list4)

*/
/*
const example3 = [
  { name: "Elaman", role: "Teacher", wpm: 10, commits: 100 },
  { name: "Choro", role: "Assistant", wpm: 78, commits: 10401 },
  { name: "Tynchtyk", role: "Teacher", wpm: 102, commits: 0 },
  { name: "Danila", role: "Student", wpm: -5, commits: 1244 },
  { name: "Madina", role: "Student", wpm: 30, commits: 5000 },
];
const result = [];
const list4 = example3.filter(person=> person.role == "Student")
console.log(list4)
*/
/*
const example3 = [
    { name: "Elaman", role: "Teacher", wpm: 10, commits: 100 },
    { name: "Choro", role: "Assistant", wpm: 78, commits: 10401 },
    { name: "Tynchtyk", role: "Teacher", wpm: 102, commits: 0 },
    { name: "Danila", role: "Student", wpm: -5, commits: 1244 },
    { name: "Madina", role: "Student", wpm: 30, commits: 5000 },
  ];
  const result = [];
  const result7 = example3.map(person => person.name + " - " + person.role );
  console.log(result7)
  */
  
  
  
  




















  /*
const example =[-1, -5,0, -7, 5, 8, 9];
const example2 =[
  "Hello world ",
  "Bye world",
  "World of place",
  "Java script",
  "HTML",
  "CSS",
]
const example3 = [
    { name: "Elaman", role: "Teacher", wpm: 10, commits: 100 },
    { name: "Choro", role: "Assistant", wpm: 78, commits: 10401 },
    { name: "Tynchtyk", role: "Teacher", wpm: 102, commits: 0 },
    { name: "Danila", role: "Student", wpm: -5, commits: 1244 },
    { name: "Madina", role: "Student", wpm: 30, commits: 5000 },
  ];
const result = [];
//1
 for(const number of example){
   if(number >=0){
     result.push(number)
   }
 }
console.log(result);
//2
 const result2 = example.filter(number =>{
   if (number >= 0){
     return true;
   }
   return false
 })  
console.log(result2);



let example6 = [1,8,12,34, 3, 5, 7];
let o = [];
for(let r of example6 ){
  if(r % 3){
    o.push(r)
  }
}
console.log(o)




//3
const result3 = example2.filter(text => text.toLowerCase().includes("world"))
console.log(result3)

  //4
const result4 = example2.filter(text => text.split(" ").length)
  console.log(result4)
  */
  //5
  /*const result5 = example3
  .filter(person => person.wpm >= 35)
  .filter(person => person.role == " - " + person.role);
  .map(person => person.name + " - " + person.wpm);

console.log(result5)
  */
  //5
  /*
const result = [];
const result5 = example3.filter(person=> person.wpm >= 30)
console.log(result5)
  
  //6
const result = [];
const result6 = example3.filter(person=> person.role == "Student")
console.log(result6)
  
  
  
  const result = [];
  const result7 = example3.map(person => person.name + " - " + person.role );
  console.log(result7)
  */
  
  
  /*
  
const example3 = [
    { name: "Elaman", role: "Teacher", wpm: 10, commits: 100 },
    { name: "Choro", role: "Assistant", wpm: 78, commits: 10401 },
    { name: "Tynchtyk", role: "Teacher", wpm: 102, commits: 0 },
    { name: "Danila", role: "Student", wpm: -5, commits: 1244 },
    { name: "Madina", role: "Student", wpm: 30, commits: 5000 },
  ];
  
  const result = [];
  const list4 = example3.filter(person=> person.wpm >= 30)
  console.log(list4)
  

const example3 = [
  { name: "Elaman", role: "Teacher", wpm: 10, commits: 100 },
  { name: "Choro", role: "Assistant", wpm: 78, commits: 10401 },
  { name: "Tynchtyk", role: "Teacher", wpm: 102, commits: 0 },
  { name: "Danila", role: "Student", wpm: -5, commits: 1244 },
  { name: "Madina", role: "Student", wpm: 30, commits: 5000 },
];
const result = [];
const list4 = example3.filter(person=> person.role == "Teacher")
console.log(list4)*/

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  