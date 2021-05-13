import React from 'react'
import styled from 'styled-components'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon = styled.div<SvgProps>`
  height: ${(props) => (props.height ? props.height : '38px')};
  width: ${(props) => (props.width ? props.width : '38px')};
  background: url(/images/logo.svg) no-repeat center;
  background-size: cover;
`

export default Icon
