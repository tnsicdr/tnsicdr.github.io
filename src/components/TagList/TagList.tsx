import { Fragment } from 'react';
import { resolveTagUrl } from '../../utilities/resolvers/tag-url-resolver';
import Link from '../Link/link';

type TagListProps = {
  tags: Array<string>;
};

const TagList = (props: TagListProps) => {
  const { tags } = props;

  return (
    <span>
      {tags.map((tag, index) => (
        <Fragment key={tag}>
          <Link to={resolveTagUrl(tag)} className="hover:underline">
            #{tag}
          </Link>
          {index !== tags.length - 1 && <span>, </span>}
        </Fragment>
      ))}
    </span>
  );
};

export default TagList;
