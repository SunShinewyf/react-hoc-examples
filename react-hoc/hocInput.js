/**
 * props 抽象 state 实现一个受控的 input
 * author: SunShinewyf
 * date: 2018-05-17
 */
import React from "react";
import ReactDom from "react-dom";

class ExampleInput extends React.PureComponent {
  render() {
    return <input name="name" {...this.props.name} />;
  }
}

function HocInput(WrappedComponent) {
  return class EnhancedComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        name: ""
      };
      this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
      this.setState({
        name: e.target.value
      });
    }

    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.handleNameChange
        }
      };
      return <WrappedComponent {...this.props} {...this.newProps} />;
    }
  };
}

const HocComponent = HocInput(ExampleInput);

ReactDom.render(<HocComponent />, document.getElementById("root"));
