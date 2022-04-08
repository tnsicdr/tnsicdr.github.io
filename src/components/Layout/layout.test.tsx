import renderer from 'react-test-renderer';
import Layout from './Layout';


describe('<Layout />', () => {
  test('renders', () => {
    const tree = renderer.create(<Layout>content</Layout>).toJSON();

    expect(tree).toMatchSnapshot();
  })
})
