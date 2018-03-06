import React from "react";
import Link from "gatsby-link";

import "./index.scss";

const sections = [
  {
    name: "Section 1",
    link: "section1",
  },
  {
    name: "Section 2",
    link: "section2",
  },
  {
    name: "Section 3",
    link: "section3",
  },
  {
    name: "Section 4",
    link: "section4",
  },
];

export default class Header extends React.Component {
  state = {
    showMenu: false,
    scrollTarget: null,
  };

  componentDidMount() {
    document.addEventListener("click", this.handleBlur);
  }

  componentDidUpdate() {
    if (this.state.scrollTarget) {
      const targetHeight =
        document.getElementById(this.state.scrollTarget).offsetTop -
        document.getElementById("nav").clientHeight * 2;

      window.scrollTo(0, targetHeight);
    }
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

  goToSection = event => {
    const link = event.target.dataset.target;

    event.nativeEvent.stopImmediatePropagation();
    this.setState({ scrollTarget: link });
    this.handleBlur();
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
      <div
        key={section.link}
        data-target={section.link}
        onClick={this.goToSection}
        onKeyPress={this.goToSection}
        className="Header-link"
        role="link"
        tabIndex={0}
      >
        {section.name}
      </div>
    ));
  }

  render() {
    return (
      <nav id="nav" className="Header">
        <div className="Header-left">
          <Link to="/" className="Header-link">
            <h2 className="Header-logo">#include &lt;braga&gt;</h2>
          </Link>
        </div>

        <div className="Header-sections">{this.renderSections()}</div>
        <div className="Header-sections-responsive">{this.renderMenu()}</div>
      </nav>
    );
  }
}
