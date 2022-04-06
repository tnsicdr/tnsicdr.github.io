import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Link from '../components/Link/link';

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
        slug: string;
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
            <Link to={`/post/${post.frontmatter.slug}`}>
              <h2 className="font-medium text-xl hover:text-slate-400">{post.frontmatter.title}</h2>
            </Link>
            <div className="meta mb-1">
              <div className="meta-date">{post.frontmatter.date}</div>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              {post.excerpt}
            </div>
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
