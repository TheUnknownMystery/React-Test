import renderer from 'react-test-renderer';
import Form from '../../components/form';
import FormDataFixture from '../fixtures/LinkDataFixture';

test('render form with proper data', () => {
  const form = renderer.create(<Form {...FormDataFixture} />);
  expect(form.toJSON()).toMatchSnapshot();
});

test('should render with default props', () => {
  const form = renderer.create(<Form />);
  expect(form.toJSON()).toMatchSnapshot();
});
