import Link from '../Link/link';

type TagListProps = {
  tags: Array<string>;
};

const TagList = (props: TagListProps) => {
  const { tags } = props;

  return (
    <span>
      {tags.map((tag, index) => (
        <>
          <Link key={tag} to={`/tags/${tag}`} className="hover:underline">
            {tag}
          </Link>
          {index !== tags.length - 1 && <span>, </span>}
        </>
      ))}
    </span>
  );
};

export default TagList;
