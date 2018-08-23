Empty state

```jsx
initialState = {value: []}
;<PillInput
  emptyPlaceholder="empty placeholder"
  nonEmptyPlaceholder="Non empty placeholder"
  onChange={v => setState({value: v})}
  separator=","
  validator={() => true}
  value={state.value}
/>
```

Couple pills

```jsx
initialState = {
  value: ['Some input', 'Another input'],
}
;<PillInput
  emptyPlaceholder="empty placeholder"
  nonEmptyPlaceholder="Non empty placeholder"
  onChange={v => setState({value: v})}
  separator=","
  validator={() => true}
  value={state.value}
/>
```

Pills wrapping

```jsx
initialState = {
  value: ['Some input', 'short', 'lenghty input that is long', 'Another Input'],
}
;<Box width={300}>
  <PillInput
    emptyPlaceholder="empty placeholder"
    nonEmptyPlaceholder="Non empty placeholder"
    onChange={v => setState({value: v})}
    separator=","
    validator={() => true}
    value={state.value}
  />
</Box>
```
