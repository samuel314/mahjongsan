import classnames from 'classnames'
import { ReactNode } from 'react'
import images from '../../images'
import { KeyValue } from '../../lib/keyboard'
import { normalize } from '../../lib/normalize'
import { CharStatus } from '../../lib/statuses'

type Props = {
  children?: ReactNode
  value: KeyValue
  width?: number
  status?: CharStatus
  onClick: (value: KeyValue) => void
}

export const Key = ({
  children,
  status,
  width = 40,
  value,
  onClick,
}: Props) => {
  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 cursor-pointer select-none dark:text-white',
    {
      'bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 active:bg-slate-400':
        !status,
      'bg-slate-400 dark:bg-slate-800 text-white': status === 'absent',
      'bg-green-500 hover:bg-green-600 active:bg-green-700 text-white':
        status === 'correct',
      'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-500 dark:bg-yellow-500 text-white':
        status === 'present',
    }
  )

  var dragging = false

  const handleOnTouch: React.TouchEventHandler<HTMLButtonElement> = (event) => {
    if (dragging) return
    onClick(value)
    event.currentTarget.blur()
  }

  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (
      event.nativeEvent instanceof PointerEvent &&
      (event.nativeEvent.pointerType === 'mouse' ||
        event.nativeEvent.pointerType === 'pen')
    ) {
      onClick(value)
      event.currentTarget.blur()
    }
    event.preventDefault()
    event.stopPropagation()
    return
  }

  const handleTouchMove: React.TouchEventHandler<HTMLButtonElement> = (
    event
  ) => {
    dragging = true
  }
  const handleTouchStart: React.TouchEventHandler<HTMLButtonElement> = (
    event
  ) => {
    dragging = false
  }

  return (
    <button
      style={{ width: `${width}px`, height: '58px' }}
      className={classes}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleOnTouch}
      onClick={handleOnClick}
    >
      {normalize(value)?.length! === 2 ? (
        <img alt={normalize(value)} src={images[normalize(value)!]} />
      ) : (
        children || normalize(value)
      )}
    </button>
  )
}
