import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const NotFoundPage = ({ data }: PageProps<DataProps>) => {
  return (
    <>
      <Seo title="about" />
      <Layout siteTitle={data.site.siteMetadata.title}>
        Page not found
      </Layout>
    </>
  );
};

export default NotFoundPage;

export const query = graphql`
  query NotFoundQuery {
    site {
      ...SiteMetadata
    }
  }
`;
