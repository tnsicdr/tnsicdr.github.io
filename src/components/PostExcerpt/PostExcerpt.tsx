import { Link } from 'gatsby';
import { Typography } from '../Typography/Typography';

interface IPostExcerptProps {
    title: string;
    slug: string;
    date: Date;
    body: string | JSX.Element | JSX.Element[];
}

export const PostExcerpt = (props: IPostExcerptProps) => {
    const { title, slug, body, date } = props;

    return (
        <Typography>
            <article>
                <Link to={slug}>
                    <h2>{title}</h2>
                </Link>
                <h3>
                    {date.toLocaleString([], {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </h3>
                {body}
            </article>
        </Typography>
    );
};
