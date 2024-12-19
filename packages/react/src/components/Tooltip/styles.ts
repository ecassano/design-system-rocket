import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  width: 'fit-content',
  height: 'max-content',
  maxHeight: '4rem',
  maxWidth: '16rem',
  borderRadius: 5,
  padding: '0.75rem 1rem',
  backgroundColor: '$gray900',

  display: 'flex',
  justifyContent: 'center',

  position: 'relative',

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
