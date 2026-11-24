import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  user-select: none;
`

export const TriggerBtn = styled.button<{
  $open: boolean
  $fullWidth?: boolean
}>`
  cursor: pointer;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 5px;
  font-size: 0.8125rem;
  font-weight: 600;
  background-color: ${({ $open }) => ($open ? 'var(--brand-hover)' : 'var(--brand)')};
  border: 1px solid var(--brand);
  color: var(--brand-foreground);
  height: 2.25rem;
  padding: 0 1rem;
  box-shadow: ${({ $open }) => ($open ? '0 0 0 2px rgba(127, 86, 217, 0.35)' : 'var(--shadow-sm)')};
  transition: all 0.15s ease;

  &:hover {
    background-color: var(--brand-hover);
  }
`

export const ChevronSvg = styled.svg<{ $open: boolean }>`
  flex-shrink: 0;
  opacity: 0.9;
  transition: transform 150ms ease;
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
`

export const MenuPanel = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 120;
  width: 270px;
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow:
    0 18px 38px -4px rgba(0, 0, 0, 0.68),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.5rem 0.65rem;
  border-radius: 6px;
  color: var(--foreground);
  text-align: left;
  transition:
    background-color 120ms ease,
    color 120ms ease;

  &:hover {
    background-color: var(--surface-hover);
    color: #d6bbfb;
  }
`

export const MenuItemButton = styled.button`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.5rem 0.65rem;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--foreground);
  text-align: left;
  transition:
    background-color 120ms ease,
    color 120ms ease;

  &:hover {
    background-color: var(--surface-hover);
    color: #d6bbfb;
  }
`

export const MenuDivider = styled.div`
  height: 1px;
  background-color: var(--border);
  margin: 3px 4px;
`

export const IconBadge = styled.span`
  width: 1.85rem;
  height: 1.85rem;
  border-radius: 6px;
  background-color: var(--surface-raised);
  border: 1px solid var(--border);
  color: #b692f6;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const ItemTextCol = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`

export const ItemTitle = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.25;
`

export const ItemSub = styled.span`
  font-size: 0.68rem;
  color: var(--foreground-muted);
  line-height: 1.3;
`

/* DOCKER MODAL */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(8, 10, 14, 0.75);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`

export const ModalCard = styled.div`
  width: 100%;
  max-width: 38rem;
  border-radius: 10px;
  border: 1px solid var(--border);
  background-color: var(--surface);
  box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  text-align: left;
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.15rem 1.35rem 0.9rem;
  border-bottom: 1px solid var(--border);
`

export const ModalTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--foreground);
`

export const ModalSubtitle = styled.p`
  margin-top: 0.3rem;
  font-size: 0.78rem;
  line-height: 1.5;
  color: var(--foreground-muted);
`

export const CloseIconBtn = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  color: var(--foreground-muted);
  padding: 0.25rem;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--surface-hover);
    color: var(--foreground);
  }
`

export const ModalBody = styled.div`
  padding: 1.15rem 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`

export const TabsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

export const TabGroup = styled.div`
  display: inline-flex;
  gap: 0.35rem;
`

export const CodeTabBtn = styled.button<{ $active: boolean }>`
  cursor: pointer;
  height: 1.85rem;
  padding: 0 0.7rem;
  border-radius: 5px;
  border: 1px solid ${({ $active }) => ($active ? 'var(--brand)' : 'var(--border)')};
  background-color: ${({ $active }) => ($active ? 'var(--brand-soft)' : 'var(--surface-raised)')};
  color: ${({ $active }) => ($active ? '#d6bbfb' : 'var(--foreground-muted)')};
  font-family: ${({ theme }) => theme.fontFamily.mono};
  font-size: 0.72rem;
  font-weight: 600;
`

export const CopyBtn = styled.button`
  cursor: pointer;
  height: 1.85rem;
  padding: 0 0.7rem;
  border-radius: 5px;
  border: 1px solid var(--border);
  background-color: var(--surface-raised);
  color: var(--foreground);
  font-size: 0.74rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;

  &:hover {
    background-color: var(--surface-hover);
    border-color: var(--foreground-subtle);
  }
`

export const CodePre = styled.pre`
  margin: 0;
  padding: 0.95rem 1rem;
  border-radius: 7px;
  border: 1px solid var(--border);
  background-color: var(--rail);
  color: var(--foreground);
  font-family: ${({ theme }) => theme.fontFamily.mono};
  font-size: 0.74rem;
  line-height: 1.55;
  overflow-x: auto;
`

export const ModalFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.85rem 1.35rem;
  background-color: var(--rail);
  border-top: 1px solid var(--border);
`

export const LicenseNote = styled.span`
  font-size: 0.74rem;
  color: var(--foreground-muted);
`

export const LicenseLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1.95rem;
  padding: 0 0.8rem;
  border-radius: 5px;
  background-color: var(--brand);
  color: var(--brand-foreground);
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;

  &:hover {
    background-color: var(--brand-hover);
  }
`
