import { useState } from 'react';
import './App.css';
import BackGroundAnimation from './BackGroundAnimation';
import InputShortner from './InputShortner';
import LinkResult from './LinkResult';

function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="Container">
      <InputShortner setInputValue={setInputValue} />
      <BackGroundAnimation />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
