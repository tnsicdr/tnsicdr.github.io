import { GatsbyConfig } from 'gatsby';
import { resolvePostUrl } from './src/utilities/resolvers/post-url-resolver';


require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'code.tnsi',
    siteUrl: 'https://code.tnsi.me',
    description: 'A blog focusing on web development and work life.',
    social: {
      twitter: 'tnsicdr',
      github: 'tnsicdr',
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: './src/content/posts/',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-external-links',
          'gatsby-remark-images',
          'gatsby-remark-numbered-footnotes',
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
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
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + resolvePostUrl('/posts', edge.node.frontmatter),
                  guid: edge.node.id,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              })
            },
            query:`
              {
                allMarkdownRemark(
                  filter: { frontmatter: { type: { eq: "post" }, draft: { eq: false } } }
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      frontmatter {
                        title
                        date
                        slug
                      }
                      id
                      excerpt
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'code.tnsi Feed',
          },
        ],
      },
    },
  ],
};

export default config;
