import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

interface ISEOProps {
    title?: string;
    description?: string;
    language?: string;
    type?: string;
}

export const SEO = (props: ISEOProps) => {
    const { title = '', description, language = 'en', type } = props;

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );

    return (
        <Helmet
            htmlAttributes={{
                lang: language,
            }}
            title={title || site.siteMetadata.title}
            titleTemplate={title ? `%s | ${site.siteMetadata.title}` : `%s`}
            meta={[
                {
                    property: `og:title`,
                    content: title || `${site.siteMetadata.title}`,
                },
                type && { property: `og:type`, content: type },
            ].filter(n => n)}
        />
    );
};
