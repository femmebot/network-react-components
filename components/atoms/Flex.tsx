import * as React from 'react'
import Box, { BoxProps } from '~shared/components/atoms/Box'

const Flex: React.SFC<BoxProps> = ({ children, ...props }) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
)

export default Flex
