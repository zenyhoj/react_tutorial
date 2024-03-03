import Hello from "./Hello";

const App = () => {
  // const person = {
  //   firstName: "Joe",
  //   age: 39,
  //   skills: ["Programming", "Analysis"],
  // };

  // const { firstName, age } = person;
  // const [skill1, skill2] = person.skills;

  const pumpTenders = [
    { firstname: "R. Asistido", gender: "Male", age: 48 },
    { firstname: "S. Araña", gender: "Male", age: 47 },
    { firstname: "J. Oliveros", gender: "Male", age: 38 },
  ];

  const firstNames = pumpTenders.map((tender) => {
    return tender.firstname;
  });

  return (
    <div className="card">
      {/* props to be pass on the Hello component as an argument */}
      <Hello name={firstNames} />
    </div>
  );
};

export default App;
