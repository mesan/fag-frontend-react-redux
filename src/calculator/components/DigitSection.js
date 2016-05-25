import React, { PropTypes } from 'react';

const DigitSection = ({ digits, addDigitToOperand }) =>
  <section className="digit-buttons">
    {digits.map(digit =>
      <button
        key={digit}
        onClick={addDigitToOperand(digit)}
        className="button digit-button"
      >
        {digit}
      </button>
    )}
  </section>;

DigitSection.propTypes = {
  digits: PropTypes.array.isRequired,
  addDigitToOperand: PropTypes.func.isRequired
};

export default DigitSection;
