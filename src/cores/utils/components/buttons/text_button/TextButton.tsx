import './TextButton.css'

import React from 'react'

interface TextButtonProps {
  label: string,
  className?: string | undefined,
  onTap: React.MouseEventHandler<HTMLButtonElement>
}

const TextButton: React.FC<TextButtonProps> = (props) => {
  return (
    <button onClick={props.onTap} className={`${props.className} textButton`}>{props.label}</button>
  )
}

export default TextButton