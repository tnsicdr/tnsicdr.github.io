import clsx from 'clsx';
import Link from '../Link/link';

interface IAppBarProps {
  className?: string;
  title?: string;
}

const AppBar = (props: IAppBarProps) => {
  const { className, title } = props;
  return (
    <div className={clsx('px-8 py-4 w-full border-b border-gray-300', className)}>
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex flex-row justify-between">
          <Link className="font-medium text-xl" to="/">
            {title}
          </Link>
          <nav>
            <ul className="list-none flex flex-row gap-4">
              <li>
                <Link className="hover:underline hover:text-gray-500" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline hover:text-gray-500"
                  to="/posts"
                >
                  Archive
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline hover:text-gray-500"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
