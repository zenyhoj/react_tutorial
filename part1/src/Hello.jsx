const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} and you are {props.age} and has a skill of{" "}
        {props.skill} and {props.skill2}
      </h1>
    </div>
  );
};

export default Hello;
