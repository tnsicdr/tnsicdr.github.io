import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Link from '../components/Link/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTags } from '@fortawesome/free-solid-svg-icons';
import { resolvePostUrl } from '../utilities/resolvers/post-url-resolver';
import TagList from '../components/TagList/TagList';
import Seo from '../components/Seo/Seo';
import Prism from 'prismjs';
import { useEffect } from 'react';
import parse from 'html-react-parser';

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
      date: Date;
      slug: string;
      tags: Array<string>;
    };
  };
};

const Post = ({ data }: PageProps<DataProps>) => {
  const post = data.markdownRemark;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Seo title={post.frontmatter.title} />
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
            {parse(post.html)}
          </div>
        </article>
      </Layout>
    </>
  );
};

export default Post;

export const query = graphql`
  query PostQuery($id: String) {
    site {
      ...SiteMetadata
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date
        slug
        tags
      }
    }
  }
`;
