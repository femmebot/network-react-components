```jsx
initialState = {
  message: 'Click to fire promise',
}
;<PromiseButton
  onClick={() =>
    new Promise((resolve, reject) => {
      setState({message: 'disabled and waiting on promise....'})
      setTimeout(() => {
        setState({message: 'Click to fire promise'})
        resolve()
      }, 3000)
    })
  }
>
  {state.message}
</PromiseButton>
```
