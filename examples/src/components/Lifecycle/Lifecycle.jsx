import React from 'react';

export default class LifeCyle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      test: '',
    };
  }

  componentDidMount() {
    //useEffect
    console.log('componentDidMount');

    this.setState({ test: 'Sandeep' });
  }

  shouldComponentUpdate() {
    if (this.state.test === 'Sandeep') {
      return false;
    }

    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    //useEffect
    if (prevProps.xyz !== this.props.xyz) {
      //do some action
    }
    console.log('componentDidUpdate', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return <div>{this.state.test}</div>;
  }
}
