import React from "react";
import Link from "gatsby-link";

import "./index.scss";

const sections = [
  <Link to="#section1" className="Header-link">
    <h3>Secção1</h3>
  </Link>,
  <Link to="#section2" className="Header-link">
    <h3>Secção2</h3>
  </Link>,
  <Link to="#section3" className="Header-link">
    <h3>Secção3</h3>
  </Link>,
  <Link to="#section4" className="Header-link">
    <h3>Secção4</h3>
  </Link>,
];

export default class Header extends React.Component {
  state = {
    showMenu: false,
  };

  handleBlur = () => {
    this.setState({ showMenu: false });
  };

  handleClick = event => {
    event.preventDefault();

    this.setState({ showMenu: !this.state.showMenu });
  };

  renderMenu() {
    const Icon = (
      <i
        className={`Header-button ${
          this.state.showMenu ? "icon-close" : "icon-menu"
        }`}
        onClick={this.handleClick}
        onKeyPress={this.handleClick}
        onBlur={this.handleBlur}
        role="button"
        tabIndex={0}
      />
    );

    if (this.state.showMenu) {
      return [Icon, sections];
    }

    return Icon;
  }

  render() {
    return (
      <div className="Header">
        <div className="Header-left">
          <Link to="/" className="Header-link">
            <h2 className="Header-logo">#include &lt;braga&gt;</h2>
          </Link>
        </div>

        <div className="Header-right">
          <div className="Header-sections">{sections}</div>
          <div className="Header-sections-responsive">{this.renderMenu()}</div>
        </div>
      </div>
    );
  }
}
