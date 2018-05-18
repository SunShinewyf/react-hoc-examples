/**
 * 模式：反向继承(Inheritance Inversion)中的劫持渲染
 * author: SunShinewyf
 * date: 2017-05-18
 */
import React from "react";
import ReactDom from "react-dom";

class Example extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { age } = this.props;
    return <input />;
  }
}

function HOC(WrapperComponent) {
  return class Inheritance extends WrapperComponent {
    render() {
      const elementsTree = super.render();
      let newProps = {};
      if (elementsTree && elementsTree.type === "input") {
        newProps = { defaultValue: "the initialValue of input" };
      }
      const props = Object.assign({}, elementsTree.props, newProps);
      const newElementsTree = React.cloneElement(
        elementsTree,
        props,
        elementsTree.props.children
      );
      return newElementsTree;
    }
  };
}

const HocComponent = HOC(Example);

ReactDom.render(<HocComponent age={24} />, document.getElementById("root"));
