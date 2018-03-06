import React from "react";
import Link from "gatsby-link";

import "./index.scss";

const sections = [
  {
    name: "Section 1",
    link: "#section1",
  },
  {
    name: "Section 2",
    link: "#section2",
  },
  {
    name: "Section 3",
    link: "#section3",
  },
  {
    name: "Section 4",
    link: "#section4",
  },
];

export default class Header extends React.Component {
  state = {
    showMenu: false,
  };

  componentDidMount() {
    document.addEventListener("click", this.handleBlur);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleBlur);
  }

  handleBlur = () => {
    this.setState({ showMenu: false });
  };

  handleClick = event => {
    event.nativeEvent.stopImmediatePropagation();

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
        role="button"
        tabIndex={0}
      />
    );

    if (this.state.showMenu) {
      return [Icon, this.renderSections()];
    }

    return Icon;
  }

  renderSections() {
    return sections.map(section => (
      <Link to={section.link} key={section.link} className="Header-link">
        {section.name}
      </Link>
    ));
  }

  render() {
    return (
      <div className="Header">
        <div className="Header-left">
          <Link to="/" className="Header-link">
            <h2 className="Header-logo">#include &lt;braga&gt;</h2>
          </Link>
        </div>

        <div className="Header-sections">{this.renderSections()}</div>
        <div className="Header-sections-responsive">{this.renderMenu()}</div>
      </div>
    );
  }
}
