import clsx from 'clsx';
import Link from '../Link/link';

interface IAppBarProps {
  className?: string;
  title?: string;
}

const AppBar = (props: IAppBarProps) => {
  const { className, title } = props;
  return (
    <div className={clsx('bg-slate-800 p-4', className)}>
      <Link className="font-medium text-xl text-slate-400" to="/">
        {title}
      </Link>
    </div>
  );
};

export default AppBar;
