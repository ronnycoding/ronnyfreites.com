module.exports = {
  siteMetadata: {
    description: "Personal page of John Doe",
    locale: "en",
    title: "John Doe",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "classic",
        title: "Ronny Freites | Freelance Software Engineer, Entrepreneur",
        description:
          "Hello 👋🏼,'m looking to help you on get sucess with your project",
        formspreeEndpoint: "https://mailthis.to/hi@ronnyfreites.com",
      },
    },
  ],
}
