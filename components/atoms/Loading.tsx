import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'
import Grid from '@material-ui/core/Grid'
import * as React from 'react'

const Loading: React.SFC<{color?: 'inherit' | 'primary'}> = ({
  color = 'primary',
}) => (
  <Grid container justify="center" alignItems="center">
    <CircularProgress color={color} />
  </Grid>
)

export default Loading
