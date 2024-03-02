import Hello from "./Hello";

const App = () => {
  const person = {
    firstName: "Joe",
    age: 39,
    skills: ["Programming", "Analysis"],
  };

  const { firstName, age } = person;
  const [skill1, skill2] = person.skills;

  return (
    <div className="card">
      {/* props to be pass on the Hello component as an argument */}
      <Hello name={firstName} age={age} skill={skill1} skill2={skill2} />
    </div>
  );
};

export default App;
