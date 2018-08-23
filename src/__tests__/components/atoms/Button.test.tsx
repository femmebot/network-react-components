import React from 'react'
import itRenders from '~__tests__/helpers/itRenders'

import Button from '~components/atoms/Button'

itRenders({
  default: () => <Button onClick={jest.fn()}>Content</Button>,
  disabled: () => (
    <Button disabled onClick={jest.fn()}>
      Disabled
    </Button>
  ),
  'as a link': () => (
    <Button disabled href="#">
      Link
    </Button>
  ),
  'submit type': () => <Button type="submit">Submit</Button>,
  wide: () => (
    <Button wide href="#">
      Link
    </Button>
  ),
  'outline variant': () => (
    <Button variant="outline" href="#">
      Link
    </Button>
  ),
  'commit variant': () => <Button variant="commit">Commit</Button>,
})
