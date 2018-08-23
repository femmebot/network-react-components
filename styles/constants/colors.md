```jsx
const colors = require('./color.ts')
;<Flex flexWrap="wrap">
  {Object.keys(colors).map(c => {
    const color = colors[c]
    return (
      <ColorSwatch key={c} color={color}>
        <span>{c}</span>
        <span>{color}</span>
      </ColorSwatch>
    )
  })}
</Flex>
```

## Legacy Colors

Colors found in header and footer

```jsx
const colors = require('./legacyColor.ts')
;<Flex flexWrap="wrap">
  {Object.keys(colors).map(c => {
    const color = colors[c]
    return (
      <ColorSwatch key={c} color={color}>
        <span>{c}</span>
        <span>{color}</span>
      </ColorSwatch>
    )
  })}
</Flex>
```

## Creative Qualities Colors

```jsx
const colors = require('./createQualityColor.ts')
;<Flex flexWrap="wrap">
  {Object.keys(colors).map(c => {
    const color = colors[c]
    return (
      <ColorSwatch key={c} color={color}>
        <span>{c}</span>
        <span>{color}</span>
      </ColorSwatch>
    )
  })}
</Flex>
```
