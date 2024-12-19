import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  fontFamily: '$default',
  width: 360,
  height: 'auto',
  padding: '0.75rem 1.25rem',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: 6,

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

export const Title = styled('h3', {
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$tall',
  color: '$white',
  margin: 0,
})

export const Text = styled('p', {
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$short',
  color: '$gray200',
  margin: 0,
})

export const CloseButton = styled('button', {
  width: 20,
  height: 20,
  lineHeight: 0,
  padding: 0,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  color: '$white',
  border: 'none',
  boxShadow: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
