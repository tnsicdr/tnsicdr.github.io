import { PropsWithChildren } from 'react';
import Sidebar from '../Sidebar/sidebar';

interface ILayoutProps {}

const Layout = (props: PropsWithChildren<ILayoutProps>) => {
  const { children } = props;

  return (
    <div className="min-h-screen flex flex-col bg-slate-300">
      <div className="flex flex-row min-h-full">
        <Sidebar className=""></Sidebar>
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
