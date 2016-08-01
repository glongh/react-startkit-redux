import React from 'react';
import Component1 from '../components/Component1';
import { connect } from 'react-redux';
import { anAction } from '../actions';

class App extends React.Component {
  static propTypes = {
    // Props
  };

  state = {
    something: [],
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { sendMessage, props, fetchHistory } = this;
    return (
      <div>
        <Component1 />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    anAction: (value) => dispatch(anAction(value)),
  };
}

function mapStateToProps(state) {
  return {
    something: state.app.get('something'),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
