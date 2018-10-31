import * as React from 'react'

import SelectField from '~shared/components/molecules/SelectField'
import itRenders from '~shared/test-helpers/itRenders'

const options = [
  { value: 'option1', label: 'Option 1' },
  {
    value: 'option2',
    label: 'Option 2',
  },
  { value: 'option3', label: 'Option 3' },
  {
    value: 'option4',
    label: 'Option 4',
  },
]

describe('single select', () => {
  itRenders({
    unselected: () => (
      <SelectField
        id="id"
        options={options}
        value=""
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    ),
    disabled: () => (
      <SelectField
        id="id"
        options={options}
        disabled
        value=""
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    ),
    'with value': () => (
      <SelectField
        id="id"
        options={options}
        error="Some error"
        value={options[0].value}
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    ),
    placeholder: () => (
      <SelectField
        id="id"
        options={options}
        placeholder="Placeholder"
        value=""
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    ),
    'with label': () => (
      <SelectField
        id="id"
        options={options}
        label="Label"
        value=""
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    ),
    'without underline': () => (
      <SelectField
        id="id"
        options={options}
        value=""
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    ),
    'with error': () => (
      <SelectField
        id="id"
        options={options}
        error="Some error"
        value=""
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    ),
    'with tallLabel': () => (
      <SelectField
        id="id"
        options={options}
        error="Some error"
        value=""
        onChange={jest.fn()}
        onBlur={jest.fn()}
        tallLabel
      />
    ),
  })
})

describe('multiselect', () => {
  itRenders({
    unselected: () => (
      <SelectField
        id="id"
        multiple
        options={options}
        value={[]}
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    ),
    'with single value': () => (
      <SelectField
        id="id"
        multiple
        options={options}
        error="Some error"
        value={[options[0].value]}
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    ),
    'with multiple values': () => (
      <SelectField
        id="id"
        multiple
        options={options}
        error="Some error"
        value={options.map(o => o.value)}
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    ),
    'with label': () => (
      <SelectField
        id="id"
        multiple
        options={options}
        label="Label"
        value={[]}
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    ),
    'without underline': () => (
      <SelectField
        id="id"
        multiple
        options={options}
        value={[]}
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    ),
    disabled: () => (
      <SelectField
        id="id"
        multiple
        options={options}
        disabled
        value={[]}
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    ),
    'with error': () => (
      <SelectField
        id="id"
        multiple
        options={options}
        error="Some error"
        value={[]}
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    ),
  })
})
