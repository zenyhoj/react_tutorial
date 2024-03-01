const App = () => {
  const person = {
    firstName: 'Joe',
    age: 39,
    skills: ['Programming', 'Analysis']
  }

  const {firstName, age} = person;
  const [skill1, skill2] = person.skills;

  return (
    <>
      <h1>Hello there, {firstName}. Good you learn react at age {age} </h1>
      <p>And you have abilities like {skill1} and {skill2}</p>
      
    </>
  )
}

export default App