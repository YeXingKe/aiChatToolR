import { useRef, useState, type JSX } from 'react'
import styles from './index.module.scss'
import clsx from 'clsx'

import SettingsIcon from '@/assets/icons/chat-settings.svg?react'
import BottomIcon from '@/assets/icons/bottom.svg?react'
import ShortcutkeyIcon from "@/assets/icons/shortcutkey.svg?react";
import PromptIcon from "@/assets/icons/prompt.svg?react";
export function ChatAction(props: {
  text: string
  icon: JSX.Element
  onClick: () => void
}) {
  const iconRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState({
    full: 16,
    icon: 16,
  })

  function updateWidth() {
    if (!iconRef.current || !textRef.current) return
    const getWidth = (dom: HTMLDivElement) => dom.getBoundingClientRect().width
    const textWidth = getWidth(textRef.current)
    const iconWidth = getWidth(iconRef.current)
    setWidth({
      full: textWidth + iconWidth,
      icon: iconWidth,
    })
  }

  return (
    <div
      className={clsx(styles['chat-input-action'], 'clickable')}
      onClick={() => {
        props.onClick()
        setTimeout(updateWidth, 1)
      }}
      onMouseEnter={updateWidth}
      onTouchStart={updateWidth}
      style={
        {
          '--icon-width': `${width.icon}px`,
          '--full-width': `${width.full}px`,
        } as React.CSSProperties
      }
    >
      <div ref={iconRef} className={styles['icon']}>
        {props.icon}
      </div>
      <div className={styles['text']} ref={textRef}>
        {props.text}
      </div>
    </div>
  )
}

export function ChatActions(props: { showPromptModal:()=> void,showPromptHints: () => void }) {
  return (
    <div className={styles['chat-input-actions']}>
      <ChatAction
        text="滚到最新"
        icon={<BottomIcon />}
        onClick={props.showPromptHints}
      />
      <ChatAction
        onClick={props.showPromptHints}
        text="快捷指令"
        icon={<PromptIcon />}
      />
      <ChatAction
        text="对话设置"
        icon={<SettingsIcon />}
        onClick={props.showPromptHints}
      />
      <ChatAction
        onClick={() => {}}
        text="键盘快捷指令"
        icon={<ShortcutkeyIcon />}
      />
    </div>
  )
}
