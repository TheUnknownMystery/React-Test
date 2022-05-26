import renderer from 'react-test-renderer';
import { LinkDataFixture } from './fixtures/LinkDataFixture';
import CustomLink from '../components/customLink';

test('render react custom link element with props', () => {
  const wrapper = renderer.create(<CustomLink {...LinkDataFixture} />);

  // eslint-disable-next-line testing-library/await-async-query
  const link = wrapper.root.findByProps({ testID: 'custom-link' });

  expect(link.props.href).toBe(LinkDataFixture.link);
  expect(link.children).toEqual([LinkDataFixture.name]);
  expect(wrapper.toJSON()).toMatchSnapshot();
});
