import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout/Layout';

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMdx: {
    nodes: Array<{
      frontmatter: {
        title: string;
        date: Date;
      };
      excerpt: string;
    }>;
  };
};

const IndexPage = ({ data }: PageProps<DataProps>) => {
  const posts = data.allMdx.nodes;
  return (
    <>
      <Layout siteTitle={data.site.siteMetadata.title}>
        {posts.map(post => (
          <article className="mb-2">
            <h2 className="font-medium text-xl">{post.frontmatter.title}</h2>
            <div className="meta">
              <div className="meta-date">{post.frontmatter.date}</div>
            </div>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query PostsQuery {
    site {
      ...SiteMetadata
    }
    allMdx(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          date
          slug
        }
        excerpt(pruneLength: 500)
        id
      }
    }
  }
`;
