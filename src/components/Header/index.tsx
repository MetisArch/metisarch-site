import React from 'react'
import { useTranslation } from 'react-i18next'
import { changeAppLanguage } from '@/i18n'
import { AppLanguage } from '@/i18n/constants'
import {
  BrandLink,
  BrandText,
  DesktopNavItem,
  HeaderBar,
  HeaderMaxWidth,
  HeaderOuter,
  HeaderPadding,
  LangBtn,
  LogoImg,
  Nav,
  NavLinkPrimary,
  NavLinkSecondary,
  NavList,
  VersionPill,
} from './styles'

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation()
  const isPt = i18n.language !== AppLanguage.EnUS

  const toggleLanguage = () => {
    void changeAppLanguage(isPt ? AppLanguage.EnUS : AppLanguage.PtBR)
  }

  return (
    <HeaderOuter>
      <HeaderPadding>
        <HeaderMaxWidth>
          <HeaderBar>
            <BrandLink href="/">
              <LogoImg src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} alt="MetisArch Logo" />
              <BrandText>METISARCH</BrandText>
              <VersionPill>v0.1.2</VersionPill>
            </BrandLink>
            <Nav>
              <NavList>
                <DesktopNavItem>
                  <NavLinkSecondary href="#product">{t('nav.product')}</NavLinkSecondary>
                </DesktopNavItem>
                <DesktopNavItem>
                  <NavLinkSecondary href="#how-it-works">{t('nav.howItWorks')}</NavLinkSecondary>
                </DesktopNavItem>
                <DesktopNavItem>
                  <NavLinkSecondary href="#pricing">{t('nav.pricing')}</NavLinkSecondary>
                </DesktopNavItem>
                <DesktopNavItem>
                  <NavLinkSecondary href="#faq">{t('nav.faq')}</NavLinkSecondary>
                </DesktopNavItem>
                <li>
                  <LangBtn type="button" onClick={toggleLanguage} aria-label="Alternar idioma / Switch language">
                    {t('nav.langSwitch')}
                  </LangBtn>
                </li>
                <li>
                  <NavLinkPrimary href="#pricing">{t('nav.download')}</NavLinkPrimary>
                </li>
              </NavList>
            </Nav>
          </HeaderBar>
        </HeaderMaxWidth>
      </HeaderPadding>
    </HeaderOuter>
  )
}
