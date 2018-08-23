Using Trigger Component

```jsx
const ArchiveIcon = require('../../../assets/images/icon-archive.svg')
  .default
;<React.Fragment>
  <ConfirmationModal
    onConfirmed={done => console.log('Did something') || done()}
    buttonText="Yes, I want to do this"
    trigger={<Button>Show Plain Modal</Button>}
  >
    Are you sure you want to do this?
  </ConfirmationModal>
  <ConfirmationModal
    onConfirmed={done => console.log('Did something') || done()}
    buttonText="Yes, I want to do this"
    icon={ArchiveIcon}
    trigger={<Button>Show Modal with Icon</Button>}
  >
    Are you sure you want to do this?
  </ConfirmationModal>
</React.Fragment>
```

Manually Managing Modal State

```jsx
initialState = {
  open: false,
}
;<div>
  <Button onClick={() => setState({open: true})}>Click to Open Modal</Button>
  <ConfirmationModal
    onConfirmed={done => console.log('Did something') || done()}
    buttonText="Yes, I want to do this"
    open={state.open}
    onClose={() => setState({open: false})}
  >
    Are you sure you want to do this?
  </ConfirmationModal>
</div>
```
