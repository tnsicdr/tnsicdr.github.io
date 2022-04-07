import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout/Layout';

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const AboutPage = ({ data }: PageProps<DataProps>) => {
  return (
    <>
      <Layout siteTitle={data.site.siteMetadata.title}>
      </Layout>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    site {
      ...SiteMetadata
    }
  }
`;
