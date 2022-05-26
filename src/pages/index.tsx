import { faCalendar, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/Layout';
import Link from '../components/Link/link';
import Seo from '../components/Seo/Seo';
import TagList from '../components/TagList/TagList';
import { resolvePostUrl } from '../utilities/resolvers/post-url-resolver';

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
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
  const posts = data.allMarkdownRemark.nodes;
  return (
    <>
      <Seo title="index" />
      <Layout siteTitle={data.site.siteMetadata.title}>
        <ul className="list-none space-y-8">
          {posts.map(post => (
            <li key={post.frontmatter.slug}>
              <article>
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
            </li>
          ))}
        </ul>
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
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" }, draft: { eq: false } } }
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
