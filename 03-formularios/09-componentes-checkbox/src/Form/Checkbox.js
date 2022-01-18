import React from 'react';

const Checkbox = ({ options, value, setValue, ...props }) => {
  const handleChange = ({ target }) => {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  };

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            onChange={handleChange}
            checked={value.includes(option)}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
