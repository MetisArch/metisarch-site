import styled from 'styled-components'

export const Grid = styled.div`
  margin-bottom: 3.5rem;
  display: grid;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const Card = styled.div<{ $active: boolean; $alignEnd: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  border: 1px solid ${({ $active }) => ($active ? 'var(--brand-border)' : 'var(--border)')};
  background-color: var(--surface);
  padding: 1.35rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: ${({ $alignEnd }) => ($alignEnd ? 'flex-end' : 'flex-start')};
  box-shadow: ${({ $active }) =>
    $active ? '0 12px 24px -6px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(127, 86, 217, 0.2)' : 'var(--shadow-sm)'};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: var(--brand-border);
    box-shadow:
      0 12px 24px -6px rgba(0, 0, 0, 0.45),
      0 0 0 1px rgba(127, 86, 217, 0.2);
  }

  &:hover .card-bubble-overlay {
    opacity: 1;
  }
`

export const BubbleOverlay = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.25s ease;
`

export const CardContent = styled.div<{ $reverse: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
    text-align: ${({ $reverse }) => ($reverse ? 'right' : 'left')};
  }
`

export const IconCircle = styled.div`
  display: flex;
  width: 2.35rem;
  height: 2.35rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: var(--brand-soft);
  border: 1px solid var(--brand-border);
  color: #b692f6;
`

export const CardTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  color: var(--foreground);
`
