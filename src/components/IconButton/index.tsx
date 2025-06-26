import clsx from "clsx";
import type { CSSProperties } from "react";
import type { JSX } from "react/jsx-runtime";
import styles from './index.module.scss'

export type ButtonType = "primary" | "danger" | "default" | null;
export function IconButton(props:{
    onClick?: ()=>void;
    icon?:JSX.Element;
    type?: ButtonType;
    text?: string;
    bordered?: boolean;
    shadow?: boolean;
    className?: string;
    title?: string;
    disabled?: boolean;
    tabIndex?: number;
    autoFocus?: boolean;
    style?: CSSProperties;
    aria?: string;
}){
    return (
        <button className={clsx('clickable',styles['icon-button'],{[styles.border]:props.bordered,[styles.shadow]:props.shadow},styles[props.type ?? ""],props.className)} 
        title={props.title} onClick={props.onClick} style={props.style} >
            {props.icon && (
                <div className={clsx(styles['icon-button-icon'],{'no-dark':props.type === "primary"})}>{props.icon}</div>
            )}
            {props.text && (
                <div className={styles['icon-button-text']}>{props.text}</div>
            )}
        </button>
    )
}