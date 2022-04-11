import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import Link from '../Link/link';

type FooterProps = {
  className?: string;
};

const Footer = (props: FooterProps) => {
  const { className } = props;

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              github
            }
          }
        }
      }
    `
  );

  const twitter = site.siteMetadata?.social?.twitter;
  const github = site.siteMetadata?.social?.github;

  return (
    <footer className={clsx('border-t border-gray-300', className)}>
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex flex-col md:flex-row md:justify-between px-8 py-4">
          <div className="flex flex-col text-sm">
            <div>
              <ul className="list-none flex flex-row gap-2 text-lg">
                {twitter && (
                  <li>
                    <Link to={`https://twitter.com/${twitter}`}>
                      <FontAwesomeIcon icon={faTwitter} aria-label="twitter" />
                    </Link>
                  </li>
                )}
                {github && (
                  <li>
                    <Link to={`https://github.com/${github}`}>
                      <FontAwesomeIcon icon={faGithub} aria-label="twitter" />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="flex flex-col text-sm">
            <span className="self-end">
              copyright &copy; {new Date().getFullYear()}
            </span>
            <span className="self-end">
              built with{' '}
              <Link
                className="underline hover:text-gray-500"
                to="https://www.gatsbyjs.com/"
              >
                gatsbyjs
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
