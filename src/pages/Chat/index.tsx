
import clsx from "clsx"
import styles from "./index.module.scss"
import { IconButton } from "@/components/IconButton"
import SendWhiteIcon from "@/assets/icons/send-white.svg?react";
import { Fragment } from "react/jsx-runtime";
import { ChatActions } from "@/components/ChatActions";
import { useEffect, useRef, useState } from "react";


export function Chat(){
    const [showPromptModal, setShowPromptModal] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    useEffect(()=>{
        inputRef.current?.focus() // 聚焦聊天框
    })
    return (
        <div className={styles.chat}>
            <div className="window-header">
                <div className={clsx("window-header-title",styles['chat-body-title'])}>
                    <div className={clsx("window-header-main-title",styles['chat-body-main-title'])}>新的聊天</div>
                    <div className="window-header-sub-title">10个聊天</div>
                </div>
                {/* <PromptToast
                    showModal={showPromptModal}
                    setShowModal={setShowPromptModal}
                /> */}
            </div>
            <div className={styles['chat-main']}>
                <div className={styles['chat-body-container']}>
                    <div className={styles['chat-body']}>
                        <Fragment></Fragment>
                    </div>
                    <div className={styles['chat-input-panel']}>
                        <ChatActions showPromptHints={() => {}} showPromptModal={() => setShowPromptModal(true)}/>
                        <label className={clsx(styles['chat-input-panel-inner'])} htmlFor="chat-input">
                            <textarea ref={inputRef} id="chat-input" className={styles['chat-input']}/>
                            <IconButton icon={<SendWhiteIcon/>} text='发送' className={styles['chat-input-send']} type="primary"/>
                        </label>
                   </div>
                </div>
            </div>
        </div>
    )
}