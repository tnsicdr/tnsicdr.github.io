import { GatsbyLayout } from '../components/Layout/GatsbyLayout';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Feature } from '../components/Feature/Feature';
import parse from 'html-react-parser';
import styled from '@emotion/styled';
import { Typography } from '../components/Typography/Typography';
import { PostExcerpt } from '../components/PostExcerpt/PostExcerpt';

// TODO: Move the layout into a page component; keep this just for setting up the queries

const IndexContainer = styled.div`
    .feature-actions {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        .more-posts {
            font-size: 1.2rem;
        }
    }
`;

const IndexPage = ({ data }) => {
    const posts = data.allWpPost.nodes;

    return (
        <IndexContainer>
            <GatsbyLayout>
                <Typography>
                    <h2>Latest Posts</h2>
                    {posts.map((post, idx) => {
                        const excerptContent = parse(post.excerpt);

                        const title = String(post.title);
                        const date = new Date(post.date);
                        const slug = `/post/${String(post.slug)}`;

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
                                title={title}
                                slug={slug}
                                date={date}
                                body={content}
                            />
                        );
                    })}
                    <div className="feature-actions">
                        <Link className="more-posts" to="/posts">
                            More Posts
                        </Link>
                    </div>
                </Typography>
            </GatsbyLayout>
        </IndexContainer>
    );
};

export const query = graphql`
    query IndexQuery {
        allWpPost(limit: 2) {
            nodes {
                excerpt
                slug
                date
                title
            }
        }
    }
`;

export default IndexPage;
