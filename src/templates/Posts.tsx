import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import tw, { styled } from 'twin.macro';
import { GatsbyLayout } from '../components/Layout/GatsbyLayout';
import { Link } from '../components/Link/link';
import { PostExcerpt } from '../components/PostExcerpt/PostExcerpt';
import { SEO } from '../components/Seo/seo';

const Wrapper = styled.div`
    .pagination-controls {
        ${tw`flex flex-row justify-center prose`}
        max-width: 100%;

        div {
            ${tw`px-2`}
        }

        a {
            ${tw`hover:text-gray-400`}
        }
    }
`;

const PostsTemplate = ({
    data,
    pageContext: { nextPagePath, previousPagePath },
}) => {
    const posts = data.allWpPost.nodes;
    if (!posts.length) {
        return <p>There are no posts at this time.</p>;
    }

    return (
        <GatsbyLayout>
            <SEO />
            <Wrapper>
                {posts.map((post, index) => {
                    const title = String(post.title);
                    const date = new Date(post.date);
                    const slug = `/post/${String(post.slug)}`;

                    const excerptContent = parse(post.excerpt);
                    let content;

                    // For the excerpt, only the text content matters
                    if (Array.isArray(excerptContent)) {
                        content = excerptContent[0];
                        if (Array.isArray(content.props.children)) {
                            content.props.children.splice(
                                1,
                                content.props.children.length
                            );
                        }
                    } else {
                        content = excerptContent;
                    }

                    return (
                        <PostExcerpt
                            key={index}
                            slug={slug}
                            title={title}
                            date={date}
                            body={content}
                        />
                    );
                })}
                <div className="pagination-controls">
                    <div>
                        {previousPagePath && (
                            <Link to={previousPagePath} className="hover:cursor-pointer">Previous Page</Link>
                        )}
                    </div>
                    <div>
                        {nextPagePath && (
                            <Link to={nextPagePath} className="hover:cursor-pointer">Next Page</Link>
                        )}
                    </div>
                </div>
            </Wrapper>
        </GatsbyLayout>
    );
};

export default PostsTemplate;

export const pageQuery = graphql`
    query PostsQuery($offset: Int!, $postsPerPage: Int!) {
        allWpPost(
            sort: { fields: [date], order: DESC }
            limit: $postsPerPage
            skip: $offset
        ) {
            nodes {
                excerpt
                slug
                date
                title
            }
        }
    }
`;
