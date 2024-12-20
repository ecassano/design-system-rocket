import { useEffect, useState, ComponentProps } from 'react'
import { X } from 'phosphor-react'
import { CloseButton, Text, Title, ToastContainer } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  text?: string
  isVisible?: boolean
  autoClose?: number
  onClose?: () => void
}

export const Toast = ({
  title,
  text,
  isVisible = true,
  autoClose,
  onClose,
}: ToastProps) => {
  const [visible, setVisible] = useState(isVisible)

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setVisible(false)
        onClose?.()
      }, autoClose)

      return () => clearTimeout(timer)
    }
  }, [autoClose, onClose])

  if (!visible) return null

  return (
    <ToastContainer>
      <div>
        <Title>{title}</Title>
        {text && <Text>{text}</Text>}
      </div>
      <CloseButton
        onClick={() => {
          setVisible(false)
          onClose?.()
        }}
      >
        <X size={20} />
      </CloseButton>
    </ToastContainer>
  )
}
