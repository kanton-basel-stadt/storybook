import * as React from 'react'
import { useRef, useEffect } from 'react'
import { render } from 'lit-html'
import { Icon } from './Icon'

export function IconLitWrapper({ value }: { value: string }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      render(Icon(value), containerRef.current)
    }
  }, [value])

  return <div ref={containerRef} />
}
