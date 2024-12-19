import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CloseButton, Text, Title, ToastContainer } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  text?: string
}

export const Toast = ({ title, text }: ToastProps) => {
  return (
    <ToastContainer>
      <div>
        <Title>{title}</Title>
        {text && <Text>{text}</Text>}
      </div>
      <CloseButton>
        <X size={20} />
      </CloseButton>
    </ToastContainer>
  )
}
