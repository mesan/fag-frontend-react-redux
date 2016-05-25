import React, { PropTypes } from 'react';

const OperationSection = ({ nextOperand, operations, operationActions }) =>
  <section className="operation-buttons">
    {operations.map((operation, index) =>
      <button
        key={operation}
        onClick={operationActions[index](nextOperand)}
        className="button operation-button"
      >
        {operation}
      </button>
    )}
  </section>;

OperationSection.propTypes = {
  nextOperand: PropTypes.number.isRequired,
  operations: PropTypes.array.isRequired,
  operationActions: PropTypes.array.isRequired
};

export default OperationSection;
