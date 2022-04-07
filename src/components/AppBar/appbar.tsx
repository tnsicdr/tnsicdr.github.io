import clsx from 'clsx';
import Link from '../Link/link';

interface IAppBarProps {
  className?: string;
  title?: string;
}

const AppBar = (props: IAppBarProps) => {
  const { className, title } = props;
  return (
    <div className={clsx('bg-gray-200 px-8 py-4', className)}>
      <div className="flex flex-row justify-between">
        <Link className="font-medium text-xl" to="/">
          {title}
        </Link>
        <nav>
          <ul className="list-none flex flex-row gap-4">
            <li>
              <Link className="hover:underline hover:text-gray-500" to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-gray-500" to="/posts">Archive</Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-gray-500" to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AppBar;
