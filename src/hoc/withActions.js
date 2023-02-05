import React from 'react';

const withActions = (INITAL_STATE, ACTIONS) => (WrappedComponent) => {
  return class InnerComponnent extends React.Component {
    constructor() {
      super();
      this.state = {
        ...INITAL_STATE,
      };
    }

    onAction = ({ type, payload }) => {
      if (ACTIONS[type]) {
        ACTIONS[type]({
          getState: this.getState,
          setState: this.setState.bind(this),
          payload,
        });
      }
    };

    getState = () => {
      return {
        ...this.state,
        ...this.props,
      };
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          onAction={this.onAction}
        />
      );
    }
  };
};

export default withActions;
