import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';
import Link from '../Link/link';

interface IAppBarProps {
  className?: string;
  title?: string;
}

const AppBar = (props: IAppBarProps) => {
  const { className, title } = props;

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={clsx('w-full border-b border-gray-300', className)}
    >
      <nav className="mx-auto w-full max-w-4xl">
        <div className="flex flex-row flex-wrap justify-between items-center">
          <Link className="font-medium text-xl pl-8 py-4" to="/">
            {title}
          </Link>
          <button className="md:hidden pr-7 py-4" onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={clsx(!showMenu && 'hidden', "w-full md:w-auto md:block py-4 md:pr-8 border-t border-gray-300")}>
            <ul className="list-none flex flex-col items-center md:flex-row gap-4">
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;
