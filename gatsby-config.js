const autoprefixer = require("autoprefixer");

module.exports = {
  siteMetadata: {
    title: "Include Braga",
    author: "Include Braga",
    description:
      "O #include <braga> é um movimento de voluntariado com base na tecnologia que procura ajudar pessoas e instituições em necessidade.",
    keywords: "include braga voluntariado tecnologia",
  },
  plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-postcss"],
};
