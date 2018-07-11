import React, { PropTypes } from 'react';
import numeral              from 'numeral';

const CryptoCcyRow = ({crypto, currency}) => {
  return (
    <tr>
      <td className="ccy-list-cryptoName">{crypto.name} | {crypto.symbol}</td>
      <td className="ccy-list-cryptoPrice">
        {`${numeral(crypto[`price_${currency.toLowerCase()}`]).format('0,0.00')}`}
      </td>
      <td className={crypto.percent_change_24h >= 0 ? "ccy-list-cryptoChangePostive" : "ccy-list-cryptoChangeNegative"}>
        {`${crypto.percent_change_24h}%`}
      </td>
    </tr>
  );
};

CryptoCcyRow.propTypes = {
  crypto: PropTypes.object.isRequired,
  currency: PropTypes.string.isRequired
};

export default CryptoCcyRow;
