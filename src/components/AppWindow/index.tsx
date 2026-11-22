import React from 'react'
import { useTranslation } from 'react-i18next'
import { AddressPill, CanvasWrap, ChromeBar, ChromeLeft, ChromeLogo, WindowFigure } from './styles'

export type ScreenVariant = 'hero' | 'workspaces' | 'playground' | 'compliance' | 'decisions' | 'indexes'

interface AppWindowProps {
  address: string
  variant: ScreenVariant
}

export const AppWindow: React.FC<AppWindowProps> = ({ address, variant }) => {
  const { t } = useTranslation()

  return (
    <WindowFigure>
      <ChromeBar>
        <ChromeLeft>
          <ChromeLogo src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} alt="MetisArch" />
          <AddressPill>{address}</AddressPill>
        </ChromeLeft>
      </ChromeBar>

      <CanvasWrap>
        {variant === 'hero' && (
          <svg viewBox="0 0 880 390" role="img" aria-label={t('hero.windowAddress')}>
            <defs>
              <marker
                id="arr-muted"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#828c9e" />
              </marker>
              <marker
                id="arr-brand"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#7f56d9" />
              </marker>
              <marker
                id="arr-success"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#12b76a" />
              </marker>
            </defs>

            <rect
              x="30"
              y="24"
              width="230"
              height="342"
              rx="16"
              fill="#10131b"
              stroke="#1c2231"
              strokeDasharray="4 4"
            />
            <rect
              x="310"
              y="24"
              width="260"
              height="342"
              rx="16"
              fill="rgba(127, 86, 217, 0.08)"
              stroke="rgba(127, 86, 217, 0.35)"
            />
            <rect
              x="620"
              y="24"
              width="230"
              height="342"
              rx="16"
              fill="#10131b"
              stroke="#1c2231"
              strokeDasharray="4 4"
            />

            <text
              x="145"
              y="56"
              textAnchor="middle"
              fontSize="10.5"
              fontWeight="700"
              fill="#828c9e"
              letterSpacing="0.06em"
            >
              {t('product.illustrations.hero.col1')}
            </text>
            <text
              x="440"
              y="56"
              textAnchor="middle"
              fontSize="10.5"
              fontWeight="700"
              fill="#b692f6"
              letterSpacing="0.06em"
            >
              {t('product.illustrations.hero.col2')}
            </text>
            <text
              x="735"
              y="56"
              textAnchor="middle"
              fontSize="10.5"
              fontWeight="700"
              fill="#32d583"
              letterSpacing="0.06em"
            >
              {t('product.illustrations.hero.col3')}
            </text>

            {/* Left Column Cards */}
            <g transform="translate(52, 82)">
              <rect width="186" height="72" rx="10" fill="#131722" stroke="#1c2231" />
              <circle cx="28" cy="36" r="14" fill="rgba(247, 144, 9, 0.15)" />
              <path d="M23 32h10M23 36h10M23 40h6" stroke="#f79009" strokeWidth="2" strokeLinecap="round" />
              <text x="52" y="33" fontSize="12" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.hero.c1Title')}
              </text>
              <text x="52" y="50" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.hero.c1Sub')}
              </text>
            </g>

            <g transform="translate(52, 174)">
              <rect width="186" height="72" rx="10" fill="#131722" stroke="#1c2231" />
              <circle cx="28" cy="36" r="14" fill="rgba(127, 86, 217, 0.18)" />
              <path
                d="M24 33l-3 3 3 3M32 33l3 3-3 3"
                stroke="#b692f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <text x="52" y="33" fontSize="12" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.hero.c2Title')}
              </text>
              <text x="52" y="50" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.hero.c2Sub')}
              </text>
            </g>

            <g transform="translate(52, 266)">
              <rect width="186" height="72" rx="10" fill="#131722" stroke="#1c2231" />
              <circle cx="28" cy="36" r="14" fill="rgba(97, 114, 243, 0.18)" />
              <text x="28" y="41" textAnchor="middle" fontSize="13" fontWeight="700" fill="#6172f3">
                #
              </text>
              <text x="52" y="33" fontSize="12" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.hero.c3Title')}
              </text>
              <text x="52" y="50" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.hero.c3Sub')}
              </text>
            </g>

            {/* Center Column */}
            <g transform="translate(332, 82)">
              <rect width="216" height="150" rx="12" fill="#10131b" stroke="#7f56d9" strokeWidth="1.5" />
              <text x="108" y="28" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#edf1f7">
                {t('product.illustrations.hero.centerTitle')}
              </text>

              <rect x="14" y="42" width="188" height="28" rx="6" fill="#151924" stroke="#1c2231" />
              <text x="108" y="60" textAnchor="middle" fontSize="10" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.hero.step1')}
              </text>

              <rect x="14" y="76" width="188" height="28" rx="6" fill="#151924" stroke="#1c2231" />
              <text x="108" y="94" textAnchor="middle" fontSize="10" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.hero.step2')}
              </text>

              <rect x="14" y="110" width="188" height="28" rx="6" fill="#151924" stroke="#1c2231" />
              <text x="108" y="128" textAnchor="middle" fontSize="10" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.hero.step3')}
              </text>
            </g>

            <line x1="440" y1="234" x2="440" y2="258" stroke="#7f56d9" strokeWidth="2" markerEnd="url(#arr-brand)" />

            <g transform="translate(332, 264)">
              <rect width="216" height="74" rx="12" fill="#7f56d9" />
              <text x="108" y="30" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#ffffff">
                {t('product.illustrations.hero.judgeTitle')}
              </text>
              <rect x="32" y="42" width="152" height="20" rx="10" fill="#0c0e14" />
              <text x="108" y="56" textAnchor="middle" fontSize="10" fontWeight="700" fill="#edf1f7">
                {t('product.illustrations.hero.judgeBadge')}
              </text>
            </g>

            {/* Right Column */}
            <g transform="translate(642, 105)">
              <rect
                width="186"
                height="110"
                rx="12"
                fill="#131722"
                stroke="rgba(18, 183, 106, 0.45)"
                strokeWidth="1.5"
              />
              <text x="93" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#edf1f7">
                {t('product.illustrations.hero.ideTitle')}
              </text>
              <text x="93" y="52" textAnchor="middle" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.hero.ideSub')}
              </text>
              <rect
                x="28"
                y="68"
                width="130"
                height="26"
                rx="13"
                fill="rgba(18, 183, 106, 0.14)"
                stroke="rgba(18, 183, 106, 0.35)"
              />
              <text x="93" y="85" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#32d583">
                {t('product.illustrations.hero.ideBadge')}
              </text>
            </g>

            <g transform="translate(642, 246)">
              <rect width="186" height="86" rx="12" fill="#131722" stroke="#1c2231" />
              <text x="93" y="32" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.hero.resultTitle')}
              </text>
              <text x="93" y="52" textAnchor="middle" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.hero.resultSub1')}
              </text>
              <text x="93" y="68" textAnchor="middle" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.hero.resultSub2')}
              </text>
            </g>

            <path
              d="M 238 118 C 275 118, 285 140, 326 140"
              fill="none"
              stroke="#828c9e"
              strokeWidth="1.75"
              markerEnd="url(#arr-muted)"
            />
            <path d="M 238 210 L 326 165" fill="none" stroke="#828c9e" strokeWidth="1.75" markerEnd="url(#arr-muted)" />
            <path
              d="M 238 302 C 275 302, 285 190, 326 190"
              fill="none"
              stroke="#828c9e"
              strokeWidth="1.75"
              markerEnd="url(#arr-muted)"
            />

            <path
              d="M 548 300 C 595 300, 595 160, 636 160"
              fill="none"
              stroke="#12b76a"
              strokeWidth="2"
              markerEnd="url(#arr-success)"
            />
            <path
              d="M 548 300 L 636 290"
              fill="none"
              stroke="#12b76a"
              strokeWidth="1.75"
              strokeDasharray="4 4"
              markerEnd="url(#arr-success)"
            />
          </svg>
        )}

        {variant === 'workspaces' && (
          <svg viewBox="0 0 840 340" role="img" aria-label={t('product.tabs.workspaces.label')}>
            <rect
              x="40"
              y="24"
              width="460"
              height="292"
              rx="16"
              fill="#10131b"
              stroke="rgba(127, 86, 217, 0.4)"
              strokeWidth="1.5"
            />
            <text x="70" y="58" fontSize="13" fontWeight="700" fill="#edf1f7">
              {t('product.illustrations.workspaces.domainTitle')}
            </text>
            <rect
              x="375"
              y="40"
              width="102"
              height="24"
              rx="12"
              fill="rgba(127, 86, 217, 0.16)"
              stroke="rgba(127, 86, 217, 0.4)"
            />
            <text x="426" y="56" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#b692f6">
              {t('product.illustrations.workspaces.domainBadge')}
            </text>

            <g transform="translate(68, 84)">
              <rect width="192" height="64" rx="10" fill="#151924" stroke="#1c2231" />
              <circle cx="26" cy="32" r="10" fill="rgba(130, 140, 158, 0.2)" />
              <text x="46" y="29" fontSize="11.5" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.workspaces.r1Title')}
              </text>
              <text x="46" y="46" fontSize="10" fill="#828c9e">
                {t('product.illustrations.workspaces.r1Sub')}
              </text>
            </g>

            <g transform="translate(280, 84)">
              <rect width="192" height="64" rx="10" fill="#151924" stroke="#1c2231" />
              <circle cx="26" cy="32" r="10" fill="rgba(97, 114, 243, 0.2)" />
              <text x="46" y="29" fontSize="11.5" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.workspaces.r2Title')}
              </text>
              <text x="46" y="46" fontSize="10" fill="#828c9e">
                {t('product.illustrations.workspaces.r2Sub')}
              </text>
            </g>

            <g transform="translate(68, 166)">
              <rect width="192" height="64" rx="10" fill="#151924" stroke="#1c2231" />
              <circle cx="26" cy="32" r="10" fill="rgba(18, 183, 106, 0.2)" />
              <text x="46" y="29" fontSize="11.5" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.workspaces.r3Title')}
              </text>
              <text x="46" y="46" fontSize="10" fill="#828c9e">
                {t('product.illustrations.workspaces.r3Sub')}
              </text>
            </g>

            <g transform="translate(280, 166)">
              <rect width="192" height="64" rx="10" fill="rgba(247, 144, 9, 0.1)" stroke="rgba(247, 144, 9, 0.35)" />
              <circle cx="24" cy="32" r="10" fill="rgba(247, 144, 9, 0.22)" />
              <path d="M20 29h8M20 32h8M20 35h5" stroke="#fdb022" strokeWidth="1.75" strokeLinecap="round" />
              <text x="42" y="29" fontSize="11" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.workspaces.r4Title')}
              </text>
              <text x="42" y="46" fontSize="9.5" fill="#fdb022">
                {t('product.illustrations.workspaces.r4Sub')}
              </text>
            </g>

            <rect x="68" y="248" width="404" height="44" rx="8" fill="#151924" stroke="#1c2231" />
            <text x="270" y="274" textAnchor="middle" fontSize="11" fontWeight="600" fill="#828c9e">
              {t('product.illustrations.workspaces.footerText')}
            </text>

            <path d="M 500 170 L 568 170" stroke="#828c9e" strokeWidth="2" strokeDasharray="5 5" />
            <circle cx="534" cy="170" r="5" fill="#7f56d9" />

            <g transform="translate(572, 68)">
              <rect width="228" height="204" rx="16" fill="#10131b" stroke="#7f56d9" strokeWidth="1.5" />
              <rect x="24" y="24" width="180" height="30" rx="6" fill="#7f56d9" />
              <text x="114" y="43" textAnchor="middle" fontSize="11" fontWeight="600" fill="#ffffff">
                {t('product.illustrations.workspaces.rightBadge')}
              </text>
              <text x="114" y="86" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#edf1f7">
                {t('product.illustrations.workspaces.rightTitle')}
              </text>
              <text x="114" y="110" textAnchor="middle" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.workspaces.rightSub1')}
              </text>
              <text x="114" y="126" textAnchor="middle" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.workspaces.rightSub2')}
              </text>
              <rect
                x="34"
                y="148"
                width="160"
                height="32"
                rx="16"
                fill="rgba(18, 183, 106, 0.14)"
                stroke="rgba(18, 183, 106, 0.3)"
              />
              <text x="114" y="168" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#32d583">
                {t('product.illustrations.workspaces.rightStatus')}
              </text>
            </g>
          </svg>
        )}

        {variant === 'playground' && (
          <svg viewBox="0 0 840 340" role="img" aria-label={t('product.tabs.playground.label')}>
            <g transform="translate(28, 95)">
              <rect width="165" height="150" rx="14" fill="#10131b" stroke="rgba(247, 144, 9, 0.4)" />
              <text x="82" y="42" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fdb022">
                {t('product.illustrations.playground.s1Tag')}
              </text>
              <text x="82" y="72" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.playground.s1Line1')}
              </text>
              <text x="82" y="90" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.playground.s1Line2')}
              </text>
              <rect x="22" y="110" width="120" height="22" rx="11" fill="rgba(247, 144, 9, 0.15)" />
              <text x="82" y="125" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fdb022">
                {t('product.illustrations.playground.s1Pill')}
              </text>
            </g>

            <g transform="translate(232, 48)">
              <rect width="196" height="244" rx="14" fill="#10131b" stroke="rgba(127, 86, 217, 0.45)" />
              <text x="98" y="34" textAnchor="middle" fontSize="10" fontWeight="700" fill="#b692f6">
                {t('product.illustrations.playground.s2Tag')}
              </text>

              <rect x="18" y="52" width="160" height="48" rx="8" fill="#151924" stroke="#1c2231" />
              <text x="98" y="73" textAnchor="middle" fontSize="11" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.playground.s2Card1Title')}
              </text>
              <text x="98" y="90" textAnchor="middle" fontSize="10" fill="#828c9e">
                {t('product.illustrations.playground.s2Card1Sub')}
              </text>

              <rect x="18" y="112" width="160" height="48" rx="8" fill="#151924" stroke="#1c2231" />
              <text x="98" y="133" textAnchor="middle" fontSize="11" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.playground.s2Card2Title')}
              </text>
              <text x="98" y="150" textAnchor="middle" fontSize="10" fill="#828c9e">
                {t('product.illustrations.playground.s2Card2Sub')}
              </text>

              <rect x="18" y="172" width="160" height="48" rx="8" fill="#151924" stroke="#1c2231" />
              <text x="98" y="193" textAnchor="middle" fontSize="11" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.playground.s2Card3Title')}
              </text>
              <text x="98" y="210" textAnchor="middle" fontSize="10" fill="#828c9e">
                {t('product.illustrations.playground.s2Card3Sub')}
              </text>
            </g>

            <g transform="translate(468, 72)">
              <rect width="160" height="196" rx="14" fill="#10131b" stroke="rgba(97, 114, 243, 0.4)" />
              <text x="80" y="36" textAnchor="middle" fontSize="10" fontWeight="700" fill="#8098f9">
                {t('product.illustrations.playground.s3Tag')}
              </text>

              <rect x="12" y="56" width="136" height="26" rx="6" fill="#151924" />
              <text x="80" y="73" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#32d583">
                {t('product.illustrations.playground.s3Hit1')}
              </text>

              <rect x="12" y="90" width="136" height="26" rx="6" fill="#151924" />
              <text x="80" y="107" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#32d583">
                {t('product.illustrations.playground.s3Hit2')}
              </text>

              <rect x="12" y="124" width="136" height="26" rx="6" fill="#151924" opacity="0.6" />
              <text x="80" y="141" textAnchor="middle" fontSize="9.5" fill="#f97066">
                {t('product.illustrations.playground.s3Miss')}
              </text>

              <text x="80" y="176" textAnchor="middle" fontSize="10" fontWeight="600" fill="#828c9e">
                {t('product.illustrations.playground.s3Foot')}
              </text>
            </g>

            <g transform="translate(664, 95)">
              <rect width="150" height="150" rx="14" fill="#10131b" stroke="rgba(18, 183, 106, 0.45)" />
              <circle cx="75" cy="52" r="20" fill="rgba(18, 183, 106, 0.15)" />
              <path
                d="M67 52l5 5 11-11"
                fill="none"
                stroke="#32d583"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text x="75" y="94" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#edf1f7">
                {t('product.illustrations.playground.s4Title')}
              </text>
              <text x="75" y="114" textAnchor="middle" fontSize="10.5" fill="#32d583">
                {t('product.illustrations.playground.s4Sub')}
              </text>
            </g>

            <line x1="195" y1="170" x2="228" y2="170" stroke="#828c9e" strokeWidth="2" />
            <line x1="430" y1="170" x2="464" y2="170" stroke="#828c9e" strokeWidth="2" />
            <line x1="630" y1="170" x2="660" y2="170" stroke="#828c9e" strokeWidth="2" />
          </svg>
        )}

        {variant === 'compliance' && (
          <svg viewBox="0 0 840 330" role="img" aria-label={t('product.tabs.compliance.label')}>
            <g transform="translate(45, 55)">
              <rect width="220" height="220" rx="16" fill="#10131b" stroke="#1c2231" />
              <text x="110" y="38" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#edf1f7">
                {t('product.illustrations.compliance.leftTitle')}
              </text>
              <rect x="22" y="58" width="176" height="36" rx="6" fill="rgba(240, 68, 56, 0.14)" />
              <text x="32" y="80" fontSize="10.5" fontWeight="600" fill="#f97066">
                {t('product.illustrations.compliance.leftOld')}
              </text>
              <rect x="22" y="104" width="176" height="36" rx="6" fill="rgba(18, 183, 106, 0.14)" />
              <text x="32" y="126" fontSize="10.5" fontWeight="600" fill="#32d583">
                {t('product.illustrations.compliance.leftNew')}
              </text>
              <text x="110" y="175" textAnchor="middle" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.compliance.leftFile')}
              </text>
            </g>

            <g transform="translate(320, 65)">
              <rect
                width="200"
                height="200"
                rx="18"
                fill="#10131b"
                stroke="rgba(247, 144, 9, 0.45)"
                strokeWidth="1.5"
              />
              <circle cx="100" cy="72" r="28" fill="rgba(247, 144, 9, 0.12)" stroke="#f79009" strokeWidth="1.5" />
              <path
                d="M100 54l14 6v10c0 9-6 16-14 19-8-3-14-10-14-19V60l14-6z"
                fill="rgba(247, 144, 9, 0.2)"
                stroke="#fdb022"
                strokeWidth="2"
              />
              <text x="100" y="125" textAnchor="middle" fontSize="12" fontWeight="700" fill="#edf1f7">
                {t('product.illustrations.compliance.centerTitle')}
              </text>
              <text x="100" y="145" textAnchor="middle" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.compliance.centerSub1')}
              </text>
              <text x="100" y="162" textAnchor="middle" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.compliance.centerSub2')}
              </text>
            </g>

            <g transform="translate(575, 55)">
              <rect width="220" height="220" rx="16" fill="#10131b" stroke="rgba(240, 68, 56, 0.45)" />
              <rect x="50" y="26" width="120" height="24" rx="12" fill="rgba(240, 68, 56, 0.15)" />
              <text x="110" y="42" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#f97066">
                {t('product.illustrations.compliance.rightBadge')}
              </text>
              <text x="110" y="82" textAnchor="middle" fontSize="12" fontWeight="700" fill="#edf1f7">
                {t('product.illustrations.compliance.rightTitle')}
              </text>
              <text x="110" y="108" textAnchor="middle" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.compliance.rightSub1')}
              </text>
              <text x="110" y="125" textAnchor="middle" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.compliance.rightSub2')}
              </text>
              <rect x="30" y="152" width="160" height="36" rx="8" fill="rgba(18, 183, 106, 0.14)" />
              <text x="110" y="174" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#32d583">
                {t('product.illustrations.compliance.rightFix')}
              </text>
            </g>

            <line x1="268" y1="165" x2="316" y2="165" stroke="#828c9e" strokeWidth="2" />
            <line x1="524" y1="165" x2="571" y2="165" stroke="#828c9e" strokeWidth="2" />
          </svg>
        )}

        {variant === 'decisions' && (
          <svg viewBox="0 0 840 330" role="img" aria-label={t('product.tabs.decisions.label')}>
            <g transform="translate(45, 75)">
              <rect width="210" height="180" rx="16" fill="#10131b" stroke="rgba(127, 86, 217, 0.4)" />
              <text x="105" y="44" textAnchor="middle" fontSize="10" fontWeight="700" fill="#b692f6">
                {t('product.illustrations.decisions.s1Tag')}
              </text>
              <text x="105" y="78" textAnchor="middle" fontSize="12" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.decisions.s1Title')}
              </text>
              <text x="105" y="98" textAnchor="middle" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.decisions.s1Sub')}
              </text>
              <rect x="28" y="122" width="154" height="28" rx="14" fill="#151924" stroke="#1c2231" />
              <text x="105" y="140" textAnchor="middle" fontSize="10" fontWeight="600" fill="#b692f6">
                {t('product.illustrations.decisions.s1Pill')}
              </text>
            </g>

            <g transform="translate(310, 50)">
              <rect width="220" height="230" rx="16" fill="#10131b" stroke="#7f56d9" strokeWidth="1.5" />
              <rect x="48" y="22" width="124" height="22" rx="11" fill="rgba(247, 144, 9, 0.16)" />
              <text x="110" y="37" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#fdb022">
                {t('product.illustrations.decisions.s2Badge')}
              </text>
              <text x="110" y="72" textAnchor="middle" fontSize="12" fontWeight="700" fill="#edf1f7">
                {t('product.illustrations.decisions.s2Title')}
              </text>
              <rect x="20" y="90" width="86" height="74" rx="8" fill="#151924" stroke="rgba(240, 68, 56, 0.35)" />
              <text x="63" y="120" textAnchor="middle" fontSize="10" fontWeight="600" fill="#f97066">
                {t('product.illustrations.decisions.s2OldTitle')}
              </text>
              <text x="63" y="140" textAnchor="middle" fontSize="9.5" fill="#828c9e">
                {t('product.illustrations.decisions.s2OldVal')}
              </text>

              <rect x="114" y="90" width="86" height="74" rx="8" fill="#151924" stroke="rgba(18, 183, 106, 0.35)" />
              <text x="157" y="120" textAnchor="middle" fontSize="10" fontWeight="600" fill="#32d583">
                {t('product.illustrations.decisions.s2NewTitle')}
              </text>
              <text x="157" y="140" textAnchor="middle" fontSize="9.5" fill="#32d583">
                {t('product.illustrations.decisions.s2NewVal')}
              </text>

              <rect x="22" y="180" width="176" height="28" rx="6" fill="#7f56d9" />
              <text x="110" y="198" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#ffffff">
                {t('product.illustrations.decisions.s2Btn')}
              </text>
            </g>

            <g transform="translate(585, 75)">
              <rect width="210" height="180" rx="16" fill="#10131b" stroke="rgba(18, 183, 106, 0.4)" />
              <text x="105" y="44" textAnchor="middle" fontSize="10" fontWeight="700" fill="#32d583">
                {t('product.illustrations.decisions.s3Tag')}
              </text>
              <text x="105" y="78" textAnchor="middle" fontSize="12" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.decisions.s3Title')}
              </text>
              <text x="105" y="98" textAnchor="middle" fontSize="10.5" fill="#828c9e">
                {t('product.illustrations.decisions.s3Sub')}
              </text>
              <rect x="30" y="122" width="150" height="28" rx="14" fill="rgba(18, 183, 106, 0.14)" />
              <text x="105" y="140" textAnchor="middle" fontSize="10" fontWeight="600" fill="#32d583">
                {t('product.illustrations.decisions.s3Pill')}
              </text>
            </g>

            <line x1="258" y1="165" x2="306" y2="165" stroke="#828c9e" strokeWidth="2" />
            <line x1="534" y1="165" x2="581" y2="165" stroke="#828c9e" strokeWidth="2" />
          </svg>
        )}

        {variant === 'indexes' && (
          <svg viewBox="0 0 840 330" role="img" aria-label={t('product.tabs.indexes.label')}>
            <g transform="translate(60, 48)">
              <rect width="220" height="54" rx="27" fill="#10131b" stroke="#7f56d9" strokeWidth="1.5" />
              <text x="110" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#b692f6">
                {t('product.illustrations.indexes.tag1')}
              </text>
            </g>

            <g transform="translate(60, 138)">
              <rect width="220" height="54" rx="27" fill="#10131b" stroke="#f79009" strokeWidth="1.5" />
              <text x="110" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fdb022">
                {t('product.illustrations.indexes.tag2')}
              </text>
            </g>

            <g transform="translate(60, 228)">
              <rect width="220" height="54" rx="27" fill="#10131b" stroke="#12b76a" strokeWidth="1.5" />
              <text x="110" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#32d583">
                {t('product.illustrations.indexes.tag3')}
              </text>
            </g>

            <g transform="translate(355, 115)">
              <rect width="140" height="100" rx="16" fill="#7f56d9" />
              <text x="70" y="44" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#ffffff">
                {t('product.illustrations.indexes.centerTitle')}
              </text>
              <text x="70" y="66" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.indexes.centerSub')}
              </text>
            </g>

            <g transform="translate(565, 42)">
              <rect width="215" height="68" rx="10" fill="#10131b" stroke="#1c2231" />
              <text x="107" y="30" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.indexes.doc1Title')}
              </text>
              <text x="107" y="49" textAnchor="middle" fontSize="10" fill="#828c9e">
                {t('product.illustrations.indexes.doc1Sub')}
              </text>
            </g>

            <g transform="translate(565, 131)">
              <rect width="215" height="68" rx="10" fill="#10131b" stroke="#1c2231" />
              <text x="107" y="30" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.indexes.doc2Title')}
              </text>
              <text x="107" y="49" textAnchor="middle" fontSize="10" fill="#828c9e">
                {t('product.illustrations.indexes.doc2Sub')}
              </text>
            </g>

            <g transform="translate(565, 220)">
              <rect width="215" height="68" rx="10" fill="#10131b" stroke="#1c2231" />
              <text x="107" y="30" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#edf1f7">
                {t('product.illustrations.indexes.doc3Title')}
              </text>
              <text x="107" y="49" textAnchor="middle" fontSize="10" fill="#828c9e">
                {t('product.illustrations.indexes.doc3Sub')}
              </text>
            </g>

            <path d="M 280 75 L 355 145" stroke="#7f56d9" strokeWidth="2" />
            <path d="M 280 165 L 355 165" stroke="#f79009" strokeWidth="2" />
            <path d="M 280 255 L 355 185" stroke="#12b76a" strokeWidth="2" />

            <path d="M 495 145 L 565 76" stroke="#7f56d9" strokeWidth="2" />
            <path d="M 495 165 L 565 165" stroke="#f79009" strokeWidth="2" />
            <path d="M 495 185 L 565 254" stroke="#12b76a" strokeWidth="2" />
          </svg>
        )}
      </CanvasWrap>
    </WindowFigure>
  )
}
