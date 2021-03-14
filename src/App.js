
import PersonList from "./components/PersonList/PersonList";
import Person from "./components/Person/Person";
function App() {
  const persons = [
    { name: "Elaman", photo: "./320474.png", role: "Teacher", wpm: 10, commits: 100 },
    { name: "Choro", photo: "./320474.png", role: "Assistant", wpm: 78, commits: 10401 },
    { name: "Tynchtyk",photo: "./320474.png", role: "Teacher", wpm: 102, commits: 0 },
    { name: "Danila",photo: "./320474.png", role: "Student", wpm: -5, commits: 1244 },
    { name: "Madina", photo: "./320474.png",role: "Student", wpm: 30, commits: 5000 },
    { name: "Tatyna",photo: "./320474.png", role: "Student", wpm: 27, commits: 572541 },
    { name: "Emirlan",photo: "./320474.png", role: "Student", wpm: 20, commits: 56566 },
    { name: "Baitemir",photo: "./320474.png", role: "Student", wpm: 35, commits: 556 },
    { name: "Yntymak",photo: "./320474.png", role: "Student", wpm: 40, commits: 55 },
    { name: "Tamara", role: "Student", wpm: 32, commits: 999 },
    { name: "Nurkyz", role: "Student", wpm: 39, commits: 26 },
    { name: "Kunduz", role: "Student", wpm: 38, commits: 99 },
    { name: "Adis", role: "Student", wpm: 39, commits: 56 },
    { name: "Islam", role: "Student", wpm: 20, commits: 25 },
    { name: "Felix", role: "Student", wpm: 25, commits: 99 },
    { name: "Erjan", role: "Student", wpm: 19, commits: 9959 },
    { name: "Ermek", role: "Student", wpm: 28, commits: 6655 },
    { name: "Aiymkyz", role: "Student", wpm: 37, commits: 226 },
    { name: "Keremet", role: "Student", wpm: 41, commits: 999 },
    { name: "Karlygach", role: "Student", wpm: 25, commits: 66 },
    { name: "Keremet", role: "Student", wpm: 32, commits: 52 },
    { name: "Kutman", role: "Student", wpm: 33, commits: 99 },
    { name: "Chyngyz", role: "Student", wpm: 36, commits: 559 },
  ];
  const output = persons.map(person => <Person {...person} />);
  return (
    <div className="App">
      {output}
    </div>
  );
}
/*
const students = persons.filter(person => person.role == "Student")
  return (
    <div className="App">
     <PersonList persons={students}/>
    </div>
  );
  }*/
export default App;

