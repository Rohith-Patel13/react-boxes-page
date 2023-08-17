const Box = (props) => {
    //  Write your code here.
    const { classNaming, text } = props;
    return <div className={classNaming}>{text}</div>;
  };
  
  const element = (
    //  Write your code here.
    <div className="bg">
      <h1 className="mainHeading">Boxes</h1>
      <div className="boxesContainer">
        <Box classNaming="box1 box" text="Small" />
        <Box classNaming="box2 box" text="Medium" />
        <Box classNaming="box3 box" text="Large" />
      </div>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById("root"));
  