module.exports = {
  siteMetadata: {
    title: "Gatsby V3 PA Bug",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://minimal.local/graphql",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
