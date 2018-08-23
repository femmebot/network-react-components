import * as React from 'react'
import {BoxProps} from '~components/atoms/Box'
import Flex from '~components/atoms/Flex'

const Center: React.SFC<BoxProps> = ({children, ...props}) => (
  <Flex alignItems="center" justifyContent="center" {...props}>
    {children}
  </Flex>
)

export default Center
