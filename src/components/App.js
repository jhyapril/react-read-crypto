import React, { PropTypes } from 'react';
import CryptoCcyList        from "./crypto/CryptoCcyList";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
