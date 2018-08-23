```jsx
const {MenuItem, MenuList} = require('@material-ui/core')
const ContextMenuItem = require('../../../src/components/atoms/ContextMenuItem')
  .default
;<Dropdown
  renderMenu={menuProps => (
    <MenuList role="menu">
      <MenuItem onClick={menuProps.closeMenu}>Do Something</MenuItem>
      <MenuItem onClick={menuProps.closeMenu}>Other Thing</MenuItem>
      <ContextMenuItem onClick={menuProps.closeMenu}>
        third thing, different menu item component
      </ContextMenuItem>
    </MenuList>
  )}
>
  {({showMenu, targetRef}) => (
    <div ref={targetRef}>
      <Button onClick={showMenu}>Dropdown Target</Button>
    </div>
  )}
</Dropdown>
```
