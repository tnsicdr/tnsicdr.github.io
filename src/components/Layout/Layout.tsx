import { PropsWithChildren } from 'react';
import AppBar from '../AppBar/appbar';
import Footer from '../Footer/footer';

interface ILayoutProps {
  siteTitle?: string;
}

const Layout = (props: PropsWithChildren<ILayoutProps>) => {
  const { children, siteTitle } = props;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AppBar title={siteTitle} />
      <div className="grow flex flex-row min-h-full h-full w-full">
        <main className="p-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
