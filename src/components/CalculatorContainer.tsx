import CalculatorButton from './CalculatorButton';
import CalculatorInput from './CalculatorInput';
import CalculatorResult from './CalculatorResult';

const CalculatorContainer = () => {
  return (
    <div className='container'>
      <h1 className='header'>Calculator</h1>
      <CalculatorInput />
      <CalculatorResult />
      <CalculatorButton />
    </div>
  );
} 

export default CalculatorContainer;