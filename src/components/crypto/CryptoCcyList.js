import React, { PropTypes } from 'react';
import CryptoCcyRow         from './CryptoCcyRow';

const CryptoCcyList = ({cryptos, currency}) => {
  return (
    <table className="table table-hover ccy-list-table">
      <thead className="thead-dark">
      <tr>
        <th scope="col">Crypto Currency</th>
        <th scope="col">Price ({currency})</th>
        <th scope="col" className="ccy-list-change-header">Change (24h)</th>
      </tr>
      </thead>
      <tbody>
      {cryptos.map(crypto =>
        <CryptoCcyRow key={crypto.id} crypto={crypto} currency={currency}/>
      )}
      </tbody>
    </table>
  );
};

CryptoCcyList.propTypes = {
  cryptos: PropTypes.array.isRequired,
  currency: PropTypes.string.isRequired
};

export default CryptoCcyList;
