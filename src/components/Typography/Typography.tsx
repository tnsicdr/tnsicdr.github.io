import Prism from 'prismjs';
import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import tw, { styled } from 'twin.macro';

interface ITypographyProps {}

const StyledContainer = styled.div`
    h1 {
        ${tw`pb-2`}
        font-weight: bold;

        &::before {
            content: '# ';
        }
    }

    h2 {
        ${tw`pb-2`}
        font-weight: bold;

        &::before {
            content: '## ';
        }
    }

    h3 {
        ${tw`pb-2`}
        &::before {
            content: '### ';
        }
    }

    code {
        font-family: 'Source Code Pro', monospace;
    }

    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
        border-radius: 8px;
    }

    a,
    a:visited,
    a:hover {
    }
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
