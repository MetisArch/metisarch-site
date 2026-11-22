import styled from 'styled-components'

export const WindowFigure = styled.figure`
  overflow: hidden;
  border-radius: 0.65rem;
  border: 1px solid var(--border);
  background-color: var(--surface);
  box-shadow:
    0 24px 48px -12px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.02) inset;
`

export const ChromeBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-bottom: 1px solid var(--border);
  background-color: var(--rail);
  padding: 0.5rem 0.85rem;
`

export const ChromeLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
`

export const ChromeLogo = styled.img`
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  flex-shrink: 0;
`

export const AddressPill = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 4px;
  border: 1px solid var(--border);
  background-color: var(--surface);
  padding: 0.12rem 0.6rem;
  font-family: ${({ theme }) => theme.fontFamily.mono};
  font-size: 0.68rem;
  color: var(--foreground-muted);
`

export const CanvasWrap = styled.div`
  background: radial-gradient(circle at 50% 0%, rgba(127, 86, 217, 0.07) 0%, #0c0e14 75%);
  padding: 1.35rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    padding: 2rem 1.75rem;
  }

  svg {
    width: 100%;
    max-width: 54rem;
    height: auto;
    display: block;
    overflow: visible;
  }
`
