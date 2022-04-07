import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout/Layout';

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
