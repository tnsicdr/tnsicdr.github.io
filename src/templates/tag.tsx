import { faCalendar, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Link from '../components/Link/link';
import Seo from '../components/Seo/Seo';
import TagList from '../components/TagList/TagList';
import { resolvePostUrl } from '../utilities/resolvers/post-url-resolver';
import { resolveTagUrl } from '../utilities/resolvers/tag-url-resolver';

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

type Context = {
  tag: string;
};

const TagPage = ({ data, pageContext }: PageProps<DataProps>) => {
  const posts = data.allMarkdownRemark.nodes;
  const tag = (pageContext as Context).tag;
  return (
    <>
      <Seo title={tag} />
      <Layout siteTitle={data.site.siteMetadata.title}>
        <h2 className="mb-4 font-bold text-3xl">
          Tag:{' '}
          <Link to={resolveTagUrl(tag)} className="text-gray-700">
            {tag}
          </Link>
        </h2>
        <ul className="list-none space-y-8">
          {posts.map(post => (
            <li key={post.frontmatter.slug}>
              <article>
                <Link to={resolvePostUrl('/posts', post.frontmatter)}>
                  <h3 className="font-medium text-2xl hover:text-slate-400">
                    {post.frontmatter.title}
                  </h3>
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

export default TagPage;

export const query = graphql`
  query TagQuery($tag: String) {
    site {
      ...SiteMetadata
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] }, type: { eq: "post" }, draft: { eq: false } } }
    ) {
      nodes {
        frontmatter {
          title
          tags
          slug
          date
        }
        excerpt
      }
    }
  }
`;
