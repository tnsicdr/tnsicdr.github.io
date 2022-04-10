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

const PostsPage = ({ data }: PageProps<DataProps>) => {
  return (
    <>
      <Seo title="archive" />
      <Layout siteTitle={data.site.siteMetadata.title}>
      </Layout>
    </>
  );
};

export default PostsPage;

export const query = graphql`
  query PostsQuery {
    site {
      ...SiteMetadata
    }
  }
`;
