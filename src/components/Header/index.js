import React from "react";
import Link from "gatsby-link";

import "./index.scss";

const Header = () => (
  <div className="Header">
    <div className="Header-inner">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="Header-link">
          Include Braga
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
