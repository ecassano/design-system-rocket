import { ComponentProps, useState } from 'react'
import { TooltipContainer, Text } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  text: string
}

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleMouseEnter = () => setIsVisible(true)
  const handleMouseLeave = () => setIsVisible(false)

  return (
    <TooltipContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', position: 'relative' }}
    >
      {children}
      {isVisible && <Text>{text}</Text>}
    </TooltipContainer>
  )
}
