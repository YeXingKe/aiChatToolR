
import clsx from "clsx"
import styles from "./index.module.scss"
import { IconButton } from "@/components/IconButton"
import SendWhiteIcon from "@/assets/icons/send-white.svg?react";

export function Chat(){
    return (
        <div className={styles.chat}>
            <div className="window-header">
                <div className={clsx("window-header-title",styles['chat-body-title'])}>
                    <div className={clsx("window-header-main-title",styles['chat-body-main-title'])}>新的聊天</div>
                    <div className="window-header-sub-title">10个聊天</div>
                </div>
            </div>
            <div className={styles['chat-main']}>
                <div className={styles['chat-body-container']}></div>
                <div className={styles['chat-input-panel']}>
                    <label className={clsx(styles['chat-input-panel-inner'],{[styles['chat-input-panel-inner-attach']]:true})} htmlFor="chat-input">
                        <textarea id="chat-input" className={styles['chat-input']}/>
                        <IconButton icon={<SendWhiteIcon/>} text='发送' className={styles['chat-input-send']} type="primary"/>
                    </label>
                </div>
            </div>
        </div>
    )
}