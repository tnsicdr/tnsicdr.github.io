import { PropsWithChildren } from 'react';
import AppBar from '../AppBar/appbar';
import Footer from '../Footer/footer';
import Sidebar from '../Sidebar/sidebar';

interface ILayoutProps {
  siteTitle?: string;
}

const Layout = (props: PropsWithChildren<ILayoutProps>) => {
  const { children, siteTitle } = props;

  return (
    <div className="min-h-screen flex flex-col bg-slate-600">
      <AppBar title={siteTitle} />
      <div className="grow flex flex-row min-h-full h-full w-full">
        <Sidebar className="shrink-0"></Sidebar>
        <main className="p-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
