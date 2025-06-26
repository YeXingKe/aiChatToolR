import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from './index.module.scss'
import MaxIcon from "@/assets/icons/max.svg?react";
import MinIcon from "@/assets/icons/min.svg?react";
import CloseIcon from "@/assets/icons/close.svg?react";

interface ModalProps {
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children?: any;
    actions?:React.ReactNode[];
    defaultMax?:boolean;
    footer?:React.ReactNode;
    onClose?:()=>void
}

/**
 * Modal工具
 * @param props 
 * @returns 
 */
export function Modal(props:ModalProps){
    useEffect(()=>{
        const onKeyDown = (e:KeyboardEvent) => {
            if(e.key === 'Escape'){
                // Esc键
                props.onClose?.()
            }
        }
        window.addEventListener('keydown',onKeyDown)
    },[])

    const [isMax,setMax] = useState(!!props.defaultMax)

    return (
        <div className={clsx(styles['modal-container'],{[styles['modal-container-max']]: isMax})}>
            <div className={styles['modal-header']}>
                <div className={styles['modal-title']}>{props.title}</div>
                <div className={styles['modal-header-actions']}>
                    <div className={styles['modal-header-action']} onClick={()=>setMax(!isMax)}>
                        {isMax?<MinIcon /> : <MaxIcon />}
                    </div>
                    <div className={styles['modal-header-action']} onClick={props.onClose}>
                        <CloseIcon />
                    </div>
                </div>                
            </div>
            <div className={styles['modal-content']}>{props.children}</div>
            <div className={styles['modal-footer']}>
                {props.footer}
                <div className={styles['modal-actions']}>
                    {props.actions?.map((action,i)=>(
                        <div key={i} className={styles['modal-action']}>{action}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}