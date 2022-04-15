import React, { HTMLProps } from 'react'

export interface BadgeProps extends HTMLProps<HTMLSpanElement> {
  title: string
  badgeType?: string //TODO: change this to extract type
  isCloseable?: boolean
  closeText?: string
}

export function Badge({
  title,
  badgeType,
  isCloseable,
  closeText,
  ...props
}: BadgeProps) {
  return (
    <span {...props} className={`badge ${badgeType}`}>
      <strong>{title}</strong>
      {isCloseable && (
        <button className="close">
          <span className="sr-only">{closeText}</span>
        </button>
      )}
    </span>
  )
}

export default Badge