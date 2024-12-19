import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@cass-ui/react'

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {
    text: '21 de Outubro - Indisponível',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
