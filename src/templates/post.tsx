import { graphql, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout/Layout';
import Link from '../components/Link/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTags } from '@fortawesome/free-solid-svg-icons';
import { resolvePostUrl } from '../utilities/post/post-url-resolver';
import TagList from '../components/TagList/TagList';

const shortcodes = { Link };

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  mdx: {
    body: string;
    frontmatter: {
      title: string;
      date: Date;
      slug: string;
      tags: Array<string>;
    };
  };
};

const Post = ({ data }: PageProps<DataProps>) => {
  const post = data.mdx;
  return (
    <Layout siteTitle={data.site.siteMetadata.title}>
      <article className="mb-2">
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
        <div className="prose prose-lg prose-slate max-w-none">
          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={post.frontmatter}>
              {post.body}
            </MDXRenderer>
          </MDXProvider>
        </div>
      </article>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query PostQuery($id: String) {
    site {
      ...SiteMetadata
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        slug
        tags
      }
    }
  }
`;
