import React from 'react'
import styled from 'styled-components'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

interface LogoProps extends SvgProps {
  isDark: boolean
}

const Logo = styled.div`
  height: 38px;
  background: url(/images/logo-wide.svg) no-repeat center;
  background-size: cover;
`

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark)
