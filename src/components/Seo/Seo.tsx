import { graphql, useStaticQuery } from 'gatsby';
import { DetailedHTMLProps, MetaHTMLAttributes } from 'react';
import { Helmet } from 'react-helmet';

type Meta = {
  name?: string;
  property?: string;
  content?: string;
};

type SeoProps = {
  title?: string;
  description?: string;
  meta?: Array<
    DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>
  >;
};

type Site = {
  siteMetadata: {
    title: string;
    description: string;
    social: {
      twitter: string;
    };
  };
};

const Seo = (props: SeoProps) => {
  const { title, description, meta = [] } = props;

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata?.social?.twitter || '',
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        ...meta,
      ]}
    />
  );
};

export default Seo;
