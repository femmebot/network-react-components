```jsx
initialState = {
  search: '',
}
;<SearchField
  placeholder="the placeholder..."
  onChange={event => setState({search: event.target.value})}
  reset={() => setState({search: ''})}
  value={state.search}
/>
```
