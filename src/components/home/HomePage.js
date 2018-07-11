import React, { PropTypes }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import CryptoCcyList          from '../crypto/CryptoCcyList';
import * as cryptoActions     from '../../actions/cryptoActions';
import * as constants         from '../common/Constants';
import Dropdown               from '../common/Dropdown';
import toastr                 from 'toastr';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'SGD',
      loading: false
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    const currency = event.target.value;
    this.setState({loading: true});
    this.props.actions.loadCryptos(currency)
        .then(() => {
          this.setState({
            currency: currency,
            loading: false
          });
          toastr.success('Success!', { showDuration: 100 });
        });
  }

  render() {
    return (
      <div>
        <h1 className="hp_header">Top 5 Crypto Currencies Today </h1>
        <Dropdown
          label="Select a currency"
          loading={this.state.loading}
          onChange={this.handleSelect}
          defaultOption="Select a currency (SGD)"
          currencies={constants.CURRENCIES}
        />
        <CryptoCcyList cryptos={this.props.cryptos} currency={this.state.currency}/>
      </div>
    );
  }
}

HomePage.propTypes = {
  cryptos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cryptos: state.cryptos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cryptoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
