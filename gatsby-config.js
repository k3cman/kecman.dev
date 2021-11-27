module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "kecman.dev",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(
            "./src/components/templates/post-template.js"
          ),
        },
      },
    },
  ],
};
