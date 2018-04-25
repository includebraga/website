import React from "react";
import Link from "gatsby-link";
import scrollTo from "../../utils/scrollTo";

import "./index.scss";

const sections = [
  {
    name: "whoami",
    link: "whoweare",
  },
  {
    name: "ps",
    link: "whatwedo",
  },
  {
    name: "history",
    link: "history",
  },
  {
    name: "users",
    link: "team",
  },
  {
    name: "mail",
    link: "contact",
  },
];

export default class Header extends React.Component {
  state = {
    showMenu: false,
    scrollTarget: null,
    navShadow: false,
  };

  componentDidMount() {
    document.addEventListener("click", this.handleBlur);
    document.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    if (this.state.scrollTarget) {
      const targetHeight =
        document.getElementById(this.state.scrollTarget).offsetTop -
        document.getElementById("nav").clientHeight * 2;

      scrollTo(targetHeight, 500);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleBlur);
    document.removeEventListener("nav", this.handleScroll);
  }

  handleBlur = () => {
    this.setState({ showMenu: false });
  };

  handleScroll = event => {
    this.setState({ navShadow: event.pageY !== 0 });
  };

  handleClick = event => {
    event.nativeEvent.stopImmediatePropagation();

    this.setState({ showMenu: !this.state.showMenu, scrollTarget: null });
  };

  goToSection = event => {
    const link = event.target.dataset.target;

    event.nativeEvent.stopImmediatePropagation();
    this.setState({ scrollTarget: link });
    this.handleBlur();
  };

  renderMenuIcon() {
    return (
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
  }

  renderSections() {
    return sections.map(section => (
      <div
        key={section.link}
        data-target={section.link}
        onClick={this.goToSection}
        onKeyPress={this.goToSection}
        className="Header-link"
        tabIndex={0}
        role="link"
      >
        {section.name}
      </div>
    ));
  }

  render() {
    const className = this.state.navShadow
      ? "Header Header--withShadow"
      : "Header";

    return (
      <nav id="nav" className={className}>
        <div className="Header-left">
          <Link to="/" className="Header-link">
            <h2 className="Header-logo">#include &lt;braga&gt;</h2>
          </Link>
        </div>

        <div className="Header-sections">{this.renderSections()}</div>
        <div className="Header-sections-responsive">
          {this.renderMenuIcon()}
          {this.state.showMenu && this.renderSections()}
        </div>
      </nav>
    );
  }
}
