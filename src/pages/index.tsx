import { GatsbyLayout } from '../components/Layout/GatsbyLayout';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Feature } from '../components/Feature/Feature';
import parse from 'html-react-parser';
import styled from '@emotion/styled';
import { Typography } from '../components/Typography/Typography';
import { PostExcerpt } from '../components/PostExcerpt/PostExcerpt';

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
    const post = data.allWpPost.nodes[0];
    
    const excerptContent = parse(post.excerpt);

    const title = String(post.title);
    const date = new Date(post.date);
    const slug = `/post/${String(post.slug)}`;

    let content;

    // For the excerpt, only the text content matters
    if (Array.isArray(excerptContent)) {
        content = excerptContent[0];
        if (Array.isArray(content.props.children)) {
            content.props.children.splice(1, content.props.children.length);
        }
    } else {
        content = excerptContent;
    }

    return (
        <IndexContainer>
            <GatsbyLayout>
                <Typography>
                    <h2>Latest Post</h2>
                    <PostExcerpt
                        title={title}
                        slug={slug}
                        date={date}
                        body={content}
                    />
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
        allWpPost(limit: 1) {
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
