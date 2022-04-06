import { graphql } from 'gatsby';

export const SiteFragment = graphql`
  fragment SiteMetadata on Site {
    siteMetadata {
      title
    }
  }
`;
