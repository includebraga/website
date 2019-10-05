import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../Header";
import Footer from "../Footer";

import "../../../node_modules/simple-line-icons/css/simple-line-icons.css";
import "./reboot.css";
import "./index.css";

const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;

function Layout({ children }) {
  const {
    site: {
      siteMetadata: { title, description, keywords },
    },
  } = useStaticQuery(query);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <Header />
      <div className="Content">{children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Layout;
