import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  maxWidth: '16rem',
  padding: '0.75rem 1rem',
  backgroundColor: '$gray900',
  borderRadius: 5,

  position: 'absolute',
  bottom: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 10,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&::after': {
    content: '',
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '8px 8px 0 8px',
    borderColor: '$gray900 transparent transparent transparent',
    top: '100%',
    left: 'calc(50% - 8px)',
  },

  '&:hover': {
    backgroundColor: '$gray500',
  },
})

export const Text = styled('p', {
  width: 'fit-content',
  margin: 0,
  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$sm',
  lineHeight: '$shorter',
  color: '$white',
  textAlign: 'center',
})
