import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";

import styles from "@/pages/Home/index.module.scss";


import SettingsIcon from "@/assets/icons/settings.svg?react";
import GithubIcon from "@/assets/icons/github.svg?react";
import ChatGptIcon from "@/assets/icons/chatgpt.svg?react";
import AddIcon from "@/assets/icons/add.svg?react";
import DeleteIcon from "@/assets/icons/delete.svg?react";
import MaskIcon from "@/assets/icons/mask.svg?react";
import McpIcon from "@/assets/icons/mcp.svg?react";
import DragIcon from "@/assets/icons/drag.svg?react";
import DiscoveryIcon from "@/assets/icons/discovery.svg?react";


import Locale from "@/locales";

import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { IconButton } from "../IconButton";
import { isIOS, useMobileScreen } from "@/utils";
import { useAppConfig } from "@/stores";
import { RoutePath } from "@/utils/constant";



/**
 * 边栏容器
 * @param props 
 * @returns 
 */
export function SideBarContainer(props: {
  children: React.ReactNode;
  onDragStart?: (e: MouseEvent) => void;
  shouldNarrow?: boolean;
  className?: string;
}) {
  const isMobileScreen = useMobileScreen();
   //   缓存计算结果，避免在每次渲染时都进行不必要的复杂计算
  const isIOSMobile = useMemo(
    () => isIOS() && isMobileScreen,
    [isMobileScreen],
  );
  const { children, className, onDragStart, shouldNarrow } = props;
  return (
    <div
      className={clsx(styles.sidebar, className, {
        [styles["narrow-sidebar"]]: shouldNarrow,
      })}
      style={{
        transition: isMobileScreen && isIOSMobile ? "none" : undefined,
      }}
    >
      {children}
      <div
        className={styles["sidebar-drag"]}
      >
        <DragIcon />
      </div>
    </div>
  );
}

export function SideBarHeader(props: {
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  logo?: React.ReactNode;
  children?: React.ReactNode;
  shouldNarrow?: boolean;
}) {
  const { title, subTitle, logo, children, shouldNarrow } = props;
  return (
    <Fragment>
      <div
        className={clsx(styles["sidebar-header"], {
          [styles["sidebar-header-narrow"]]: shouldNarrow,
        })}
        data-tauri-drag-region
      >
        <div className={styles["sidebar-title-container"]}>
          <div className={styles["sidebar-title"]} data-tauri-drag-region>
            {title}
          </div>
          <div className={styles["sidebar-sub-title"]}>{subTitle}</div>
        </div>
        <div className={clsx(styles["sidebar-logo"], "no-dark")}>{logo}</div>
      </div>
      {children}
    </Fragment>
  );
}

export function SideBarBody(props: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  const { onClick, children } = props;
  return (
    <div className={styles["sidebar-body"]} onClick={onClick}>
      {children}
    </div>
  );
}

export function SideBarTail(props: {
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
}) {
  const { primaryAction, secondaryAction } = props;

  return (
    <div className={styles["sidebar-tail"]}>
      <div className={styles["sidebar-actions"]}>{primaryAction}</div>
      <div className={styles["sidebar-actions"]}>{secondaryAction}</div>
    </div>
  );
}

export function SideBar(props: { className?: string }) {
  // useHotKey();
  // const { onDragStart, shouldNarrow } = useDragSideBar();
  const navigate = useNavigate();
  const config = useAppConfig();
//   useEffect(() => {
//     // 检查 MCP 是否启用
//     const checkMcpStatus = async () => {
//       const enabled = await isMcpEnabled();
//       setMcpEnabled(enabled);
//       console.log("[SideBar] MCP enabled:", enabled);
//     };
//     checkMcpStatus();
//   }, []);

  return (
    <SideBarContainer
      {...props}
    >
      <SideBarHeader
        title="NextChat"
        subTitle="Build your own AI assistant."
        logo={<ChatGptIcon />}
      >
        <div className={styles["sidebar-header-bar"]}>
          <IconButton
            icon={<MaskIcon />}
            text={Locale.Mask.Name}
            className={styles["sidebar-bar-button"]}
            onClick={() => {
              if (config.dontShowMaskSplashScreen !== true) {
                navigate(RoutePath.NewChat, { state: { fromHome: true } });
              } else {
                navigate(RoutePath.Masks, { state: { fromHome: true } });
              }
            }}
            shadow
          />
        </div>
      </SideBarHeader>
      <SideBarBody
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            navigate(RoutePath.Home);
          }
        }}
      >
        {<div>聊天列表</div>}
        {/* <ChatList narrow={shouldNarrow} /> */}
      </SideBarBody>
      <SideBarTail
        primaryAction={
          <>
            <div className={clsx(styles["sidebar-action"], styles.mobile)}>
              <IconButton
                icon={<DeleteIcon />}
                onClick={async () => {}}
              />
            </div>
            <div className={styles["sidebar-action"]}>
              <Link to={RoutePath.Settings}>
                <IconButton
                  aria={Locale.Settings.Title}
                  icon={<SettingsIcon />}
                  shadow
                />
              </Link>
            </div>
            <div className={styles["sidebar-action"]}>
            </div>
          </>
        }
        secondaryAction={
          <IconButton
            icon={<AddIcon />}
            text={Locale.Home.NewChat}
            onClick={() => {}}
            shadow
          />
        }
      />
    </SideBarContainer>
  );
}
