import { createGlobalStyle } from 'styled-components'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Cal Sans';
    src: url('${BASE_PATH}/CalSans-SemiBold.ttf') format('truetype');
    font-weight: 400 700;
    font-style: normal;
    font-display: swap;
  }

  :root {
    color-scheme: dark;
    /* Exact MetisArch Desktop Dark Theme Tokens */
    --background: #0c0e14;
    --sidebar: #0c0e14;
    --rail: #090a0f;
    --surface: #10131b;
    --surface-raised: #131722;
    --surface-hover: #161b29;

    --foreground: #edf1f7;
    --foreground-muted: #828c9e;
    --foreground-subtle: #636a79;

    --accent: #191e2b;
    --border: #1c2231;
    --border-soft: #181c29;
    --editor-active-line: #151924;
    --selection: rgb(127 86 217 / 20%);

    --brand: #7f56d9;
    --brand-foreground: #ffffff;
    --brand-hover: #7048c6;
    --brand-soft: rgb(127 86 217 / 15%);
    --brand-border: rgb(127 86 217 / 35%);

    --danger: #f04438;
    --danger-soft: rgb(240 68 56 / 12%);
    --danger-border: rgb(240 68 56 / 25%);

    --success: #12b76a;
    --success-soft: rgb(18 183 106 / 12%);
    --success-border: rgb(18 183 106 / 25%);

    --warning: #f79009;
    --warning-soft: rgb(247 144 9 / 12%);
    --warning-border: rgb(247 144 9 / 25%);

    --info: #6172f3;
    --info-soft: rgb(97 114 243 / 12%);
    --info-border: rgb(97 114 243 / 25%);

    --shadow-sm: 0 1px 2px rgb(0 0 0 / 25%);
    --shadow-md: 0 8px 16px -2px rgb(0 0 0 / 35%), 0 4px 6px -2px rgb(0 0 0 / 20%);

    /* Dark-calibrated card accent tints */
    --bubble-color-0-hex: rgba(247, 144, 9, 0.1);
    --bubble-color-0-hex-full: #f79009;

    --bubble-color-1-hex: rgba(130, 140, 158, 0.1);
    --bubble-color-1-hex-full: #828c9e;

    --bubble-color-2-hex: rgba(240, 68, 56, 0.1);
    --bubble-color-2-hex-full: #f04438;

    --bubble-color-3-hex: rgba(127, 86, 217, 0.14);
    --bubble-color-3-hex-full: #7f56d9;

    --bubble-color-4-hex: rgba(18, 183, 106, 0.11);
    --bubble-color-4-hex-full: #12b76a;

    --bubble-color-5-hex: rgba(97, 114, 243, 0.12);
    --bubble-color-5-hex-full: #6172f3;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-height: 100vh;
    background-color: var(--background);
    color: var(--foreground);
    font-family: ${({ theme }) => theme.fontFamily.sans};
    font-size: 0.875rem;
    letter-spacing: -0.011em;
    overflow-x: hidden;
  }

  ::selection {
    background: var(--selection);
    color: var(--foreground);
  }

  h1,
  h2,
  h3,
  .font-cal {
    font-family: ${({ theme }) => theme.fontFamily.cal};
    font-weight: 600;
    color: var(--foreground);
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    border-radius: 999px;
    background: var(--border);
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--foreground-subtle);
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Ambient Dark Card Surface Tints */
  .bubble-bg-0 {
    background: linear-gradient(135deg, rgba(247, 144, 9, 0.09) 0%, rgba(16, 19, 27, 0.95) 100%);
  }
  .bubble-bg-1 {
    background: linear-gradient(135deg, rgba(130, 140, 158, 0.09) 0%, rgba(16, 19, 27, 0.95) 100%);
  }
  .bubble-bg-2 {
    background: linear-gradient(135deg, rgba(240, 68, 56, 0.09) 0%, rgba(16, 19, 27, 0.95) 100%);
  }
  .bubble-bg-3 {
    background: linear-gradient(135deg, rgba(127, 86, 217, 0.14) 0%, rgba(16, 19, 27, 0.95) 100%);
  }
  .bubble-bg-4 {
    background: linear-gradient(135deg, rgba(18, 183, 106, 0.1) 0%, rgba(16, 19, 27, 0.95) 100%);
  }
  .bubble-bg-5 {
    background: linear-gradient(135deg, rgba(97, 114, 243, 0.12) 0%, rgba(16, 19, 27, 0.95) 100%);
  }

  .bubble-color-gradient {
    background: linear-gradient(
      180deg,
      #0c0e14 0%,
      #090a0f 100%
    );
    border-top: 1px solid var(--border);
  }

  @keyframes float-slow {
    0%, 100% { transform: translateY(0) translate(0); }
    25% { transform: translateY(-14px) translate(8px); }
    50% { transform: translateY(-22px) translate(-5px); }
    75% { transform: translateY(-9px) translate(-12px); }
  }

  @keyframes float-medium {
    0%, 100% { transform: translateY(0) translate(0); }
    33% { transform: translateY(-18px) translate(-8px); }
    66% { transform: translateY(-9px) translate(12px); }
  }

  @keyframes float-fast {
    0%, 100% { transform: translateY(0) translate(0); }
    50% { transform: translateY(-24px) translate(16px); }
  }

  .animate-float-slow {
    animation: 22s ease-in-out infinite float-slow;
  }

  .animate-float-medium {
    animation: 17s ease-in-out infinite float-medium;
  }

  .animate-float-fast {
    animation: 14s ease-in-out infinite float-fast;
  }

  @keyframes fg-draw-in {
    0% { stroke-dashoffset: 1px; }
    100% { stroke-dashoffset: 0; }
  }

  .fg-draw {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    animation: 0.7s forwards fg-draw-in;
  }

  @keyframes fg-pop-in {
    0% { opacity: 0; transform: scale(0.85); }
    100% { opacity: 1; transform: scale(1); }
  }

  .fg-pill {
    transform-origin: 50%;
    animation: 0.45s 0.2s both fg-pop-in;
  }

  @keyframes fg-arrive {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.06); }
  }

  .fg-arrive {
    animation: 0.6s 0.35s fg-arrive;
  }

  @keyframes fg-node-in {
    0% { opacity: 0; transform: scale(0.55); }
    100% { opacity: 1; transform: scale(1); }
  }

  .fg-node-enter {
    animation: 0.4s both fg-node-in;
  }

  .fg-node-arrive {
    animation: 0.45s 0.4s both fg-node-in;
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-float-slow,
    .animate-float-medium,
    .animate-float-fast,
    .fg-draw,
    .fg-pill,
    .fg-arrive,
    .fg-node-enter,
    .fg-node-arrive {
      animation: none;
    }
  }
`
