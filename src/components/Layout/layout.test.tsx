import renderer from 'react-test-renderer';
import Layout from './Layout';
import * as Gatsby from 'gatsby';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: 'title',
      description: 'description',
      social: {
        twitter: 'twitter',
        github: 'github',
      }
    },
  },
}));

describe('<Layout />', () => {
  test('renders', () => {
    const tree = renderer.create(<Layout>content</Layout>).toJSON();

    expect(tree).toMatchSnapshot();
  })
})
