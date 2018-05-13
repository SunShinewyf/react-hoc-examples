import React from "react";
import ReactDOM from "react-dom";
import createReactClass from "create-react-class";

var mixinFunc1 = {
  componentWillMount: () => {
    console.log("mixin1 componentWillMount");
  },
  componentDidMount: () => {
    console.log("mixin1 componentDidMount");
  }
};

var mixinFunc2 = {
  componentWillMount: () => {
    console.log("mixin2 componentWillMount");
  },
  componentDidMount: () => {
    console.log("mixin2 componentDidMount");
  }
};

var MixinExample = createReactClass({
  mixins: [mixinFunc1, mixinFunc2],
  render: function() {
    return <div>test</div>;
  }
});

ReactDOM.render(<MixinExample />, document.getElementById("root"));
