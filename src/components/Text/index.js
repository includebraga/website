import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class Text extends React.Component {
  static propTypes = {
    size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),
    weight: PropTypes.oneOf(["light", "regular", "bold"]),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    size: "small",
    weight: "regular",
  };

  render() {
    const { size, weight, children } = this.props;

    return <p className={`Text-${weight} Text-${size}`}>{children}</p>;
  }
}
