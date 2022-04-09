import Link from "../Link/link";

type TagListProps = {
  tags: Array<string>;
};

const TagList = (props: TagListProps) => {
  const { tags } = props;

  return (
    <ul className="list-none inline-flex flex-row">
      {tags.map((tag, index) => (
        <li key={tag}>
          <Link to={`/tags/${tag}`} className="hover:underline">{tag}</Link>
          {index !== tags.length - 1 && <span className="mr-1">{`,`}</span>}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
