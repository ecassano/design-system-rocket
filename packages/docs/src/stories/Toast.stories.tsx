import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@cass-ui/react'

export default {
  title: 'Feedback/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    text: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    placeholder: 'Type your name',
  },
}
