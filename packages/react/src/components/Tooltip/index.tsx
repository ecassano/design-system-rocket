import { ComponentProps } from 'react'
import { TooltipContainer, Text } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  text: string
}

export const Tooltip = ({ text }: TooltipProps) => {
  return (
    <TooltipContainer>
      <Text>{text}</Text>
    </TooltipContainer>
  )
}
