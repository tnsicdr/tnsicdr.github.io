import clsx from 'clsx';
import Link from '../Link/link';

interface IFooterProps {
  className?: string;
}

const Footer = (props: IFooterProps) => {
  const { className } = props;
  return (
    <footer className={clsx('bg-slate-800', className)}>
      <div className="flex flex-row justify-end p-4">
        <div className="flex flex-col text-slate-400">
          <span className="self-end">
            copyright &copy; {new Date().getFullYear()}
          </span>
          <span className="self-end">
            built with{' '}
            <Link className="text-slate-200 hover:underline" to="https://www.gatsbyjs.com/">
              gatsbyjs
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
