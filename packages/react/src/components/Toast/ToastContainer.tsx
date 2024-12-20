import React, { createContext, ReactNode, useContext, useState } from 'react'
import { Toast, ToastProps } from './Toast'

interface ToastProviderProps {
  children: ReactNode
}

interface ToastContextType {
  addToast: (toast: Omit<ToastProps, 'isVisible'>) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
}: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const addToast = (toast: Omit<ToastProps, 'isVisible'>) => {
    const id = String(Date.now())
    setToasts((currentToasts) => [
      ...currentToasts,
      { ...toast, id, isVisible: true },
    ])
  }

  const removeToast = (id: string) => {
    setToasts((currentToasts) =>
      currentToasts.map((toast) =>
        toast.id === id ? { ...toast, isVisible: false } : toast,
      ),
    )
  }

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id ? toast.id : '')}
        />
      ))}
    </ToastContext.Provider>
  )
}

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
