/**
 * 模式：Props Proxy(属性代理)
 * author: SunShinewyf
 * date: 2017-05-17
 */
import React from "react";
import ReactDom from "react-dom";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

class Example extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, age, github } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{github}</p>
      </div>
    );
  }
}

function HOC(WrappedComponent) {
  class EnhancedComponent extends React.PureComponent {
    render() {
      const props = Object.assign({}, this.props, {
        name: "SunShinewyf",
        github: "http://github.com/SunShinewyf"
      });
      return <WrappedComponent {...props} />;
    }
  }
  EnhancedComponent.displayName = `Hoc(${getDisplayName(WrappedComponent)})`;
  return EnhancedComponent;
}

const HocComponent = HOC(Example);

ReactDom.render(<HocComponent age={24} />, document.getElementById("root"));
