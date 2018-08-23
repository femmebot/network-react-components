```jsx
initialState = {
  value: ['foo', 'baz'],
}
;<CheckboxGroupField
  label="Check some, all, or none"
  onChange={value => setState({value})}
  value={state.value}
  options={['foo', 'bar', 'baz']}
  width={1}
/>
```
