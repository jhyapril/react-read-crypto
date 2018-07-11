import React, { PropTypes } from 'react';

const Dropdown = ({label, loading, onChange, defaultOption, currencies}) => {
  return (
    <div className="form-group dd-group">
      <div className="field">
        <select
          onChange={onChange}
          disabled={loading}
          className="form-control dd-select">
          <option selected disabled hidden>{defaultOption}</option>
          {currencies.map((currency) => {
            return <option key={currency}>{currency}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  currencies: PropTypes.array.isRequired,
  label: PropTypes.string,
  loading: PropTypes.bool,
  defaultOption: PropTypes.string
};

export default Dropdown;
