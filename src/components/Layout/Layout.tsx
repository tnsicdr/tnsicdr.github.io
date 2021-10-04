import { graphql, Link, useStaticQuery } from 'gatsby';
import { PropsWithChildren } from 'react';
import { ILink } from '../../interfaces/link';
import { Footer } from '../Footer/footer';
import { NavigationHeader } from '../NavigationHeader/navigationHeader';

interface ILayoutProps {
    siteTitle: JSX.Element;
    headerLinks?: Array<ILink>;
}

export const Layout = (props: PropsWithChildren<ILayoutProps>) => {
    const { children, siteTitle, headerLinks } = props;

    return (
        <div className="flex flex-col w-full h-screen justify-between bg-white">
            <NavigationHeader siteLogo={siteTitle} linkList={headerLinks} />
            <main className="mb-auto">
                <div className="container mx-auto p-4">{children}</div>
            </main>
            <Footer />
        </div>
    );
};
