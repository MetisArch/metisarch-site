import React, { useMemo, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Header } from '@/components/Header'
import { SpeechBubbles } from '@/components/SpeechBubbles'
import { AppWindow, ScreenVariant } from '@/components/AppWindow'
import { AutoHoverCards, AutoHoverCardItem } from '@/components/AutoHoverCards'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { DownloadDropdown } from '@/components/DownloadDropdown'
import {
  AltSection,
  BadgeDot,
  BadgeWrap,
  BaseSection,
  CalloutCard,
  CalloutCardHeader,
  CalloutGrid,
  CalloutList,
  CalloutListItem,
  CalloutSection,
  FaqCard,
  FaqDd,
  FaqDt,
  FaqGrid,
  FeatureItem,
  FeatureList,
  FooterInner,
  FooterOuter,
  HeroActions,
  HeroBadge,
  HeroContainer,
  HeroH1,
  HeroH2,
  HeroInner,
  HeroLead,
  HeroOuter,
  ItalicQuote,
  Main,
  PageWrapper,
  PricingCard,
  PricingGrid,
  PrimaryBtn,
  SecondaryBtn,
  SectionContainer,
  SectionCopy,
  SectionEyebrow,
  SectionTitle,
  TabButton,
  TabCaption,
  TabList,
  WindowContainer,
} from './styles'

const TAB_KEYS: ScreenVariant[] = ['workspaces', 'playground', 'compliance', 'decisions', 'indexes']

const FAQ_BGS = [
  'bubble-bg-0',
  'bubble-bg-1',
  'bubble-bg-2',
  'bubble-bg-3',
  'bubble-bg-4',
  'bubble-bg-5',
  'bubble-bg-0',
  'bubble-bg-1',
  'bubble-bg-2',
]

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginTop: '0.12rem', flexShrink: 0, color: '#b692f6' }}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const HomeView: React.FC = () => {
  const { t } = useTranslation()
  const [activeProductTab, setActiveProductTab] = useState<ScreenVariant>('workspaces')

  const problemCards: AutoHoverCardItem[] = useMemo(
    () => [
      {
        title: t('problem.cards.c1'),
        backgroundClassName: 'bubble-bg-5',
        icon: (
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
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="m14 14-4 4" />
            <path d="m10 14 4 4" />
          </svg>
        ),
      },
      {
        title: t('problem.cards.c2'),
        backgroundClassName: 'bubble-bg-4',
        icon: (
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
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          </svg>
        ),
      },
      {
        title: t('problem.cards.c3'),
        backgroundClassName: 'bubble-bg-3',
        icon: (
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
            <path d="M5 22h14" />
            <path d="M5 2h14" />
            <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
            <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
          </svg>
        ),
      },
      {
        title: t('problem.cards.c4'),
        backgroundClassName: 'bubble-bg-2',
        icon: (
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
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" x2="12.01" y1="17" y2="17" />
          </svg>
        ),
      },
    ],
    [t]
  )

  const faqItems = t('faq.items', { returnObjects: true }) as {
    q: string
    a: string
  }[]

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          name: 'MetisArch',
          url: 'https://metisarch.com',
          image: 'https://metisarch.com/logo.png',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Windows, macOS, Linux, Docker',
          description: t('meta.description'),
          offers: [
            {
              '@type': 'Offer',
              name: t('pricing.free.name'),
              price: '0',
              priceCurrency: 'USD',
              description: t('pricing.free.desc'),
            },
            {
              '@type': 'Offer',
              name: t('pricing.pro.name'),
              url: 'https://guilhermehumberto.gumroad.com/l/nzlwhq',
              description: t('pricing.pro.desc'),
            },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: Array.isArray(faqItems)
            ? faqItems.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.a,
                },
              }))
            : [],
        },
      ],
    }),
    [t, faqItems]
  )

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <meta name="author" content="MetisArch" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://metisarch.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MetisArch" />
        <meta property="og:url" content="https://metisarch.com/" />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="https://metisarch.com/logo.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content={t('meta.ogImageAlt')} />
        <meta property="og:locale" content={t('meta.locale')} />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="pt_BR" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.title')} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image" content="https://metisarch.com/logo.png" />
        <meta name="twitter:image:alt" content={t('meta.ogImageAlt')} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data (JSON-LD: SoftwareApplication + FAQPage) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <PageWrapper>
        <Header />

        <Main>
          {/* 1. HERO SECTION */}
          <HeroOuter>
            <SpeechBubbles />
            <HeroInner>
              <HeroContainer>
                <BadgeWrap>
                  <HeroBadge>
                    <BadgeDot />
                    {t('hero.badge')}
                  </HeroBadge>
                </BadgeWrap>

                <HeroH1>{t('hero.title')}</HeroH1>
                <HeroH2>{t('hero.subtitle')}</HeroH2>
                <HeroLead>{t('hero.lead')}</HeroLead>

                <HeroActions>
                  <DownloadDropdown label={t('hero.primaryCta')} />
                  <SecondaryBtn href="#pricing">{t('hero.secondaryCta')}</SecondaryBtn>
                </HeroActions>
              </HeroContainer>

              <WindowContainer>
                <AppWindow address={t('hero.windowAddress')} variant="hero" />
              </WindowContainer>
            </HeroInner>
          </HeroOuter>

          {/* 2. THE PROBLEM SECTION */}
          <AltSection>
            <SectionContainer>
              <SectionEyebrow>{t('problem.eyebrow')}</SectionEyebrow>
              <SectionTitle>{t('problem.title')}</SectionTitle>
              <SectionCopy>
                <p>{t('problem.p1')}</p>
                <p>{t('problem.p2')}</p>
                <p style={{ color: 'var(--foreground)', fontWeight: 500 }}>{t('problem.p3')}</p>
              </SectionCopy>

              <AutoHoverCards cards={problemCards} alternate />

              <ItalicQuote>{t('problem.quote')}</ItalicQuote>
            </SectionContainer>
          </AltSection>

          {/* 3. THE PRODUCT SECTION */}
          <BaseSection id="product">
            <SectionContainer $maxWidth="66rem">
              <SectionEyebrow>{t('product.eyebrow')}</SectionEyebrow>
              <SectionTitle>{t('product.title')}</SectionTitle>
              <SectionCopy style={{ marginBottom: '2rem' }}>
                <p>{t('product.subtitle')}</p>
              </SectionCopy>

              <TabList role="tablist" aria-label={t('product.eyebrow')}>
                {TAB_KEYS.map((tabId) => (
                  <TabButton
                    key={tabId}
                    type="button"
                    role="tab"
                    aria-selected={tabId === activeProductTab}
                    $active={tabId === activeProductTab}
                    onClick={() => setActiveProductTab(tabId)}
                  >
                    {t(`product.tabs.${tabId}.label`)}
                  </TabButton>
                ))}
              </TabList>

              <TabCaption aria-live="polite">{t(`product.tabs.${activeProductTab}.caption`)}</TabCaption>

              <div role="tabpanel">
                <AppWindow address={t(`product.tabs.${activeProductTab}.address`)} variant={activeProductTab} />
              </div>
            </SectionContainer>
          </BaseSection>

          {/* 4. HOW IT WORKS */}
          <HowItWorksSection />

          {/* 5. CALLOUT SECTION */}
          <CalloutSection>
            <CalloutGrid>
              <div>
                <p
                  style={{
                    fontSize: '0.75rem',
                    lineHeight: '1.4rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: '#b692f6',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('callout.eyebrow')}
                </p>
                <h2
                  style={{
                    marginTop: '0.4rem',
                    marginBottom: '0.85rem',
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                  }}
                >
                  {t('callout.title')}
                </h2>
                <p
                  style={{
                    fontSize: '0.89rem',
                    lineHeight: 1.65,
                    color: 'var(--foreground-muted)',
                  }}
                >
                  {t('callout.body')}
                </p>
              </div>

              <CalloutCard>
                <CalloutCardHeader>
                  <span>{t('callout.cardHeader')}</span>
                  <span style={{ color: '#32d583' }}>{t('callout.cardStatus')}</span>
                </CalloutCardHeader>
                <CalloutList>
                  <CalloutListItem>
                    <span>{t('callout.row1Left')}</span>
                    <span
                      style={{
                        color: 'var(--foreground-muted)',
                        fontSize: '0.76rem',
                      }}
                    >
                      {t('callout.row1Right')}
                    </span>
                  </CalloutListItem>
                  <CalloutListItem>
                    <span>{t('callout.row2Left')}</span>
                    <span
                      style={{
                        color: 'var(--foreground-muted)',
                        fontSize: '0.76rem',
                      }}
                    >
                      {t('callout.row2Right')}
                    </span>
                  </CalloutListItem>
                  <CalloutListItem $highlight>
                    <span>{t('callout.row3Left')}</span>
                    <span style={{ color: '#b692f6', fontSize: '0.76rem' }}>{t('callout.row3Right')}</span>
                  </CalloutListItem>
                </CalloutList>
              </CalloutCard>
            </CalloutGrid>
          </CalloutSection>

          {/* 6. PRICING SECTION */}
          <BaseSection id="pricing">
            <SectionContainer $maxWidth="66rem">
              <SectionEyebrow>{t('pricing.eyebrow')}</SectionEyebrow>
              <SectionTitle>{t('pricing.title')}</SectionTitle>
              <SectionCopy style={{ marginBottom: '2.5rem' }}>
                <p>{t('pricing.subtitle')}</p>
              </SectionCopy>

              <PricingGrid>
                {/* Plano Básico */}
                <PricingCard>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--foreground)',
                      }}
                    >
                      {t('pricing.free.name')}
                    </h3>
                    <span
                      style={{
                        backgroundColor: 'var(--surface-hover)',
                        border: '1px solid var(--border)',
                        borderRadius: '9999px',
                        padding: '0.18rem 0.6rem',
                        fontSize: '0.66rem',
                        fontWeight: 600,
                        color: 'var(--foreground-muted)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t('pricing.free.badge')}
                    </span>
                  </div>

                  <div>
                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.45rem',
                      }}
                    >
                      <span
                        className="font-cal"
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: 600,
                          color: 'var(--foreground)',
                        }}
                      >
                        {t('pricing.free.price')}
                      </span>
                      <span
                        style={{
                          color: 'var(--foreground-muted)',
                          fontSize: '0.8rem',
                        }}
                      >
                        {t('pricing.free.period')}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: '0.45rem',
                        fontSize: '0.82rem',
                        lineHeight: 1.55,
                        color: 'var(--foreground-muted)',
                      }}
                    >
                      {t('pricing.free.desc')}
                    </p>
                  </div>

                  <FeatureList>
                    <FeatureItem>
                      <CheckIcon />
                      <span>{t('pricing.free.f1')}</span>
                    </FeatureItem>
                    <FeatureItem>
                      <CheckIcon />
                      <span>{t('pricing.free.f2')}</span>
                    </FeatureItem>
                    <FeatureItem>
                      <CheckIcon />
                      <span>{t('pricing.free.f3')}</span>
                    </FeatureItem>
                    <FeatureItem>
                      <CheckIcon />
                      <span>{t('pricing.free.f4')}</span>
                    </FeatureItem>
                    <FeatureItem>
                      <CheckIcon />
                      <span>{t('pricing.free.f5')}</span>
                    </FeatureItem>
                  </FeatureList>

                  <div style={{ marginTop: 'auto' }}>
                    <DownloadDropdown label={t('pricing.free.cta')} fullWidth />
                  </div>
                </PricingCard>

                {/* Plano Profissional */}
                <PricingCard $featured>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--foreground)',
                      }}
                    >
                      {t('pricing.pro.name')}
                    </h3>
                    <span
                      style={{
                        backgroundColor: 'var(--brand-soft)',
                        border: '1px solid var(--brand-border)',
                        borderRadius: '9999px',
                        padding: '0.18rem 0.6rem',
                        fontSize: '0.66rem',
                        fontWeight: 600,
                        color: '#b692f6',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t('pricing.pro.badge')}
                    </span>
                  </div>

                  <div>
                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.45rem',
                      }}
                    >
                      <span
                        className="font-cal"
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: 600,
                          color: 'var(--foreground)',
                        }}
                      >
                        {t('pricing.pro.price')}
                      </span>
                      <span
                        style={{
                          color: 'var(--foreground-muted)',
                          fontSize: '0.8rem',
                        }}
                      >
                        {t('pricing.pro.period')}
                      </span>
                    </p>
                    <p
                      style={{
                        marginTop: '0.45rem',
                        fontSize: '0.82rem',
                        lineHeight: 1.55,
                        color: 'var(--foreground-muted)',
                      }}
                    >
                      {t('pricing.pro.desc')}
                    </p>
                  </div>

                  <FeatureList>
                    <FeatureItem>
                      <CheckIcon />
                      <span>{t('pricing.pro.f1')}</span>
                    </FeatureItem>
                    <FeatureItem>
                      <CheckIcon />
                      <span>{t('pricing.pro.f2')}</span>
                    </FeatureItem>
                    <FeatureItem>
                      <CheckIcon />
                      <span>{t('pricing.pro.f3')}</span>
                    </FeatureItem>
                    <FeatureItem>
                      <CheckIcon />
                      <span>{t('pricing.pro.f4')}</span>
                    </FeatureItem>
                    <FeatureItem>
                      <CheckIcon />
                      <span>{t('pricing.pro.f5')}</span>
                    </FeatureItem>
                  </FeatureList>

                  <PrimaryBtn
                    href="https://guilhermehumberto.gumroad.com/l/nzlwhq"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 'auto' }}
                  >
                    {t('pricing.pro.cta')}
                  </PrimaryBtn>
                </PricingCard>
              </PricingGrid>
            </SectionContainer>
          </BaseSection>

          {/* 7. FAQ SECTION */}
          <AltSection id="faq">
            <SectionContainer>
              <SectionEyebrow>{t('faq.eyebrow')}</SectionEyebrow>
              <SectionTitle>{t('faq.title')}</SectionTitle>

              <FaqGrid>
                {Array.isArray(faqItems) &&
                  faqItems.map((item, idx) => (
                    <FaqCard key={item.q} className={FAQ_BGS[idx % FAQ_BGS.length]}>
                      <FaqDt>{item.q}</FaqDt>
                      <FaqDd>{item.a}</FaqDd>
                    </FaqCard>
                  ))}
              </FaqGrid>
            </SectionContainer>
          </AltSection>
        </Main>

        {/* 8. FOOTER */}
        <FooterOuter className="bubble-color-gradient">
          <FooterInner>
            <div style={{ marginBottom: '0.75rem' }}>
              <Link
                href="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`}
                  alt="MetisArch Logo"
                  width={24}
                  height={24}
                  style={{ borderRadius: '50%' }}
                />
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: 'var(--foreground)',
                  }}
                >
                  METISARCH
                </span>
              </Link>
            </div>

            <div
              style={{
                fontSize: '0.8rem',
                color: 'var(--foreground-muted)',
                maxWidth: '26rem',
                lineHeight: 1.6,
              }}
            >
              {t('footer.story')}
            </div>

            <nav
              aria-label="Links"
              style={{
                marginTop: '0.9rem',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.15rem',
                fontSize: '0.78rem',
                color: 'var(--foreground-subtle)',
              }}
            >
              <a href="#product">{t('nav.product')}</a>
              <a href="#how-it-works">{t('nav.howItWorks')}</a>
              <a href="#pricing">{t('nav.pricing')}</a>
              <a href="#faq">{t('nav.faq')}</a>
              <span>
                © {new Date().getFullYear()} MetisArch. {t('footer.rights')}
              </span>
            </nav>
          </FooterInner>
        </FooterOuter>
      </PageWrapper>
    </>
  )
}
