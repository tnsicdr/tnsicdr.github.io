import clsx from 'clsx';
import Link from '../Link/link';

interface ISidebarProps {
  className?: string;
}

const Sidebar = (props: ISidebarProps) => {
  const { className } = props;

  return (
    <aside className={clsx('w-64', className)} aria-label="Sidebar">
      <div className="flex flex-col min-h-full bg-slate-500">
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
