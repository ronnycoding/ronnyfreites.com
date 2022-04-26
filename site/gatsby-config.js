module.exports = {
  siteMetadata: {
    locale: "en",
    title: "Ronny Freites | Freelance Software Engineer, Entrepreneur",
    description:
      "Hello 👋🏼,'m looking to help you on get sucess withour project",
    formspreeEndpoint: "https://ronnyfreites.getform.com/9mgvd",
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
          "Hello 👋🏼,'m looking to help you on get sucess with yr project",
        formspreeEndpoint: "https://mailthis.to/hi@ronnyfreites.com",
      },
    },
  ],
}
