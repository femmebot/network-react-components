import {Paper} from '@material-ui/core'
import * as React from 'react'
import Box from '~shared-components/atoms/Box'
import Typography from '~shared-components/atoms/Typography'

export interface Props {
  title?: string
  header?: React.ReactType
}

const Section: React.SFC<Props> = ({title, header: Header, children}) => (
  <Box mt={30}>
    <Paper>
      <Box p={30}>
        <Box mb={40}>
          {title && <Typography variant="heading-2">{title}</Typography>}
          {Header && <Header />}
        </Box>
        {children}
      </Box>
    </Paper>
  </Box>
)

export default Section
