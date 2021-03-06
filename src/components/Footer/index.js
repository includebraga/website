import React from "react";

import "./index.css";

const socialIcons = [
  { href: "mailto:includebraga@gmail.com", icon: "icon-envelope" },
  { href: "https://github.com/includebraga", icon: "icon-social-github" },
  { href: "https://facebook.com/includebraga", icon: "icon-social-facebook" },
  { href: "https://instagram.com/includebraga", icon: "icon-social-instagram" },
  { href: "https://twitter.com/includebraga", icon: "icon-social-twitter" },
];

const Footer = () => (
  <footer className="Footer">
    <div className="Footer-content">
      <div className="Footer-socialList">
        {socialIcons.map(socialIcon => (
          <div className="Footer-socialItem" key={socialIcon.href}>
            <a
              className="Footer-socialLink"
              href={socialIcon.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={socialIcon.icon} />
            </a>
          </div>
        ))}
      </div>

      <div className="Footer-tagline">
        hacked with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by <span className="Footer-logo">#include &lt;braga&gt;</span>
      </div>
    </div>
  </footer>
);

export default Footer;
