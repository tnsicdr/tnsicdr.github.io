import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tw, { styled } from 'twin.macro';
import { ILink } from '../../interfaces/link';
import { Link } from '../Link/link';

interface INavigationHeaderProps {
    siteLogo?: JSX.Element;
    linkList?: Array<ILink>;
}

const Wrapper = styled.div`
    nav.desktop {
        span + span {
            ${tw`ml-4`}
        }
    }
`;

export const NavigationHeader = (props: INavigationHeaderProps) => {
    const { siteLogo, linkList } = props;
    return (
        <Wrapper className="border-b p-2">
            <div className="container mx-auto flex flex-row justify-between">
                <div>{siteLogo}</div>
                <nav className="desktop md:block">
                    {linkList &&
                        linkList.map((link, index) => (
                            <span key={index}>
                                <Link to={link.to}>{link.label}</Link>
                            </span>
                        ))}
                </nav>
            </div>
        </Wrapper>
    );
};
