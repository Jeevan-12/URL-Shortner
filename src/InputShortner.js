import React, { useState } from 'react';

function InputShortner({ setInputValue }) {
  const [value, setValue] = useState('');
  const submitHandler = () => {
    setInputValue(value);
    setValue('');
  };
  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div className="style">
        <input
          type={'text'}
          placeholder={'Enter URL to shortend'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button onClick={submitHandler}>Shortener</button>
      </div>
    </div>
  );
}

export default InputShortner;
