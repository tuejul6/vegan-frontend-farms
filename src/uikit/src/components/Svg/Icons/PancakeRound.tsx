import React from 'react'
import styled from 'styled-components'
import { SvgProps } from '../types'

const Icon = styled.div<SvgProps>`
  height: 24px;
  width: 24px;
  margin-right: 8px;
  background: url(/images/logo-round.svg) no-repeat center;
  background-size: cover;
`

export default Icon
