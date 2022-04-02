import clsx from 'clsx';
import Link from '../Link/link';

interface ISidebarProps {
  className?: string;
}

const Sidebar = (props: ISidebarProps) => {
  const { className } = props;

  return (
    <div className={clsx('flex flex-col min-h-full bg-slate-500', className)}>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
