import React, { useState } from 'react';

const Hello: app<{ name: string }> = ({ name }) => {
  const [value, setValue] = useState(name);

  return (
    <div>
      <h1>Hello {value}!</h1>
      <p>
        Escreva algo:{' '}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
    </div>
  );
};

export default Hello;
