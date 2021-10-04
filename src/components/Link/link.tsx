import { HTMLProps, PropsWithChildren } from 'react';
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';

interface ILinkProps {
    to: string;
    activeClassName?: string;
    partiallyActive?: boolean;
    className?: string;
}

export const Link = (props: PropsWithChildren<ILinkProps>) => {
    const { to, activeClassName, partiallyActive, children, ...other } = props;

    const internal = /^\/(?!\/)/.test(to);

    if (internal) {
        return (
            <GatsbyLink
                to={to}
                activeClassName={activeClassName}
                partiallyActive={partiallyActive}
                {...other}
            >
                {children}
            </GatsbyLink>
        );
    }
    return (
        <a href={to} {...other}>
            {children}
        </a>
    );
};
