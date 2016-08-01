import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Component1 extends React.Component {
  static propTypes = {
    props1: React.PropTypes.array,
  };

  componentWillUpdate(nextProps) {
  }

  componentDidUpdate() {
  }

  render() {
    const { props } = this;
    return (
      <div>Component1</div>
    );
  }
}

export default Component1;
