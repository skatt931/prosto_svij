module.exports = {
  siteMetadata: {
    title: `Просто свій`,
    author: {
      name: `Ігор Курницький`,
      summary: `Подкасти про світ та технології, життя та інші цікаві штуки.`,
    },
    description: `Сайт Просто Нашого Подкасту в якому ми зібрали для вас цікаві історії про наш світ, технології та все що між ними.`,
    siteUrl: `https://gatsbyglass.netlify.app`,
    social: {
      twitter: `skatt9311`,
    },
    socialLinks: [
      // {
      //   name: 'github',
      //   url: 'https://github.com',
      // },
      {
        name: 'facebook',
        url: 'https://www.facebook.com/Ihor.Kurnytskyi1/',
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/kurnytskyiihor/',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: 'static/favicon.ico',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `media`,
        path: `${__dirname}/static/media`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: 'static',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/netlify-cms/index.js`,
        enableIdentityWidget: true,
        publicPath: 'admin',
        htmlTitle: 'Content Manager',
        includeRobots: false,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`Comfortaa\:400,400i,700`, `Poppins\:400,400i,700`],
    //     display: 'swap',
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Frosted Blog`,
        short_name: `Gatsby Frosted`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `red`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
         // You can add multiple tracking ids and a pageview event will be fired for all of them.
         trackingIds: [
          "G-EGDH0H2YZM", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
