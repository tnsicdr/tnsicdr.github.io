import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '../Link/link';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer className="text-gray-700 bg-white body-font">
            <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
                <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-3 sm:border-gray-200 sm:mt-0">
                    &copy; 2021 tnsi
                </p>
                <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                    <Link
                        to="https://twitter.com/tnsicdr"
                        className="text-gray-400 hover:tect-gray-500"
                    >
                        <span className="sr-only">Twitter</span>
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link
                        to="https://github.com/tnsicdr"
                        className="text-gray-400 hover:tect-gray-500"
                    >
                        <span className="sr-only">GitHub</span>
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </span>
            </div>
        </footer>
    );
};
