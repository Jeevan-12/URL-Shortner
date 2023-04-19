import React, { useEffect, useState } from 'react';
import './App.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';

function LinkResult({ inputValue }) {
  const [result, setResult] = useState('');
  // const [copied, setCopied] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      console.log(res);
      setResult(res.data.result.full_short_link);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [inputValue]);

  return (
    <div className="linkResult">
      <p>{result}</p>
      <CopyToClipboard text={result}>
        <button>Copy to ClipBoard</button>
      </CopyToClipboard>
    </div>
  );
}

export default LinkResult;
