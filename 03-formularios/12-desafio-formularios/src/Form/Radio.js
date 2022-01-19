import React from 'react';

const Radio = ({
  pergunta,
  options,
  resposta,
  id,
  onChange,
  value,
  active,
}) => {
  if (active === false) return null;

  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: '2px solid #333',
      }}
    >
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
        >
          <input
            id={id}
            type="radio"
            value={option}
            checked={value === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
