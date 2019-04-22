import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'
import 'jest-enzyme'

const serializer: jest.SnapshotSerializerPlugin = createSerializer({
  mode: 'deep',
  noKey: true,
}) as any

expect.addSnapshotSerializer(serializer)

Enzyme.configure({ adapter: new Adapter() })

export { shallow, mount, render }
