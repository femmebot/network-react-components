import * as React from 'react'

import Flex from '~shared-components/atoms/Flex'
import {colors} from '~styles'
import {getContrastRatio} from '../../src/styles/utils'

interface Props {
  color: string
}

const ColorSwatch: React.SFC<Props> = ({color, children}) => (
  <Flex
    p={5}
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    width="200px"
    height="150px"
    style={{
      backgroundColor: color,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.black,
      color:
        getContrastRatio(color, colors.black) < 7 ? colors.white : colors.black,
    }}
  >
    {children}
  </Flex>
)

export default ColorSwatch
