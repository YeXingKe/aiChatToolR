import { IconButton } from "../IconButton"
import { Modal } from "../UILib"
import ConfirmIcon from "@/assets/icons/confirm.svg?react";
import styles from './index.module.scss'

export function ShortcutKeyModal(props:{onClose:()=>void}){
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0
    const shortcuts = [
        {title:'打开新聊天',keys:isMac?["","Shift","O"]:["Ctrl","Shift","O"]},
        {title:'聚焦输入框',keys:isMac?["","Shift","O"]:["Ctrl","Shift","O"]},
        {title:'复制最后一个代码块',keys:isMac?["","Shift",";"]:["Ctrl","Shift",";"]},
        {title:'复制最后一个回复',keys:isMac?["","Shift","C"]:["Ctrl","Shift","C"]},
        {title:'显示快捷方式',keys:isMac?["","/"]:["Ctrl","Shift","/"]},
        {title:'清除上下文',keys:isMac?["","Shift","backspace"]:["Ctrl","Shift","backspace"]},
    ]
    
    return (
        <div className="modal-mask">
            <Modal title="键盘快捷方式" onClose={props.onClose} 
                   actions={[<IconButton type="primary" text="确认" icon={<ConfirmIcon />} onClick={()=>props.onClose()}/>]} key="ok">
                 <div className={styles['shortcut-key-container']}>
                    <div className={styles['shortcut-key-grid']}>
                       {shortcuts.map((s,i)=>(
                        <div className={styles['shortcut-key-item']} key={i}>
                            <div className={styles['shortcut-key-title']}>{s.title}</div>
                            <div className={styles['shortcut-key-keys']}>{
                             s.keys.map((key,j)=>(
                                <div key={j} className={styles['shortcut-key']}>
                                    <span>{key}</span>
                                </div>
                             ))
                            }</div>
                        </div>
                       ))}
                    </div>
                 </div>
            </Modal>
        </div>
    )
}