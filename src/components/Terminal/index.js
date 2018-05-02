import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const Terminal = ({ children }) => (
  <div className="terminal">
    <div className="menu">
      <div className="button close" />
      <div className="button minimize" />
      <div className="button fullscreen" />
    </div>
    <div className="window">{children}</div>
  </div>
);

Terminal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Terminal;
