import { graphql, Link, useStaticQuery } from 'gatsby';
import { PropsWithChildren } from 'react';
import { NavigationHeader } from '../NavigationHeader/navigationHeader';

interface ILayoutProps {
    siteTitle: JSX.Element;
    navList?: JSX.Element[];
}

export const Layout = (props: PropsWithChildren<ILayoutProps>) => {
    const { children, siteTitle, navList } = props;

    return (
        <div className="flex flex-col w-full h-screen justify-between bg-white">
            <NavigationHeader siteLogo={siteTitle} navList={navList} />
            <main className="mb-auto">
                <div className="container mx-auto p-4">{children}</div>
            </main>
            <footer>
                <div className="container mx-auto p-2">
                    Copyright &copy; {new Date().getFullYear()}
                </div>
            </footer>
        </div>
    );
};
