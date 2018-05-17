/**
 * 模式：反向继承(Inheritance Inversion)
 * author: SunShinewyf
 * date: 2017-05-17
 */
import React from "react";
import ReactDom from "react-dom";

class Example extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, age, github } = this.props;
    return (
      <div>
        <p>{age}</p>
      </div>
    );
  }
}

function HOC(WrapperComponent) {
  return class Inheritance extends WrapperComponent {
    render() {
      return super.render();
    }
  };
}

const HocComponent = HOC(Example);

ReactDom.render(<HocComponent age={24} />, document.getElementById("root"));
