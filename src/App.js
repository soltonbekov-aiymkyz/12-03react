
import Person from "./components/Person/Person";
function App() {
  const persons = [
    { name: "Elaman",  role: "Teacher", wpm: 10, commits: 100 },
    { name: "Choro",  role: "Assistant", wpm: 78, commits: 10401 },
    { name: "Tynchtyk", role: "Teacher", wpm: 102, commits: 0 },
    { name: "Danila",       role: "Student", wpm: -5, commits: 1244 },
    { name: "Madina", photo: "https://avatars.githubusercontent.com/u/75364399?s=460&u=bc77810078d496e3dfe66f27906b01f5db7f208b&v=4 " ,    role: "Student", wpm: 30, commits: 5000 },
    { name: "Tatyna",photo:"https://avatars.githubusercontent.com/u/75364411?s=460&u=b024420280528948f320ad191779a670439e54ec&v=4", role: "Student", wpm: 27, commits: 572541 },
    { name: "Emirlan", photo:"https://avatars.githubusercontent.com/u/75364762?s=460&u=1945ae5a1c13d5c73dd12e500b24e1965c06decc&v=4", role: "Student", wpm: 20, commits: 56566 },
    { name: "Baitemir",photo:"https://avatars.githubusercontent.com/u/65547734?s=460&u=7fc2c86db4a7a0feaef6f973739812aa62546604&v=4", role: "Student", wpm: 35, commits: 556 },
    { name: "Yntymak", photo:"https://avatars.githubusercontent.com/u/75364447?s=460&u=e5cab283f880cac68f5e9cec3b09e4559c5f5b8f&v=4", role: "Student", wpm: 40, commits: 55 },
    { name: "Tamara", role: "Student", wpm: 32, commits: 999 },
    { name: "Nurkyz",  role: "Student", wpm: 39, commits: 26 },
    { name: "Kunduz", role: "Student", wpm: 38, commits: 99 },
    { name: "Adis", role: "Student", wpm: 39, commits: 56 },
    { name: "Islam", role: "Student", wpm: 20, commits: 25 },
    { name: "Felix", role: "Student", wpm: 25, commits: 99 },
    { name: "Erjan", photo:"https://avatars.githubusercontent.com/u/75364569?s=460&u=41423e83599f6073887a5c5bce317657a3e8cb0b&v=4", role: "Student", wpm: 19, commits: 9959 },
    { name: "Ermek", role: "Student", wpm: 28, commits: 6655 },
    { name: "Aiymkyz", role: "Student", wpm: 37, commits: 226 },
    { name: "Keremet", role: "Student", wpm: 41, commits: 999 },
    { name: "Karlygach", role: "Student", wpm: 25, commits: 66 },
    { name: "Keremet",photo:"https://avatars.githubusercontent.com/u/75364381?s=460&u=45e3b4a4b507e9aa2183b3241f23a50bee90a033&v=4", role: "Student", wpm: 32, commits: 52 },
    { name: "Kutman", role: "Student", wpm: 33, commits: 99 },
    { name: "Chyngyz", role: "Student", wpm: 36, commits: 559 },
  ];
  
const [filterStudents,setFilterStudents ]= useState(false)
const [filterWpm,setFilterWpm ]= useState(false)

let students =persons;
if(filterStudents){
  students = persons.filter(person => person.role == "Student")
}


let wpm =students;
if(filterWpm){
  wpm = students.filter(person => person.wpm > 34)
}

// const[ filterStudents,setFilterStudents]=useState(false);
//  const students = persons.filter(person => person.role == "Student");
//  const wpms = persons.filter(person => person.wpm > 35);
   // const fast = students.filter(person => person.wpm >34);
  return (
    <div className="App">
      <div>
        <label>
        <input type="checkbox"
         checked={filterStudents}
         onChange={()=> setFilterStudents(!filterStudents)}
         /> Only students
        </label>
      </div>

      <div className="wpm">
        <label>
        <input type="checkbox"
         checked={filterWpm}
         onChange={()=> setFilterWpm(!filterWpm)}
         /> Only students
        </label>
      </div>
     <PersonList persons={wpm}/>
    </div>
  );
}
export default App;







  /*
  const output = persons.map(person => <Person {...person} />);
 return (
    <div className="App">
      {output}
    </div>
  );
}*/
/*
const students = persons.filter(person => person.role == "Student")
  return (
    <div className="App">
     <PersonList persons={students}/>
    </div>
  );
  }*/
  /*
export default App;
*/



