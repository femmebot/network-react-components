```jsx
const icons = [
  {
    name: 'icon-close',
    Icon: require('../../images/icon-close.svg').default,
  },
  {
    name: 'icon-link',
    Icon: require('../../images/icon-link.svg').default,
  },
  {
    name: 'magnifying-glass',
    Icon: require('../../images/icon-magnifying-glass.svg')
      .default,
  },
]
;<React.Fragment>
  {icons.map(({name, Icon}) => {
    return (
      <IconButton key={name}>
        <Icon width="16px" height="16px" />
      </IconButton>
    )
  })}
</React.Fragment>
```
