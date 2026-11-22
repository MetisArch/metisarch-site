import React, { useEffect, useState } from 'react'
import { BubbleOverlay, Card, CardContent, CardTitle, Grid, IconCircle } from './styles'

export interface AutoHoverCardItem {
  title: string
  icon: React.ReactNode
  backgroundClassName: string
}

interface AutoHoverCardsProps {
  cards: AutoHoverCardItem[]
  rotationInterval?: number
  autoRotate?: boolean
  alternate?: boolean
}

export const AutoHoverCards: React.FC<AutoHoverCardsProps> = ({
  cards,
  rotationInterval = 2400,
  autoRotate = true,
  alternate = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!autoRotate || cards.length <= 1) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length)
    }, rotationInterval)
    return () => clearInterval(timer)
  }, [autoRotate, cards.length, rotationInterval])

  return (
    <Grid>
      {cards.map((card, index) => {
        const isEven = alternate && index % 2 === 0
        const isActive = activeIndex === index
        return (
          <Card key={card.title} $active={isActive} $alignEnd={isEven}>
            <BubbleOverlay $active={isActive} className={`card-bubble-overlay ${card.backgroundClassName}`} />
            <CardContent $reverse={isEven}>
              <IconCircle>{card.icon}</IconCircle>
              <CardTitle>{card.title}</CardTitle>
            </CardContent>
          </Card>
        )
      })}
    </Grid>
  )
}
