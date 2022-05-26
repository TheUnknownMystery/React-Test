import renderer, { act } from 'react-test-renderer';
import ButtonChange from '../../components/buttonChange';

test('render change button', () => {
  const buttonChange = renderer.create(<ButtonChange text="Change" />);
  act(() => {
    // eslint-disable-next-line testing-library/await-async-query
    buttonChange.root.findByType('button').props.onClick();
  });

  // eslint-disable-next-line testing-library/await-async-query
  expect(buttonChange.root.findByType('button').children[0]).toBe('Change');
  expect(buttonChange.toJSON()).toMatchSnapshot();
});

test('render button with default props', () => {
  const buttonChange = renderer.create(<ButtonChange />);
  act(() => {
    // eslint-disable-next-line testing-library/await-async-query
    buttonChange.root.findByType('button').props.onClick();
  });
  // eslint-disable-next-line testing-library/await-async-query
  expect(buttonChange.root.findByType('button').children[0]).toBe(
    'Changed Text'
  );
  expect(buttonChange.toJSON()).toMatchSnapshot();
});
