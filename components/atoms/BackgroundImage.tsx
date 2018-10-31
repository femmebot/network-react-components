import React from 'react'
import styled from 'styled-components'

interface Props {
  src: string
  className?: string
  repeat?: boolean
}

const backgroundStyles = ({ repeat, src }: Props) => `
  background: url('${src}');
  background-repeat: ${repeat ? 'repeat' : 'no-repeat'};
  background-size: ${repeat ? 'auto' : 'cover'};
  background-position: center;
`

const StyledBackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  ${backgroundStyles};
`
const BackgroundImage = (props: Props) => <StyledBackgroundImage {...props} />

export default BackgroundImage
