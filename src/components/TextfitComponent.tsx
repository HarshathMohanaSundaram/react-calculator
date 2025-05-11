import { Textfit } from 'react-textfit';
import { InputValue } from '../interface/InputValue';

const TextfitComponent = ({ value }: InputValue)=> {
  return(
    <Textfit mode="single" className="inputContainer">
      {value}
    </Textfit>
  );
};

export default TextfitComponent;