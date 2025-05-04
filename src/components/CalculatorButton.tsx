
const inputButton = (val: string) => {
  return(
    <button className={`inputButton ${val === "=" ? "equalsButton" : ""}`} key={val} >
      {val}
    </button>
  );
}

const buttons = [
  ['CE','C','/','X'],
  ['7','8','9','*'],
  ['4','5','6','-'],
  ['1','2','3','+'],
  ['0','%','.','='],
];

const CalculatorButton = () => {
  return(
    <div className='buttonContainer'>
      {buttons.map((val, index) => (
        <div className="buttonLoopingContainer" key={index}>
          {val.map((buttonValue) => inputButton(buttonValue))}
        </div>
      ))}
    </div>
  );
}

export default CalculatorButton;