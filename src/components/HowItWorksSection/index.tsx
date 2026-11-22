import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  AsidePanel,
  BoardGrid,
  BoardTitle,
  ChevronSvg,
  Container,
  ControlsRow,
  DiagramBoard,
  DropdownBox,
  DropdownMenu,
  DropdownOption,
  DropdownTrigger,
  Eyebrow,
  Heading,
  IconButton,
  LegendList,
  PlayButton,
  Section,
  SentencePrompt,
  ShortcutBtn,
  ShortcutsLabel,
  ShortcutsRow,
  ShortcutsWrap,
  StepCard,
  StepDotBtn,
  StepDotsList,
  Subheading,
  SvgCanvasHolder,
  TakeawayText,
} from './styles'

interface Actor {
  name: string
  role: string
  accent?: boolean
}

type StepKind = 'message' | 'note' | 'talk' | 'end'

interface FlowStep {
  from: number
  to: number
  kind?: StepKind
  label: string
  detail: string
}

interface Scenario {
  title: string
  actors: Actor[]
  steps: FlowStep[]
  takeaway: string
}

type RoleId = 'dev' | 'arch' | 'pm' | 'cto'
type TargetId = 'search' | 'compliance' | 'decision' | 'multirepo' | 'gitsync' | 'server'

const ROLE_TARGETS: Record<RoleId, TargetId[]> = {
  dev: ['search', 'compliance', 'decision'],
  arch: ['multirepo', 'compliance', 'gitsync'],
  pm: ['decision', 'gitsync', 'server'],
  cto: ['server', 'multirepo', 'gitsync'],
}

const SHORTCUTS: { key: TargetId; roleId: RoleId; targetId: TargetId }[] = [
  { key: 'search', roleId: 'dev', targetId: 'search' },
  { key: 'compliance', roleId: 'dev', targetId: 'compliance' },
  { key: 'decision', roleId: 'dev', targetId: 'decision' },
  { key: 'multirepo', roleId: 'arch', targetId: 'multirepo' },
  { key: 'gitsync', roleId: 'arch', targetId: 'gitsync' },
  { key: 'server', roleId: 'cto', targetId: 'server' },
]

const KIND_COLORS: Record<StepKind, string> = {
  message: '#7f56d9',
  note: '#f79009',
  talk: '#12b76a',
  end: '#f04438',
}

function edgeEndpoint(cx: number, cy: number, ux: number, uy: number): { x: number; y: number } {
  const scale = Math.min(
    Math.abs(ux) < 1e-6 ? Infinity : 74 / Math.abs(ux),
    Math.abs(uy) < 1e-6 ? Infinity : 36 / Math.abs(uy)
  )
  return { x: cx + ux * scale, y: cy + uy * scale }
}

interface InlineSelectOption<T extends string> {
  value: T
  label: string
}

interface InlineSelectProps<T extends string> {
  ariaLabel: string
  value: T
  options: InlineSelectOption<T>[]
  onChange: (value: T) => void
}

function InlineCustomSelect<T extends string>({ ariaLabel, value, options, onChange }: InlineSelectProps<T>) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const selectedLabel = options.find((opt) => opt.value === value)?.label ?? options[0]?.label ?? ''

  return (
    <DropdownBox ref={containerRef}>
      <DropdownTrigger
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        $open={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{selectedLabel}</span>
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
      </DropdownTrigger>

      {open && (
        <DropdownMenu role="listbox" aria-label={ariaLabel}>
          {options.map((opt) => {
            const isSelected = opt.value === value
            return (
              <DropdownOption
                key={opt.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                $selected={isSelected}
                onClick={() => {
                  onChange(opt.value)
                  setOpen(false)
                }}
              >
                <span>{opt.label}</span>
                {isSelected && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: '#b692f6', flexShrink: 0 }}
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </DropdownOption>
            )
          })}
        </DropdownMenu>
      )}
    </DropdownBox>
  )
}

export const HowItWorksSection: React.FC = () => {
  const { t } = useTranslation()
  const [roleId, setRoleId] = useState<RoleId>('dev')
  const [targetId, setTargetId] = useState<TargetId>('search')
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const roleShort = t(`howItWorks.roles.${roleId}.short`)

  const scenario = useMemo((): Scenario => {
    const base = `howItWorks.scenarios.${targetId}`
    const actors: Actor[] = [
      { name: t(`${base}.actors.a0Name`), role: roleShort },
      {
        name: t(`${base}.actors.a1Name`),
        role: t(`${base}.actors.a1Role`),
        accent: true,
      },
      {
        name: t(`${base}.actors.a2Name`),
        role: t(`${base}.actors.a2Role`),
      },
      {
        name: t(`${base}.actors.a3Name`),
        role: t(`${base}.actors.a3Role`),
      },
    ]

    if (targetId === 'compliance') {
      return {
        title: t(`${base}.title`),
        actors,
        steps: [
          {
            from: 0,
            to: 1,
            label: t(`${base}.steps.s1Label`),
            detail: t(`${base}.steps.s1Detail`),
          },
          {
            from: 1,
            to: 2,
            label: t(`${base}.steps.s2Label`),
            detail: t(`${base}.steps.s2Detail`),
          },
          {
            from: 2,
            to: 3,
            label: t(`${base}.steps.s3Label`),
            detail: t(`${base}.steps.s3Detail`),
          },
          {
            from: 3,
            to: 1,
            kind: 'talk',
            label: t(`${base}.steps.s4Label`),
            detail: t(`${base}.steps.s4Detail`),
          },
          {
            from: 1,
            to: 0,
            label: t(`${base}.steps.s5Label`),
            detail: t(`${base}.steps.s5Detail`),
          },
        ],
        takeaway: t(`${base}.takeaway`),
      }
    }

    if (targetId === 'decision') {
      return {
        title: t(`${base}.title`),
        actors,
        steps: [
          {
            from: 0,
            to: 1,
            label: t(`${base}.steps.s1Label`),
            detail: t(`${base}.steps.s1Detail`),
          },
          {
            from: 1,
            to: 2,
            label: t(`${base}.steps.s2Label`),
            detail: t(`${base}.steps.s2Detail`),
          },
          {
            from: 0,
            to: 2,
            kind: 'talk',
            label: t(`${base}.steps.s3Label`),
            detail: t(`${base}.steps.s3Detail`),
          },
          {
            from: 2,
            to: 3,
            label: t(`${base}.steps.s4Label`),
            detail: t(`${base}.steps.s4Detail`),
          },
          {
            from: 3,
            to: 0,
            label: t(`${base}.steps.s5Label`),
            detail: t(`${base}.steps.s5Detail`),
          },
        ],
        takeaway: t(`${base}.takeaway`),
      }
    }

    if (targetId === 'multirepo') {
      return {
        title: t(`${base}.title`),
        actors,
        steps: [
          {
            from: 0,
            to: 1,
            label: t(`${base}.steps.s1Label`),
            detail: t(`${base}.steps.s1Detail`),
          },
          {
            from: 1,
            to: 2,
            label: t(`${base}.steps.s2Label`),
            detail: t(`${base}.steps.s2Detail`),
          },
          {
            from: 2,
            to: 3,
            label: t(`${base}.steps.s3Label`),
            detail: t(`${base}.steps.s3Detail`),
          },
          {
            from: 3,
            to: 1,
            kind: 'note',
            label: t(`${base}.steps.s4Label`),
            detail: t(`${base}.steps.s4Detail`),
          },
          {
            from: 1,
            to: 0,
            label: t(`${base}.steps.s5Label`),
            detail: t(`${base}.steps.s5Detail`),
          },
        ],
        takeaway: t(`${base}.takeaway`),
      }
    }

    if (targetId === 'gitsync') {
      return {
        title: t(`${base}.title`),
        actors,
        steps: [
          {
            from: 0,
            to: 1,
            label: t(`${base}.steps.s1Label`),
            detail: t(`${base}.steps.s1Detail`),
          },
          {
            from: 1,
            to: 2,
            label: t(`${base}.steps.s2Label`),
            detail: t(`${base}.steps.s2Detail`),
          },
          {
            from: 2,
            to: 3,
            label: t(`${base}.steps.s3Label`),
            detail: t(`${base}.steps.s3Detail`),
          },
          {
            from: 3,
            to: 0,
            kind: 'talk',
            label: t(`${base}.steps.s4Label`),
            detail: t(`${base}.steps.s4Detail`),
          },
        ],
        takeaway: t(`${base}.takeaway`),
      }
    }

    if (targetId === 'server') {
      return {
        title: t(`${base}.title`),
        actors,
        steps: [
          {
            from: 0,
            to: 1,
            label: t(`${base}.steps.s1Label`),
            detail: t(`${base}.steps.s1Detail`),
          },
          {
            from: 1,
            to: 2,
            label: t(`${base}.steps.s2Label`),
            detail: t(`${base}.steps.s2Detail`),
          },
          {
            from: 2,
            to: 1,
            kind: 'note',
            label: t(`${base}.steps.s3Label`),
            detail: t(`${base}.steps.s3Detail`),
          },
          {
            from: 1,
            to: 3,
            label: t(`${base}.steps.s4Label`),
            detail: t(`${base}.steps.s4Detail`),
          },
        ],
        takeaway: t(`${base}.takeaway`),
      }
    }

    return {
      title: t(`${base}.title`),
      actors,
      steps: [
        {
          from: 0,
          to: 1,
          label: t(`${base}.steps.s1Label`),
          detail: t(`${base}.steps.s1Detail`),
        },
        {
          from: 1,
          to: 2,
          label: t(`${base}.steps.s2Label`),
          detail: t(`${base}.steps.s2Detail`),
        },
        {
          from: 2,
          to: 3,
          label: t(`${base}.steps.s3Label`),
          detail: t(`${base}.steps.s3Detail`),
        },
        {
          from: 3,
          to: 1,
          kind: 'end',
          label: t(`${base}.steps.s4Label`),
          detail: t(`${base}.steps.s4Detail`),
        },
        {
          from: 1,
          to: 0,
          kind: 'talk',
          label: t(`${base}.steps.s5Label`),
          detail: t(`${base}.steps.s5Detail`),
        },
      ],
      takeaway: t(`${base}.takeaway`),
    }
  }, [t, targetId, roleShort])

  const initialPositions = useMemo(() => {
    const count = scenario.actors.length
    return scenario.actors.map((_, idx) => {
      const angle = (2 * Math.PI * idx) / count - Math.PI / 2
      return {
        x: Math.round(380 + 185 * Math.cos(angle)),
        y: Math.round(230 + 125 * Math.sin(angle)),
      }
    })
  }, [scenario.actors.length])

  const [nodePositions, setNodePositions] = useState<{ x: number; y: number }[]>(initialPositions)
  const [draggingIdx, setDraggingIdx] = useState<number | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    setNodePositions(initialPositions)
    setCurrentStep(0)
  }, [initialPositions, targetId])

  useEffect(() => {
    if (!isPlaying) return
    if (currentStep >= scenario.steps.length - 1) {
      setIsPlaying(false)
      return
    }
    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1)
    }, 2600)
    return () => clearTimeout(timer)
  }, [isPlaying, currentStep, scenario.steps.length])

  const handleRoleChange = (newRoleId: RoleId) => {
    setRoleId(newRoleId)
    const allowed = ROLE_TARGETS[newRoleId]
    if (!allowed.includes(targetId)) {
      setTargetId(allowed[0])
    }
  }

  const step = scenario.steps[currentStep] ?? scenario.steps[0]
  const stepKind: StepKind = step?.kind ?? 'message'
  const strokeColor = KIND_COLORS[stepKind]

  const pairs = useMemo(() => {
    const seen = new Set<string>()
    const list: [number, number][] = []
    for (const s of scenario.steps) {
      if (s.from === s.to) continue
      const key = s.from < s.to ? `${s.from}-${s.to}` : `${s.to}-${s.from}`
      if (!seen.has(key)) {
        seen.add(key)
        list.push([s.from, s.to])
      }
    }
    return list
  }, [scenario.steps])

  const activeCurve = useMemo(() => {
    if (!step) return null
    const fromPos = nodePositions[step.from] ?? { x: 380, y: 230 }
    const toPos = nodePositions[step.to] ?? { x: 380, y: 230 }

    if (step.from === step.to || stepKind === 'note') {
      const cx = fromPos.x
      const cy = fromPos.y - 26
      return {
        d: `M ${cx - 16} ${cy} C ${cx - 54} ${cy - 70}, ${cx + 54} ${cy - 70}, ${cx + 16} ${cy}`,
        mx: cx,
        my: cy - 52,
      }
    }

    const dx = toPos.x - fromPos.x
    const dy = toPos.y - fromPos.y
    const dist = Math.hypot(dx, dy) || 1
    const ux = dx / dist
    const uy = dy / dist
    const start = edgeEndpoint(fromPos.x, fromPos.y, ux, uy)
    const end = edgeEndpoint(toPos.x, toPos.y, -ux, -uy)
    const offset = Math.min(0.22 * dist, 65)
    const ctrlX = (start.x + end.x) / 2 - uy * offset
    const ctrlY = (start.y + end.y) / 2 + ux * offset

    return {
      d: `M ${start.x} ${start.y} Q ${ctrlX} ${ctrlY} ${end.x} ${end.y}`,
      mx: 0.25 * start.x + 0.5 * ctrlX + 0.25 * end.x,
      my: 0.25 * start.y + 0.5 * ctrlY + 0.25 * end.y,
    }
  }, [step, stepKind, nodePositions])

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (draggingIdx === null || !svgRef.current) return
    const ctm = svgRef.current.getScreenCTM()
    if (!ctm) return
    const pt = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse())
    const clampedX = Math.max(75, Math.min(685, pt.x))
    const clampedY = Math.max(65, Math.min(400, pt.y))
    setNodePositions((prev) => prev.map((p, idx) => (idx === draggingIdx ? { x: clampedX, y: clampedY } : p)))
  }

  const roleOptions: InlineSelectOption<RoleId>[] = useMemo(
    () =>
      (['dev', 'arch', 'pm', 'cto'] as RoleId[]).map((r) => ({
        value: r,
        label: t(`howItWorks.roles.${r}.phrase`),
      })),
    [t]
  )

  const targetOptions: InlineSelectOption<TargetId>[] = useMemo(
    () =>
      ROLE_TARGETS[roleId].map((tid) => ({
        value: tid,
        label: t(`howItWorks.roles.${roleId}.targets.${tid}`),
      })),
    [t, roleId]
  )

  return (
    <Section id="how-it-works">
      <Container>
        <Eyebrow>{t('howItWorks.eyebrow')}</Eyebrow>
        <Heading>{t('howItWorks.title')}</Heading>
        <Subheading>{t('howItWorks.subtitle')}</Subheading>

        <SentencePrompt>
          <span>{t('howItWorks.promptPrefix')}</span>
          <InlineCustomSelect<RoleId>
            ariaLabel={t('howItWorks.promptPrefix')}
            value={roleId}
            options={roleOptions}
            onChange={handleRoleChange}
          />
          <span>{t('howItWorks.promptMiddle')}</span>
          <InlineCustomSelect<TargetId>
            ariaLabel={t('howItWorks.promptMiddle')}
            value={targetId}
            options={targetOptions}
            onChange={setTargetId}
          />
          <span>.</span>
        </SentencePrompt>

        <ShortcutsWrap>
          <ShortcutsLabel>{t('howItWorks.shortcutsLabel')}</ShortcutsLabel>
          <ShortcutsRow>
            {SHORTCUTS.map((sc) => {
              const isActive = sc.roleId === roleId && sc.targetId === targetId
              return (
                <ShortcutBtn
                  key={sc.key}
                  type="button"
                  $active={isActive}
                  onClick={() => {
                    setRoleId(sc.roleId)
                    setTargetId(sc.targetId)
                  }}
                >
                  {t(`howItWorks.shortcuts.${sc.key}`)}
                </ShortcutBtn>
              )
            })}
          </ShortcutsRow>
        </ShortcutsWrap>

        <DiagramBoard>
          <BoardTitle>{scenario.title}</BoardTitle>
          <BoardGrid>
            <div style={{ minWidth: 0 }}>
              <SvgCanvasHolder>
                <svg
                  ref={svgRef}
                  viewBox="0 0 760 440"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    userSelect: 'none',
                  }}
                  onPointerMove={handlePointerMove}
                  onPointerUp={() => setDraggingIdx(null)}
                  onPointerLeave={() => setDraggingIdx(null)}
                >
                  <defs>
                    {(Object.keys(KIND_COLORS) as StepKind[]).map((k) => (
                      <marker
                        key={k}
                        id={`fg-arrow-${k}`}
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="7"
                        markerHeight="7"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 0 L 10 5 L 0 10 z" fill={KIND_COLORS[k]} />
                      </marker>
                    ))}
                  </defs>

                  <g stroke="#1c2231" strokeWidth="1.75" fill="none">
                    {pairs.map(([a, b]) => {
                      const pa = nodePositions[a]
                      const pb = nodePositions[b]
                      if (!pa || !pb) return null
                      const isCurrentEdge = (step.from === a && step.to === b) || (step.from === b && step.to === a)
                      return (
                        <line
                          key={`${a}-${b}`}
                          x1={pa.x}
                          y1={pa.y}
                          x2={pb.x}
                          y2={pb.y}
                          strokeOpacity={isCurrentEdge ? 0.2 : 0.85}
                        />
                      )
                    })}
                  </g>

                  {activeCurve && (
                    <g key={`${targetId}-${currentStep}`}>
                      <path
                        d={activeCurve.d}
                        fill="none"
                        stroke={strokeColor}
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        pathLength={1}
                        markerEnd={`url(#fg-arrow-${stepKind})`}
                        markerStart={stepKind === 'talk' ? `url(#fg-arrow-${stepKind})` : undefined}
                        className="fg-draw"
                      />
                      <foreignObject
                        x={activeCurve.mx - 115}
                        y={activeCurve.my - 22}
                        width={230}
                        height={48}
                        style={{ overflow: 'visible' }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <span
                            className="fg-pill"
                            style={{
                              borderRadius: '9999px',
                              border: `1px solid ${strokeColor}`,
                              backgroundColor: '#131722',
                              padding: '0.22rem 0.65rem',
                              textAlign: 'center',
                              fontSize: '10.5px',
                              fontWeight: 600,
                              lineHeight: 1.25,
                              color: '#edf1f7',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.45)',
                            }}
                          >
                            <span
                              style={{
                                marginRight: '0.25rem',
                                color: strokeColor,
                              }}
                            >
                              {currentStep + 1}.
                            </span>
                            {step.label}
                          </span>
                        </div>
                      </foreignObject>
                    </g>
                  )}

                  {scenario.actors.map((actor, idx) => {
                    const pos = nodePositions[idx] ?? { x: 380, y: 230 }
                    const isFrom = step.from === idx
                    const isTo = step.to === idx
                    return (
                      <foreignObject
                        key={actor.name}
                        x={pos.x - 68}
                        y={pos.y - 26}
                        width={136}
                        height={52}
                        style={{ overflow: 'visible', cursor: 'grab' }}
                        onPointerDown={() => setDraggingIdx(idx)}
                      >
                        <div
                          style={{
                            display: 'flex',
                            height: '100%',
                            width: '100%',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '0.6rem',
                            border: `1px solid ${
                              isFrom || isTo ? strokeColor : actor.accent ? 'rgba(127, 86, 217, 0.5)' : '#1c2231'
                            }`,
                            backgroundColor: actor.accent ? 'rgba(127, 86, 217, 0.16)' : '#131722',
                            boxShadow: isFrom || isTo ? `0 0 0 3px ${strokeColor}44` : '0 2px 6px rgba(0, 0, 0, 0.35)',
                            padding: '0 0.5rem',
                            textAlign: 'center',
                            transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '0.76rem',
                              fontWeight: 600,
                              color: '#edf1f7',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              maxWidth: '100%',
                            }}
                          >
                            {actor.name}
                          </span>
                          <span
                            style={{
                              fontSize: '0.65rem',
                              color: '#828c9e',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              maxWidth: '100%',
                            }}
                          >
                            {actor.role}
                          </span>
                        </div>
                      </foreignObject>
                    )
                  })}
                </svg>
              </SvgCanvasHolder>

              <StepDotsList>
                {scenario.steps.map((s, idx) => (
                  <li key={s.label}>
                    <StepDotBtn
                      type="button"
                      $active={idx === currentStep}
                      onClick={() => {
                        setIsPlaying(false)
                        setCurrentStep(idx)
                      }}
                    >
                      {idx + 1}
                    </StepDotBtn>
                  </li>
                ))}
              </StepDotsList>
            </div>

            <AsidePanel>
              <StepCard aria-live="polite">
                <p
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#b692f6',
                  }}
                >
                  {t('howItWorks.stepCounter', {
                    current: currentStep + 1,
                    total: scenario.steps.length,
                  })}
                </p>
                <p
                  style={{
                    marginTop: '0.45rem',
                    fontWeight: 600,
                    color: '#edf1f7',
                    fontSize: '0.88rem',
                  }}
                >
                  {step.label}
                </p>
                <p
                  style={{
                    marginTop: '0.45rem',
                    fontSize: '0.8rem',
                    lineHeight: 1.55,
                    color: '#828c9e',
                  }}
                >
                  {step.detail}
                </p>
              </StepCard>

              <ControlsRow>
                <IconButton
                  type="button"
                  disabled={currentStep === 0}
                  aria-label={t('howItWorks.prevAria')}
                  onClick={() => {
                    setIsPlaying(false)
                    setCurrentStep((prev) => Math.max(0, prev - 1))
                  }}
                >
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
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </IconButton>

                <PlayButton
                  type="button"
                  onClick={() => {
                    if (currentStep >= scenario.steps.length - 1) {
                      setCurrentStep(0)
                      setIsPlaying(true)
                    } else {
                      setIsPlaying((prev) => !prev)
                    }
                  }}
                >
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
                    {isPlaying ? (
                      <>
                        <rect x="14" y="3" width="5" height="18" rx="1" />
                        <rect x="5" y="3" width="5" height="18" rx="1" />
                      </>
                    ) : (
                      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                    )}
                  </svg>
                  {isPlaying
                    ? t('howItWorks.pause')
                    : currentStep >= scenario.steps.length - 1
                      ? t('howItWorks.replay')
                      : t('howItWorks.play')}
                </PlayButton>

                <IconButton
                  type="button"
                  disabled={currentStep >= scenario.steps.length - 1}
                  aria-label={t('howItWorks.nextAria')}
                  onClick={() => {
                    setIsPlaying(false)
                    setCurrentStep((prev) => Math.min(scenario.steps.length - 1, prev + 1))
                  }}
                >
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
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </IconButton>
              </ControlsRow>

              <LegendList>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      width: '1.35rem',
                      borderTop: '2px solid #7f56d9',
                    }}
                  />{' '}
                  {t('howItWorks.legend1')}
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      width: '1.35rem',
                      borderTop: '2px solid #12b76a',
                    }}
                  />{' '}
                  {t('howItWorks.legend2')}
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      width: '1.35rem',
                      borderTop: '2px solid #f04438',
                    }}
                  />{' '}
                  {t('howItWorks.legend3')}
                </li>
                <li style={{ fontSize: '10.5px', opacity: 0.85 }}>{t('howItWorks.dragHint')}</li>
              </LegendList>
            </AsidePanel>
          </BoardGrid>

          <TakeawayText>{scenario.takeaway}</TakeawayText>
        </DiagramBoard>
      </Container>
    </Section>
  )
}
