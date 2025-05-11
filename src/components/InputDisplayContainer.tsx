import { InputValue } from "../interface/InputValue";

const InputDisplayContainer = ({ value }: InputValue) => {
  return(
    <div className='resultContainer'>
      {value}
    </div>
  );
}

export default InputDisplayContainer;