import Link from 'next/link'
import styled from 'styled-components'

export const HeaderOuter = styled.header`
  position: fixed;
  top: 0.65rem;
  width: 100%;
  z-index: 40;

  @media (min-width: 768px) {
    top: 1.15rem;
  }
`

export const HeaderPadding = styled.div`
  padding: 0 0.75rem;
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
`

export const HeaderMaxWidth = styled.div`
  max-width: 52rem;
  margin: 0 auto;
`

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 2.9rem;
  padding: 0.35rem 0.65rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  background: rgba(16, 19, 27, 0.9);
  backdrop-filter: blur(12px);
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.45),
    0 1px 0 0 rgba(255, 255, 255, 0.03) inset;

  @media (min-width: 640px) {
    height: 3rem;
    padding: 0 0.75rem;
  }
`

export const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-right: 0.5rem;
`

export const LogoImg = styled.img`
  width: 1.45rem;
  height: 1.45rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
`

export const BrandText = styled.span`
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  color: var(--foreground);
`

export const VersionPill = styled.span`
  display: none;
  align-items: center;
  padding: 0.1rem 0.4rem;
  border-radius: 9999px;
  font-family: ${({ theme }) => theme.fontFamily.mono};
  font-size: 0.65rem;
  font-weight: 500;
  color: var(--foreground-muted);
  background: var(--surface-hover);
  border: 1px solid var(--border);

  @media (min-width: 768px) {
    display: inline-flex;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const DesktopNavItem = styled.li`
  display: none;

  @media (min-width: 700px) {
    display: block;
  }
`

export const NavLinkPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: var(--brand);
  border: 1px solid var(--brand);
  color: var(--brand-foreground);
  height: 1.85rem;
  border-radius: 5px;
  padding: 0 0.65rem;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: var(--brand-hover);
  }
`

export const NavLinkSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.775rem;
  font-weight: 500;
  color: var(--foreground-muted);
  height: 1.85rem;
  border-radius: 5px;
  padding: 0 0.55rem;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;

  &:hover {
    background-color: var(--surface-hover);
    color: var(--foreground);
  }
`

export const LangBtn = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1.85rem;
  padding: 0 0.5rem;
  border-radius: 5px;
  border: 1px solid var(--border);
  background: var(--surface-raised);
  color: var(--foreground-muted);
  font-family: ${({ theme }) => theme.fontFamily.mono};
  font-size: 0.68rem;
  font-weight: 600;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;

  &:hover {
    background: var(--surface-hover);
    color: var(--foreground);
  }
`
