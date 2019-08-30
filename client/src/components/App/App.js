import React from 'react';

import { connect } from 'react-redux';

import { activateGeod, closeGeod } from '../../redux/actions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        hello world
      </header>
    </div>
  );
}

// AppContainer.js
const mapStateToProps = state => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;