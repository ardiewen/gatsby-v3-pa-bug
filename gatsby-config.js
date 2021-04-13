require("dotenv").config({
  path: `.env${process.env.NODE_ENV && `.${process.env.NODE_ENV}`}`,
});

module.exports = {
  siteMetadata: {
    title: "Gatsby V3 PA Bug",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `${process.env.GATSBY_GRAPHQL_URL}`,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
