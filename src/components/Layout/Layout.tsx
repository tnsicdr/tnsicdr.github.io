import { PropsWithChildren } from 'react';
import AppBar from '../AppBar/appbar';
import Sidebar from '../Sidebar/sidebar';

interface ILayoutProps {}

const Layout = (props: PropsWithChildren<ILayoutProps>) => {
  const { children } = props;

  return (
    <div className="min-h-screen flex flex-col bg-slate-300">
      <AppBar />
      <div className="flex flex-row min-h-full h-full w-full">
        <Sidebar className="shrink-0"></Sidebar>
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
