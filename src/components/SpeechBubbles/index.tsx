import React from 'react'
import { useTranslation } from 'react-i18next'
import { AmbientLayer, FloatingToken, GridMesh, RadialGlow, TokenDot } from './styles'

export const SpeechBubbles: React.FC = () => {
  const { t } = useTranslation()

  const tokens = [
    {
      label: t('tokens.t1'),
      color: '#7f56d9',
      anim: 'animate-float-slow',
      style: { left: '5%', top: '13%' },
    },
    {
      label: t('tokens.t2'),
      color: '#12b76a',
      anim: 'animate-float-medium',
      style: { right: '5%', top: '14%' },
    },
    {
      label: t('tokens.t4'),
      color: '#6172f3',
      anim: 'animate-float-slow',
      style: { left: '6%', top: '36%' },
    },
    {
      label: t('tokens.t6'),
      color: '#f79009',
      anim: 'animate-float-fast',
      style: { right: '6%', top: '35%' },
    },
  ]

  return (
    <AmbientLayer aria-hidden="true">
      <GridMesh />
      <RadialGlow />
      {tokens.map((token) => (
        <FloatingToken key={token.label} className={token.anim} style={token.style}>
          <TokenDot $color={token.color} />
          <span>{token.label}</span>
        </FloatingToken>
      ))}
    </AmbientLayer>
  )
}
