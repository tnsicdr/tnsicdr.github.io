require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: 'code.tnsi.me',
        siteUrl: 'https://code.tnsi.me',
    },
    plugins: [
        {
            resolve: 'gatsby-source-wordpress',
            options: {
                url: process.env.WPGRAPHQL_URL,
            },
        },
        'gatsby-plugin-emotion',
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        //"gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/content/posts`,
            },
            __key: 'posts',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/content/pages/`,
            },
            __key: 'pages',
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-sitemap',
    ],
};
