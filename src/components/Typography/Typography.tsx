import Prism from 'prismjs';
import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import tw, { styled } from 'twin.macro';

interface ITypographyProps {}

const StyledContainer = styled.div`
    ${tw`prose`}

    max-width: 100%;
`;

/**
 * Apply standard styling to children
 */
export const Typography = (props: PropsWithChildren<ITypographyProps>) => {
    const { children } = props;
    useEffect(() => {
        Prism.highlightAll();
    });

    return <StyledContainer>{children}</StyledContainer>;
};
