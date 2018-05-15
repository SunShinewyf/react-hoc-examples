import React from "react";
import ReactDOM from "react-dom";
import createReactClass from "create-react-class";

var mixinFunc1 = {
  getName: () => {
    console.log("function name1");
  }
};

var mixinFunc2 = {
  getName: () => {
    console.log("function name2");
  }
};

var MixinExample = createReactClass({
  mixins: [mixinFunc1, mixinFunc2],
  render: function() {
    return <div>test</div>;
  }
});

ReactDOM.render(<MixinExample />, document.getElementById("root"));
