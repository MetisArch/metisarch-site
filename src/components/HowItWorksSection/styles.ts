import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  background-color: var(--background);
  border-top: 1px solid var(--border-soft);
  padding: 3.5rem 0;

  @media (min-width: 640px) {
    padding: 5rem 0;
  }
`

export const Container = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`

export const Eyebrow = styled.p`
  text-align: center;
  font-size: 0.75rem;
  line-height: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #b692f6;
  text-transform: uppercase;
`

export const Heading = styled.h2`
  max-width: 38rem;
  margin: 0.4rem auto 0.75rem;
  text-align: center;
  font-size: 1.55rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--foreground);

  @media (min-width: 640px) {
    font-size: 1.95rem;
  }
`

export const Subheading = styled.p`
  max-width: 38rem;
  margin: 0 auto 2rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--foreground-muted);

  @media (min-width: 768px) {
    font-size: 0.925rem;
  }
`

export const SentencePrompt = styled.div`
  max-width: 52rem;
  margin: 0 auto 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
  font-size: 0.98rem;
  line-height: 1.8;
  color: var(--foreground);

  @media (min-width: 640px) {
    font-size: 1.05rem;
  }
`

export const DropdownBox = styled.div`
  position: relative;
  display: inline-flex;
  user-select: none;
`

export const DropdownTrigger = styled.button<{ $open: boolean }>`
  min-height: 2.15rem;
  max-width: calc(100vw - 3rem);
  padding: 0.25rem 0.7rem;
  border-radius: 6px;
  border: 1px solid ${({ $open }) => ($open ? 'var(--brand)' : 'var(--brand-border)')};
  background: ${({ $open }) => ($open ? 'var(--surface-hover)' : 'var(--surface)')};
  box-shadow: ${({ $open }) => ($open ? '0 0 0 2px rgba(127, 86, 217, 0.25)' : 'var(--shadow-sm)')};
  color: var(--foreground);
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.45rem;
  cursor: pointer;
  outline: none;
  text-align: left;
  transition: all 140ms ease;

  @media (min-width: 640px) {
    font-size: 0.9rem;
  }

  &:hover {
    border-color: var(--brand);
    background: var(--surface-hover);
  }

  &:focus-visible {
    border-color: var(--brand);
    box-shadow: 0 0 0 2px rgba(127, 86, 217, 0.28);
  }
`

export const ChevronSvg = styled.svg<{ $open: boolean }>`
  color: #b692f6;
  flex-shrink: 0;
  transition: transform 150ms ease;
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
`

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: max-content;
  min-width: 220px;
  max-width: min(320px, calc(100vw - 2rem));
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow:
    0 16px 36px -4px rgba(0, 0, 0, 0.65),
    0 0 0 1px rgba(255, 255, 255, 0.03) inset;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const DropdownOption = styled.button<{ $selected: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.65rem;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  border: none;
  background: ${({ $selected }) => ($selected ? 'var(--brand-soft)' : 'transparent')};
  color: ${({ $selected }) => ($selected ? '#d6bbfb' : 'var(--foreground)')};
  font-size: 0.8rem;
  font-weight: ${({ $selected }) => ($selected ? 600 : 500)};
  cursor: pointer;
  text-align: left;
  white-space: normal;
  line-height: 1.35;
  transition: all 120ms ease;

  &:hover {
    background: ${({ $selected }) => ($selected ? 'var(--brand-soft)' : 'var(--surface-hover)')};
    color: #d6bbfb;
  }
`

export const ShortcutsWrap = styled.div`
  max-width: 52rem;
  margin: 0 auto 2rem;
`

export const ShortcutsLabel = styled.p`
  margin-bottom: 0.65rem;
  text-align: center;
  font-size: 0.775rem;
  font-weight: 500;
  color: var(--foreground-muted);
`

export const ShortcutsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.45rem;
`

export const ShortcutBtn = styled.button<{ $active: boolean }>`
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid ${({ $active }) => ($active ? 'var(--brand)' : 'var(--border)')};
  background-color: ${({ $active }) => ($active ? 'var(--brand)' : 'var(--surface)')};
  color: ${({ $active }) => ($active ? 'var(--brand-foreground)' : 'var(--foreground-muted)')};
  padding: 0.35rem 0.75rem;
  font-size: 0.775rem;
  font-weight: 500;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${({ $active }) => ($active ? 'var(--brand)' : 'var(--foreground-subtle)')};
    color: var(--foreground);
  }
`

export const DiagramBoard = styled.div`
  border-radius: 0.85rem;
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 1rem;
  box-shadow: var(--shadow-md);
  overflow: hidden;

  @media (min-width: 640px) {
    padding: 1.75rem;
  }
`

export const BoardTitle = styled.h3`
  max-width: 40rem;
  margin: 0 auto 1.25rem;
  text-align: center;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.35;
  color: var(--foreground);

  @media (min-width: 640px) {
    margin: 0 auto 1.5rem;
    font-size: 1.3rem;
  }
`

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.25rem;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) 17rem;
    gap: 1.35rem;
  }
`

export const SvgCanvasHolder = styled.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
  padding: 0.25rem 0;
`

export const StepDotsList = styled.ol`
  margin-top: 0.65rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.35rem;
`

export const StepDotBtn = styled.button<{ $active: boolean }>`
  cursor: pointer;
  display: flex;
  width: 1.6rem;
  height: 1.6rem;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid ${({ $active }) => ($active ? 'var(--brand)' : 'var(--border)')};
  background-color: ${({ $active }) => ($active ? 'var(--brand)' : 'var(--surface-raised)')};
  color: ${({ $active }) => ($active ? 'var(--brand-foreground)' : 'var(--foreground-muted)')};
  font-size: 0.72rem;
  font-weight: 600;
  transition: all 0.15s ease;
`

export const AsidePanel = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`

export const StepCard = styled.div`
  min-height: 9.25rem;
  border-radius: 0.6rem;
  border: 1px solid var(--border);
  background-color: var(--surface-raised);
  padding: 1.1rem;
`

export const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
`

export const IconButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid var(--border);
  background-color: var(--surface-raised);
  padding: 0.45rem;
  color: var(--foreground-muted);
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    border-color: var(--foreground-subtle);
    color: var(--foreground);
  }

  &:disabled {
    opacity: 0.38;
    cursor: not-allowed;
  }
`

export const PlayButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border-radius: 5px;
  border: 1px solid var(--brand);
  background-color: var(--brand);
  padding: 0.4rem 0.9rem;
  font-size: 0.775rem;
  font-weight: 600;
  color: var(--brand-foreground);
  transition: background-color 0.15s ease;

  &:hover {
    background-color: var(--brand-hover);
  }
`

export const LegendList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.72rem;
  color: var(--foreground-muted);
`

export const TakeawayText = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.975rem;
  font-weight: 600;
  font-style: italic;
  color: var(--foreground);

  @media (min-width: 768px) {
    font-size: 1.05rem;
  }
`
