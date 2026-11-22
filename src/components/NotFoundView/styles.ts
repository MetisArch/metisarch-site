import Link from 'next/link'
import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background-color: var(--background);
`

export const Code = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  color: var(--foreground);
  letter-spacing: -0.03em;
`

export const Message = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: var(--foreground-muted);
`

export const BackBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: var(--brand);
  color: var(--brand-foreground);
  font-size: 0.85rem;
  font-weight: 600;
  height: 2.4rem;
  padding: 0 1.1rem;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: var(--brand-hover);
  }
`
