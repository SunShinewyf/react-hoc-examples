/**
 * 模式：Props Proxy(属性代理)
 * author: SunShinewyf
 * date: 2017-05-18
 */
import React from "react";
import ReactDom from "react-dom";

class Example extends React.PureComponent {
  constructor(props) {
    super(props);
    this.consoleFun.bind(this);
  }

  consoleFun() {
    console.log("hello world");
  }

  render() {
    const { age } = this.props;
    return (
      <div>
        <p>{age}</p>
      </div>
    );
  }
}

function HOC(WrappedComponent) {
  class EnhancedComponent extends React.PureComponent {
    initFunc(instance) {
      instance.consoleFun();
    }
    render() {
      const props = Object.assign({}, this.props, {
        ref: this.initFunc.bind(this)
      });
      return <WrappedComponent {...props} />;
    }
  }
  return EnhancedComponent;
}

const HocComponent = HOC(Example);

ReactDom.render(<HocComponent age={24} />, document.getElementById("root"));
