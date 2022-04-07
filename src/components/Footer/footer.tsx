import clsx from 'clsx';
import Link from '../Link/link';

interface IFooterProps {
  className?: string;
}

const Footer = (props: IFooterProps) => {
  const { className } = props;
  return (
    <footer className={clsx('bg-gray-300', className)}>
      <div className="flex flex-row justify-end px-8 py-4">
        <div className="flex flex-col text-sm">
          <span className="self-end">
            copyright &copy; {new Date().getFullYear()}
          </span>
          <span className="self-end">
            built with{' '}
            <Link className="underline hover:text-gray-500" to="https://www.gatsbyjs.com/">
              gatsbyjs
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
