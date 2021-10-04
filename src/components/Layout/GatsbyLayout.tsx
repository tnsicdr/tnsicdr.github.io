import { graphql, Link, useStaticQuery } from 'gatsby';
import { PropsWithChildren } from 'react';
import { Layout } from './Layout';

interface IGatsbyLayoutProps {}

const titleComponent = (title: string) => {
    return <Link to="/">{title}</Link>;
};

const linkList = [
    {
        to: '/posts/',
        label: 'Posts',
    },
    {
        to: '/page/resources',
        label: 'Resources',
    },
    {
        to: '/page/about',
        label: 'About',
    },
];

export const GatsbyLayout = (props: PropsWithChildren<IGatsbyLayoutProps>) => {
    const { children } = props;

    const data = useStaticQuery(graphql`
        query SiteDataQuery {
            wp {
                generalSettings {
                    description
                    title
                }
            }
        }
    `);

    const siteTitle = data.wp.generalSettings.title;

    return (
        <Layout siteTitle={titleComponent(siteTitle)} headerLinks={linkList}>
            {children}
        </Layout>
    );
};
