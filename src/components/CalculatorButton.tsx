
const inputButton = (val: number) => {
  return(
    <button className='inputButton'>
      {val}
    </button>
  );
}

const CalculatorButton = () => {
  return(
    <div className='buttonContainer'>
      <div className='buttonLoopingContainer'>
        {[1, 2, 3, 4].map((val) => inputButton(val))}
      </div>
      <div className='buttonLoopingContainer'>
        {[1, 2, 3, 4].map((val) => inputButton(val))}
      </div>
      <div className='buttonLoopingContainer'>
        {[1, 2, 3, 4].map((val) => inputButton(val))}
      </div>
      <div className='buttonLoopingContainer'>
        {[1, 2, 3, 4].map((val) => inputButton(val))}
      </div>
    </div>
  );
}

export default CalculatorButton;