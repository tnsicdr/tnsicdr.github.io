import { faCalendar, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Link from '../components/Link/link';
import TagList from '../components/TagList/TagList';
import { resolvePostUrl } from '../utilities/post/post-url-resolver';

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
        tags: Array<string>;
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
          <article className="mb-2" key={post.frontmatter.slug}>
            <Link to={resolvePostUrl('/posts', post.frontmatter)}>
              <h2 className="font-medium text-2xl hover:text-slate-400">
                {post.frontmatter.title}
              </h2>
            </Link>
            <div className="meta mb-1 flex flex-col md:flex-row gap-x-4">
              <div className="meta-date">
                <FontAwesomeIcon icon={faCalendar} className="mr-1" />
                {post.frontmatter.date}
              </div>
              <div className="meta-tags">
                <FontAwesomeIcon icon={faTags} className="mr-1" />
                <TagList tags={post.frontmatter.tags} />
              </div>
            </div>
            <div className="prose prose-lg max-w-none">{post.excerpt}</div>
          </article>
        ))}
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
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
          tags
        }
        excerpt(pruneLength: 500)
        id
      }
    }
  }
`;
