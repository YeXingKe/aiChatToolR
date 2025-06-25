import type { Prompt } from '@/typing'
import styles from './index.module.scss'
import clsx from 'clsx'
import { useRef, useState } from 'react'

export type RenderPrompt = Pick<Prompt, 'title' | 'content'>

export function PromptHints(props: {
  prompts: RenderPrompt[]
  onPromptSelect: (prompt: RenderPrompt) => void
}) {
  const selectedRef = useRef<HTMLDivElement>(null)
  const [selectIndex, setSelectIndex] = useState(0)
  return (
    <div className={styles['prompt-hints']}>
      {props.prompts.map((prompt, i) => (
        <div
          ref={i === selectIndex ? selectedRef : null}
          className={clsx(styles['prompt-hint'], {
            [styles['prompt-hint-selected']]: i === selectIndex,
          })}
          key={prompt.title + i.toString()}
          onClick={() => props.onPromptSelect(prompt)}
          onMouseEnter={() => setSelectIndex(i)}
        >
          <div className={styles['hint-title']}>{prompt.title}</div>
          <div className={styles['hint-content']}>{prompt.content}</div>
        </div>
      ))}
    </div>
  )
}
