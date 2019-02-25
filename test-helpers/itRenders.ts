import 'jest-styled-components';
import forEach from 'lodash/forEach';
import renderer from 'react-test-renderer';

export const expectSnapshotMatches = (node: JSX.Element) => {
  const tree = renderer.create(node).toJSON();
  expect(tree).toMatchSnapshot();
};

const makeSpec = (title: string, example: Example) => {
  it(title, () => {
    const tree = renderer.create(example()).toJSON();
    expect(tree).toMatchSnapshot();
  });
};

type Example = () => JSX.Element;
type Examples = { [when: string]: Example } | Example;

const itRenders = (examples: Examples) => {
  if (typeof examples === 'function') {
    makeSpec('renders', examples);
  } else {
    forEach(examples, (example, when) => makeSpec(`renders ${when}`, example));
  }
};

export default itRenders;
