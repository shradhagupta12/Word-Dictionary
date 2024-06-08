// Header.jsx
import React, { useState, useEffect } from 'react';
import Main from './Main';
import '../App.css';

export default function Header() {
  const [val, setVal] = useState('Hello');
  const [letter, setLetter] = useState(null);
  const [error, setError] = useState(null);

  const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;

  const click = async () => {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (data && data.length > 0) {
        setLetter(data[0]);
        setError(null);
      } else {
        setLetter(null);
        setError('No meanings found for the given word');
      }
    } catch (error) {
      setError('No Meaning Found');
    }
  };

  const change = event => {
    setVal(event.target.value);
  };

  useEffect(() => {
    // Fetch default data when the component mounts
    click();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className='searchBtn'>
      <input name='search' type="search" placeholder='Start typing any word' onChange={change} value={val} />
      <button type='submit' onClick={click}><i className="fa-solid fa-magnifying-glass"></i></button>
      <Main letter={letter} error={error} />
    </div>
  );
}
