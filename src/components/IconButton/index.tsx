import type { CSSProperties } from "react";
import type { JSX } from "react/jsx-runtime";

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
        <button title={props.title} onClick={props.onClick}>
            {props.icon && (
                <div>{props.icon}</div>
            )}
            {props.text && (
                <div>{props.text}</div>
            )}
        </button>
    )
}