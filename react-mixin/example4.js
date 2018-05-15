import React from "react";
import ReactDOM from "react-dom";
import createReactClass from "create-react-class";

var propsMixin1 = {
  getDefaultProps: () => {
    return {
      name: "Amy"
    };
  }
};

var propsMixin2 = {
  getDefaultProps: () => {
    return {
      title: "SunShinewyf"
    };
  }
};

var MixinExample = createReactClass({
  mixins: [propsMixin1, propsMixin2],
  render: function() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.title}</p>
      </div>
    );
  }
});

ReactDOM.render(<MixinExample />, document.getElementById("root"));
