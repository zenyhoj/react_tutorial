const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <div className="pumpTenders">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default Hello;
