Using Trigger Component

```jsx
<Modal title="My Modal Title" trigger={<Button>Click to Open Modal</Button>}>
  {closeModal => (
    <Flex flexDirection="column">
      <Flex justifyContent="center" mt={16}>
        <Button wide variant="outline" onClick={closeModal}>
          Close
        </Button>
      </Flex>
    </Flex>
  )}
</Modal>
```

Providing custom container

```jsx
const container = ({children}) => (
  <div style={{background: 'pink', padding: '100px'}}>{children}</div>
)
;<Modal
  container={container}
  title="My Modal Title"
  trigger={<Button>Click to Open Modal</Button>}
>
  {() => 'custom container!'}
</Modal>
```

Manually Managing Modal State

```jsx
initialState = {
  open: false,
}
;<div>
  <Button onClick={() => setState({open: true})}>Click to Open Modal</Button>
  <Modal
    title="My Modal Title"
    open={state.open}
    onClose={() => setState({open: false})}
  >
    {closeModal => (
      <Flex flexDirection="column">
        <Flex justifyContent="center" mt={16}>
          <Button wide variant="outline" onClick={closeModal}>
            Close
          </Button>
        </Flex>
      </Flex>
    )}
  </Modal>
</div>
```

Setting max width

```jsx
<Modal
  maxWidth={200}
  title="My Modal Title"
  trigger={<Button>200 wide</Button>}
>
  {closeModal => (
    <Flex flexDirection="column">
      <Flex justifyContent="center" mt={16}>
        <Button wide variant="outline" onClick={closeModal}>
          Close
        </Button>
      </Flex>
    </Flex>
  )}
</Modal>
```
