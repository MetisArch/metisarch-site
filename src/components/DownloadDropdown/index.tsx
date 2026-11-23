import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ChevronSvg,
  CloseIconBtn,
  CodePre,
  CodeTabBtn,
  CopyBtn,
  IconBadge,
  ItemSub,
  ItemTextCol,
  ItemTitle,
  LicenseLink,
  LicenseNote,
  MenuDivider,
  MenuItemButton,
  MenuItemLink,
  MenuPanel,
  ModalBody,
  ModalCard,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalSubtitle,
  ModalTitle,
  TabGroup,
  TabsBar,
  TriggerBtn,
  Wrapper,
} from './styles'

const RELEASES_URL = 'https://github.com/metisarch/metisarch-app/releases'

const DOCKER_COMPOSE_SNIPPET = `services:
  metisarch:
    image: ghcr.io/metisarch/metisarch-app:latest
    container_name: metisarch-server
    restart: unless-stopped
    ports:
      - "3030:3030"
    environment:
      - METIS_MODE=server
      - METIS_PORT=3030
      - METIS_DATA_DIR=/data
      - METIS_WORKSPACE_DIR=/workspace
      - METIS_LICENSE_KEY=XXXX-XXXX-XXXX-XXXX
    volumes:
      - metis-data:/data
      - ./workspace:/workspace

volumes:
  metis-data:
    driver: local`

const DOCKER_CLI_SNIPPET = `docker run -d \\
  --name metisarch-server \\
  -p 3030:3030 \\
  -e METIS_MODE=server \\
  -e METIS_LICENSE_KEY="XXXX-XXXX-XXXX-XXXX" \\
  -v metis-data:/data \\
  -v $(pwd)/workspace:/workspace \\
  ghcr.io/metisarch/metisarch-app:latest`

interface DownloadDropdownProps {
  label: string
  fullWidth?: boolean
}

export const DownloadDropdown: React.FC<DownloadDropdownProps> = ({ label, fullWidth }) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [dockerModalOpen, setDockerModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'compose' | 'cli'>('compose')
  const [copied, setCopied] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const handleOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [open])

  const snippet = activeTab === 'compose' ? DOCKER_COMPOSE_SNIPPET : DOCKER_CLI_SNIPPET

  const handleCopy = () => {
    void navigator.clipboard.writeText(snippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <Wrapper ref={wrapperRef} style={fullWidth ? { width: '100%' } : undefined}>
        <TriggerBtn
          type="button"
          $open={open}
          $fullWidth={fullWidth}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          <span>{label}</span>
          <ChevronSvg
            $open={open}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </ChevronSvg>
        </TriggerBtn>

        {open && (
          <MenuPanel role="menu">
            <MenuItemLink
              href={RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <IconBadge>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5.5 10.5 4.5v7H3v-6zm0 13 7.5 1v-7H3v6zm8.5 1.15L21 21v-8.5h-9.5v7.15zm0-15.3V11.5H21V3l-9.5 1.35z" />
                </svg>
              </IconBadge>
              <ItemTextCol>
                <ItemTitle>{t('hero.downloadMenu.windows')}</ItemTitle>
                <ItemSub>{t('hero.downloadMenu.windowsSub')}</ItemSub>
              </ItemTextCol>
            </MenuItemLink>

            <MenuItemLink
              href={RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <IconBadge>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.96 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.79-.96 2.84 1.04.08 2.08-.52 2.72-1.3" />
                </svg>
              </IconBadge>
              <ItemTextCol>
                <ItemTitle>{t('hero.downloadMenu.mac')}</ItemTitle>
                <ItemSub>{t('hero.downloadMenu.macSub')}</ItemSub>
              </ItemTextCol>
            </MenuItemLink>

            <MenuItemLink
              href={RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <IconBadge>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" x2="20" y1="19" y2="19" />
                </svg>
              </IconBadge>
              <ItemTextCol>
                <ItemTitle>{t('hero.downloadMenu.linux')}</ItemTitle>
                <ItemSub>{t('hero.downloadMenu.linuxSub')}</ItemSub>
              </ItemTextCol>
            </MenuItemLink>

            <MenuDivider />

            <MenuItemButton
              type="button"
              role="menuitem"
              onClick={() => {
                setOpen(false)
                setDockerModalOpen(true)
              }}
            >
              <IconBadge>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12.5c0-.83-.67-1.5-1.5-1.5-.62 0-1.15.38-1.38.91-.5-.26-1.08-.41-1.72-.41H3c-.55 0-1 .45-1 1 0 3.87 3.13 7 7 7h6c3.31 0 6-2.69 6-6 .55 0 1-.45 1-1Z" />
                  <rect width="3" height="3" x="5" y="8" rx=".5" />
                  <rect width="3" height="3" x="9" y="8" rx=".5" />
                  <rect width="3" height="3" x="13" y="8" rx=".5" />
                  <rect width="3" height="3" x="9" y="4" rx=".5" />
                  <rect width="3" height="3" x="13" y="4" rx=".5" />
                </svg>
              </IconBadge>
              <ItemTextCol>
                <ItemTitle>{t('hero.downloadMenu.docker')}</ItemTitle>
                <ItemSub>{t('hero.downloadMenu.dockerSub')}</ItemSub>
              </ItemTextCol>
            </MenuItemButton>
          </MenuPanel>
        )}
      </Wrapper>

      {dockerModalOpen && (
        <ModalOverlay onClick={() => setDockerModalOpen(false)}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <div>
                <ModalTitle>{t('hero.dockerModal.title')}</ModalTitle>
                <ModalSubtitle>{t('hero.dockerModal.subtitle')}</ModalSubtitle>
              </div>
              <CloseIconBtn
                type="button"
                aria-label={t('hero.dockerModal.closeBtn')}
                onClick={() => setDockerModalOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </CloseIconBtn>
            </ModalHeader>

            <ModalBody>
              <TabsBar>
                <TabGroup>
                  <CodeTabBtn type="button" $active={activeTab === 'compose'} onClick={() => setActiveTab('compose')}>
                    {t('hero.dockerModal.tabCompose')}
                  </CodeTabBtn>
                  <CodeTabBtn type="button" $active={activeTab === 'cli'} onClick={() => setActiveTab('cli')}>
                    {t('hero.dockerModal.tabCli')}
                  </CodeTabBtn>
                </TabGroup>

                <CopyBtn type="button" onClick={handleCopy}>
                  {copied ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#32d583"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{t('hero.dockerModal.copiedBtn')}</span>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                      <span>{t('hero.dockerModal.copyBtn')}</span>
                    </>
                  )}
                </CopyBtn>
              </TabsBar>

              <CodePre>{snippet}</CodePre>
            </ModalBody>

            <ModalFooter>
              <LicenseNote>{t('hero.dockerModal.licenseHint')}</LicenseNote>
              <LicenseLink
                href="https://guilhermehumberto.gumroad.com/l/nzlwhq"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('hero.dockerModal.getLicenseBtn')}
              </LicenseLink>
            </ModalFooter>
          </ModalCard>
        </ModalOverlay>
      )}
    </>
  )
}
