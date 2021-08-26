import tw, { styled } from 'twin.macro';

interface INavigationHeaderProps {
    siteLogo?: JSX.Element;
    navList?: Array<JSX.Element>;
}

const Wrapper = styled.div`
    nav.desktop {
        span + span {
            ${tw`ml-4`}
        }
    }
`;

export const NavigationHeader = (props: INavigationHeaderProps) => {
    const { siteLogo, navList } = props;
    return (
        <Wrapper className="border-b p-2">
            <div className="container mx-auto flex flex-row justify-between">
                <div>{siteLogo}</div>
                <button className="block md:hidden">
                    button
                </button>
                <nav className="desktop hidden md:block">
                        {navList && navList.map((navItem, index) => (
                            <span key={index}>
                                {navItem}
                            </span>
                        ))}
                </nav>
            </div>
        </Wrapper>
    );
};
