import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@cass-ui/react'

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    text: '21 de Outubro - Indisponível',
    children: (
      <Box
        css={{
          padding: '1rem',
          backgroundColor: '$gray100',
          borderRadius: 5,
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        Passe o mouse por cima
      </Box>
    ),
  },
}
