import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Link from '../components/Link/link';
import Seo from '../components/Seo/Seo';

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const AboutPage = ({ data }: PageProps<DataProps>) => {
  return (
    <>
      <Seo title="about" />
      <Layout siteTitle={data.site.siteMetadata.title}>
        <h2 className="font-bold text-3xl mb-2">About</h2>
        <section className="mb-4">
          <h3 className="font-bold text-xl">Hello! I'm tensei</h3>
          <p className="mb-2">
            I am a softare developer focused in frontend development with
            JavaScript, TypeScript, and React. I have backend experience with C#
            and .NET, but have preference for NodeJS.
          </p>
          <p>
            I primarily go by 天青, with tensei being one of the easiest to read
            transliterations. Feel free to call me by any reading that makes
            sense to you, I've used tianqing and thanh in the past. I speak
            Japanese and Vietnamese in addition to English.
          </p>
        </section>
        <section className="mb-4">
          <h3 className="font-bold text-xl">code.tnsi</h3>
          <p>
            This site serves as a means for me to share information, as well as
            experiment with frontend technology. There's also a non-zero chance
            that, if I felt something was worth writing about, it's something I
            might be likely to search for again in the future.
          </p>
        </section>
        <section>
          <h3 className="font-bold text-xl">Contact</h3>
          <p>
            The best way to get in contact with me is to send me a mention or
            message on{' '}
            <Link
              className="text-gray-600 hover:underline hover:text-gray-500"
              to="https://twitter.com/tnsicdr"
            >
              twitter@tnsicdr
            </Link>
            !
          </p>
        </section>
      </Layout>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    site {
      ...SiteMetadata
    }
  }
`;
