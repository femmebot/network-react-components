```jsx
const icons = [
  {
    name: 'icon-close',
    Icon: require('../../../assets/images/icon-close.svg').default,
  },
  {
    name: 'icon-link',
    Icon: require('../../../assets/images/icon-link.svg').default,
  },
  {
    name: 'magnifying-glass',
    Icon: require('../../../assets/images/icon-magnifying-glass.svg')
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
