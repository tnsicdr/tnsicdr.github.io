import clsx from 'clsx';
import Link from '../Link/link';

interface ISidebarProps {
  className?: string;
}

const Sidebar = (props: ISidebarProps) => {
  const { className } = props;

  return (
    <aside className={clsx('w-64', className)} aria-label="Sidebar">
      <div className="flex flex-col min-h-full bg-slate-700">
        <ul>
          <li className="p-4 text-slate-300 hover:bg-slate-400 hover:text-slate-600">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
