import styled from 'styled-components'

export const AmbientLayer = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  overflow: hidden;
`

export const GridMesh = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to right, rgba(28, 34, 49, 0.38) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(28, 34, 49, 0.38) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 75% 55% at 50% 28%, #000 25%, transparent 80%);
`

export const RadialGlow = styled.div`
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 740px;
  height: 420px;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(127, 86, 217, 0.15) 0%, rgba(97, 114, 243, 0.05) 45%, transparent 72%);
  filter: blur(28px);
`

export const FloatingToken = styled.div`
  position: absolute;
  display: none;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: rgba(16, 19, 27, 0.78);
  backdrop-filter: blur(6px);
  font-family: ${({ theme }) => theme.fontFamily.mono};
  font-size: 0.68rem;
  color: var(--foreground-muted);
  box-shadow: var(--shadow-sm);

  @media (min-width: 1200px) {
    display: inline-flex;
  }
`

export const TokenDot = styled.span<{ $color: string }>`
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: ${({ $color }) => $color};
  flex-shrink: 0;
`
