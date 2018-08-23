Single Select

```jsx
initialState = {
  value: '',
}

const options = [
  {value: 'option1', label: 'Option 1'},
  {
    value: 'option2',
    label: 'Option 2',
  },
  {value: 'option3', label: 'Option 3'},
  {
    value: 'option4',
    label: 'Option 4',
  },
]
;<Flex flexDirection="column">
  <Box mb={16}>
    <strong>Value:</strong> {JSON.stringify(state.value)}
  </Box>
  <Flex justifyContent="space-between">
    <SelectField
      value={state.value}
      options={options}
      onChange={event => setState({value: event.target.value})}
    />

    <SelectField
      label="With Label"
      id="single-label"
      value={state.value}
      options={options}
      onChange={event => setState({value: event.target.value})}
    />

    <SelectField
      placeholder="Placeholder!!"
      value={state.value}
      options={options}
      onChange={event => setState({value: event.target.value})}
    />

    <SelectField
      value={state.value}
      options={options}
      onChange={event => setState({value: event.target.value})}
    />

    <SelectField
      error="Some error"
      value={state.value}
      options={options}
      onChange={event => setState({value: event.target.value})}
    />

    <SelectField
      value={state.value}
      disabled
      options={options}
      onChange={event => setState({value: event.target.value})}
    />
  </Flex>
</Flex>
```

Multiselect

```jsx
initialState = {
  value: [],
}

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']
;<Flex flexDirection="column">
  <Box mb={16}>
    <strong>Value:</strong> {JSON.stringify(state.value)}
  </Box>
  <Flex justifyContent="space-between">
    <SelectField
      multiple
      placeholder="with placeholder..."
      value={state.value}
      options={options}
      onChange={event => setState({value: event.target.value})}
    />

    <SelectField
      multiple
      label="With Label"
      id="multiple-label"
      value={state.value}
      options={options}
      onChange={event => setState({value: event.target.value})}
    />

    <SelectField
      multiple
      value={state.value}
      options={options}
      onChange={event => setState({value: event.target.value})}
    />

    <SelectField
      error="Some error"
      multiple
      value={state.value}
      options={options}
      onChange={event => setState({value: event.target.value})}
    />

    <SelectField
      disabled
      multiple
      value={state.value}
      options={options}
      onChange={event => setState({value: event.target.value})}
    />
  </Flex>
</Flex>
```
