import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  background-color: var(--background);
`

export const Main = styled.main`
  flex-grow: 1;
`

/* HERO SECTION */
export const HeroOuter = styled.div`
  position: relative;
  min-height: 100vh;
`

export const HeroInner = styled.div`
  padding-top: 5.25rem;
  padding-bottom: 2.5rem;

  @media (min-width: 768px) {
    padding-top: 6.75rem;
    padding-bottom: 3.5rem;
  }
`

export const HeroContainer = styled.div`
  position: relative;
  max-width: 44rem;
  margin: 0 auto 1.65rem;
  padding: 0 1rem;
  text-align: center;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`

export const BadgeWrap = styled.div`
  margin-bottom: 0.9rem;
  display: inline-block;
  max-width: 100%;
`

export const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  border-radius: 9999px;
  padding: 0.3rem 0.75rem;
  font-size: 0.65rem;
  line-height: 1.35;
  font-weight: 600;
  letter-spacing: 0.04em;
  background-color: var(--brand-soft);
  border: 1px solid var(--brand-border);
  color: #b692f6;
  text-transform: uppercase;
  text-align: center;
  max-width: 100%;

  @media (min-width: 640px) {
    font-size: 0.68rem;
    padding: 0.25rem 0.85rem;
  }
`

export const BadgeDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: var(--success);
  flex-shrink: 0;
`

export const HeroH1 = styled.h1`
  margin-bottom: 0.65rem;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.14;
  color: var(--foreground);

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`

export const HeroH2 = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.35;
  margin-bottom: 0.6rem;
  color: #b692f6;

  @media (min-width: 768px) {
    font-size: 1.15rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.25rem;
    margin-bottom: 0.7rem;
  }
`

export const HeroLead = styled.p`
  margin: 0 auto 1.25rem;
  max-width: 36rem;
  font-size: 0.84rem;
  line-height: 1.55;
  color: var(--foreground-muted);

  @media (min-width: 768px) {
    font-size: 0.88rem;
  }
`

export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  margin: 1.15rem auto 0;
  max-width: 18rem;

  @media (min-width: 640px) {
    flex-direction: row;
    max-width: none;
  }
`

export const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 5px;
  font-size: 0.8125rem;
  font-weight: 600;
  background-color: var(--brand);
  border: 1px solid var(--brand);
  color: var(--brand-foreground);
  height: 2.25rem;
  padding: 0 1rem;
  box-shadow: var(--shadow-sm);
  transition: background-color 0.15s ease;

  &:hover {
    background-color: var(--brand-hover);
  }
`

export const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 5px;
  font-size: 0.8125rem;
  font-weight: 500;
  border: 1px solid var(--border);
  background-color: var(--surface-raised);
  color: var(--foreground);
  height: 2.25rem;
  padding: 0 1rem;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease;

  &:hover {
    background-color: var(--surface-hover);
    border-color: var(--foreground-subtle);
  }
`

export const WindowContainer = styled.div`
  position: relative;
  max-width: 66rem;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
`

/* SHARED SECTION STYLES */
export const AltSection = styled.section`
  position: relative;
  background-color: #090a0f;
  border-top: 1px solid var(--border-soft);
  padding: 3.5rem 0;

  @media (min-width: 640px) {
    padding: 5rem 0;
  }
`

export const BaseSection = styled.section`
  position: relative;
  background-color: var(--background);
  border-top: 1px solid var(--border-soft);
  padding: 3.5rem 0;

  @media (min-width: 640px) {
    padding: 5rem 0;
  }
`

export const SectionContainer = styled.div<{ $maxWidth?: string }>`
  max-width: ${({ $maxWidth }) => $maxWidth || '72rem'};
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`

export const SectionEyebrow = styled.p`
  text-align: center;
  font-size: 0.75rem;
  line-height: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #b692f6;
  text-transform: uppercase;
`

export const SectionTitle = styled.h2`
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

export const SectionCopy = styled.div`
  max-width: 38rem;
  margin: 0 auto 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--foreground-muted);

  @media (min-width: 768px) {
    font-size: 0.925rem;
  }
`

export const ItalicQuote = styled.p`
  text-align: center;
  font-size: 0.975rem;
  font-weight: 600;
  font-style: italic;
  color: var(--foreground);

  @media (min-width: 768px) {
    font-size: 1.075rem;
  }
`

/* PRODUCT TABS */
export const TabList = styled.div`
  margin-bottom: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem;
`

export const TabButton = styled.button<{ $active: boolean }>`
  cursor: pointer;
  min-height: 2.15rem;
  border-radius: 6px;
  border: 1px solid ${({ $active }) => ($active ? 'var(--brand)' : 'var(--border)')};
  background-color: ${({ $active }) => ($active ? 'var(--brand)' : 'var(--surface)')};
  color: ${({ $active }) => ($active ? 'var(--brand-foreground)' : 'var(--foreground-muted)')};
  padding: 0 0.9rem;
  font-size: 0.775rem;
  font-weight: 600;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${({ $active }) => ($active ? 'var(--brand)' : 'var(--surface-hover)')};
    color: var(--foreground);
  }
`

export const TabCaption = styled.p`
  max-width: 38rem;
  min-height: 2.85rem;
  margin: 0 auto 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--foreground-muted);
`

/* CALLOUT SECTION */
export const CalloutSection = styled.section`
  position: relative;
  background: linear-gradient(180deg, rgba(127, 86, 217, 0.11) 0%, #090a0f 100%);
  border-top: 1px solid var(--brand-border);
  border-bottom: 1px solid var(--border);
  color: var(--foreground);
  padding: 3.5rem 0;

  @media (min-width: 640px) {
    padding: 5rem 0;
  }
`

export const CalloutGrid = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  align-items: center;
  gap: 2.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1.05fr 1fr;
    padding: 0 2rem;
  }
`

export const CalloutCard = styled.div`
  border-radius: 0.65rem;
  border: 1px solid var(--border);
  background-color: var(--surface);
  overflow: hidden;
  box-shadow: var(--shadow-md);
`

export const CalloutCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0.9rem;
  background-color: var(--rail);
  border-bottom: 1px solid var(--border);
  font-family: ${({ theme }) => theme.fontFamily.mono};
  font-size: 0.68rem;
  color: var(--foreground-muted);
`

export const CalloutList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  gap: 0.5rem;
  font-size: 0.8125rem;
`

export const CalloutListItem = styled.li<{ $highlight?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.35rem 0.75rem;
  border-radius: 6px;
  padding: 0.65rem 0.85rem;
  border: 1px solid ${({ $highlight }) => ($highlight ? 'var(--brand-border)' : 'var(--border)')};
  background-color: ${({ $highlight }) => ($highlight ? 'var(--brand-soft)' : 'var(--surface-raised)')};
  color: var(--foreground);
  font-weight: ${({ $highlight }) => ($highlight ? 600 : 400)};
`

/* PRICING */
export const PricingGrid = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const PricingCard = styled.div<{ $featured?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-radius: 0.75rem;
  background-color: var(--surface);
  padding: 1.5rem;
  border: ${({ $featured }) => ($featured ? '1.5px solid var(--brand)' : '1px solid var(--border)')};
  box-shadow: ${({ $featured }) =>
    $featured ? '0 20px 35px -10px rgba(127, 86, 217, 0.22), 0 0 0 1px rgba(127, 86, 217, 0.2)' : 'var(--shadow-sm)'};
`

export const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: var(--foreground-muted);
  font-size: 0.82rem;
`

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`

/* FAQ */
export const FaqGrid = styled.dl`
  margin-top: 1.75rem;
  display: grid;
  gap: 0.9rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    margin-top: 2.75rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const FaqCard = styled.div`
  padding: 1.15rem;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  border-radius: 0.6rem;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: var(--brand-border);
  }
`

export const FaqDt = styled.dt`
  font-size: 0.85rem;
  line-height: 1.45;
  font-weight: 600;
  color: var(--foreground);
`

export const FaqDd = styled.dd`
  margin-top: 0.4rem;
  font-size: 0.79rem;
  line-height: 1.55;
  color: var(--foreground-muted);
`

/* FOOTER */
export const FooterOuter = styled.footer`
  padding: 2.25rem 1rem;

  @media (min-width: 768px) {
    padding: 2.75rem 1.5rem;
  }
`

export const FooterInner = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
