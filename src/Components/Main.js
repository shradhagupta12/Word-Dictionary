import React from 'react';

const Main = ({ letter, error }) => {
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='mainDisplay'>
      <div className="sec1 active">
        <h1>{letter.word}</h1>
        <hr />
        {letter.meanings.map((meaning, index) => (
          <div key={index}>
            <h3>{meaning.partOfSpeech}</h3>
            <ul>
              {meaning.definitions.map((definition, index) => (
                <li key={index}>{definition.definition}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
