import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default class Heading extends React.Component {
  static propTypes = {
    level: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
    weight: PropTypes.oneOf(["light", "regular", "bold"]),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    level: "1",
    weight: "bold",
  };

  render() {
    const { level, weight, children } = this.props;
    const HeadingComponent = `h${level}`;

    return (
      <HeadingComponent className={`Heading-${weight} Heading-level${level}`}>
        {children}
      </HeadingComponent>
    );
  }
}
