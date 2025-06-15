import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";

import styles from "@/pages/Home/index.module.scss";


import SettingsIcon from "@/assets/icons/settings.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChatGptIcon from "@/assets/icons/chatgpt.svg";
import AddIcon from "@/assets/icons/add.svg";
import DeleteIcon from "@/assets/icons/delete.svg";
import MaskIcon from "@/assets/icons/mask.svg";
import McpIcon from "@/assets/icons/mcp.svg";
import DragIcon from "@/assets/icons/drag.svg";
import DiscoveryIcon from "@/assets/icons/discovery.svg";


import Locale from "@/locales";

import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { IconButton } from "../IconButton";
import { isIOS, useMobileScreen } from "@/utils";
import { DEFAULT_SIDEBAR_WIDTH, MAX_SIDEBAR_WIDTH, MIN_SIDEBAR_WIDTH, NARROW_SIDEBAR_WIDTH, RoutePath } from "@/utils/constant";
import { useAppConfig } from "@/stores";


export function useHotKey() {
//   const chatStore = useChatStore();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
    //   if (e.altKey || e.ctrlKey) {
    //     if (e.key === "ArrowUp") {
    //       chatStore.nextSession(-1);
    //     } else if (e.key === "ArrowDown") {
    //       chatStore.nextSession(1);
    //     }
    //   }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });
}

export function useDragSideBar() {
  const limit = (x: number) => Math.min(MAX_SIDEBAR_WIDTH, x);

  const config = useAppConfig();
  const startX = useRef(0);
  const startDragWidth = useRef(config.sidebarWidth ?? DEFAULT_SIDEBAR_WIDTH);
  const lastUpdateTime = useRef(Date.now());

  const toggleSideBar = () => {
    config.update((config) => {
      if (config.sidebarWidth < MIN_SIDEBAR_WIDTH) {
        config.sidebarWidth = DEFAULT_SIDEBAR_WIDTH;
      } else {
        config.sidebarWidth = NARROW_SIDEBAR_WIDTH;
      }
    });
  };

  const onDragStart = (e: MouseEvent) => {
    // Remembers the initial width each time the mouse is pressed
    startX.current = e.clientX;
    startDragWidth.current = config.sidebarWidth;
    const dragStartTime = Date.now();

    const handleDragMove = (e: MouseEvent) => {
      if (Date.now() < lastUpdateTime.current + 20) {
        return;
      }
      lastUpdateTime.current = Date.now();
      const d = e.clientX - startX.current;
      const nextWidth = limit(startDragWidth.current + d);
      config.update((config) => {
        if (nextWidth < MIN_SIDEBAR_WIDTH) {
          config.sidebarWidth = NARROW_SIDEBAR_WIDTH;
        } else {
          config.sidebarWidth = nextWidth;
        }
      });
    };

    const handleDragEnd = () => {
      // In useRef the data is non-responsive, so `config.sidebarWidth` can't get the dynamic sidebarWidth
      window.removeEventListener("pointermove", handleDragMove);
      window.removeEventListener("pointerup", handleDragEnd);

      // if user click the drag icon, should toggle the sidebar
      const shouldFireClick = Date.now() - dragStartTime < 300;
      if (shouldFireClick) {
        toggleSideBar();
      }
    };

    window.addEventListener("pointermove", handleDragMove);
    window.addEventListener("pointerup", handleDragEnd);
  };

  const isMobileScreen = useMobileScreen();
  const shouldNarrow =
    !isMobileScreen && config.sidebarWidth < MIN_SIDEBAR_WIDTH;

  useEffect(() => {
    const barWidth = shouldNarrow
      ? NARROW_SIDEBAR_WIDTH
      : limit(config.sidebarWidth ?? DEFAULT_SIDEBAR_WIDTH);
    const sideBarWidth = isMobileScreen ? "100vw" : `${barWidth}px`;
    document.documentElement.style.setProperty("--sidebar-width", sideBarWidth);
  }, [config.sidebarWidth, isMobileScreen, shouldNarrow]);

  return {
    onDragStart,
    shouldNarrow,
  };
}

/**
 * 边栏容器
 * @param props 
 * @returns 
 */
export function SideBarContainer(props: {
  children: React.ReactNode;
  onDragStart: (e: MouseEvent) => void;
  shouldNarrow: boolean;
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onPointerDown={(e:any) => onDragStart(e as any)}
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
  useHotKey();
  const { onDragStart, shouldNarrow } = useDragSideBar();
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
      onDragStart={onDragStart}
      shouldNarrow={shouldNarrow}
      {...props}
    >
      <SideBarHeader
        title="NextChat"
        subTitle="Build your own AI assistant."
        logo={<ChatGptIcon />}
        shouldNarrow={shouldNarrow}
      >
        <div className={styles["sidebar-header-bar"]}>
          <IconButton
            icon={<MaskIcon />}
            text={shouldNarrow ? undefined : Locale.Mask.Name}
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
          {/* {mcpEnabled && (
            <IconButton
              icon={<McpIcon />}
              text={shouldNarrow ? undefined : Locale.Mcp.Name}
              className={styles["sidebar-bar-button"]}
              onClick={() => {
                navigate(Path.McpMarket, { state: { fromHome: true } });
              }}
              shadow
            />
          )} */}
          {/* <IconButton
            icon={<DiscoveryIcon />}
            text={shouldNarrow ? undefined : Locale.Discovery.Name}
            className={styles["sidebar-bar-button"]}
            onClick={() => setshowDiscoverySelector(true)}
            shadow
          /> */}
        </div>
        {/* {showDiscoverySelector && (
          <Selector
            items={[
              ...DISCOVERY.map((item) => {
                return {
                  title: item.name,
                  value: item.path,
                };
              }),
            ]}
            onClose={() => setshowDiscoverySelector(false)}
            onSelection={(s) => {
              navigate(s[0], { state: { fromHome: true } });
            }}
          />
        )} */}
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
                onClick={async () => {
                //   if (await showConfirm(Locale.Home.DeleteChat)) {
                //     chatStore.deleteSession(chatStore.currentSessionIndex);
                //   }
                }}
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
              {/* <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                <IconButton
                  aria={Locale.Export.MessageFromChatGPT}
                  icon={<GithubIcon />}
                  shadow
                />
              </a> */}
            </div>
          </>
        }
        secondaryAction={
          <IconButton
            icon={<AddIcon />}
            text={shouldNarrow ? undefined : Locale.Home.NewChat}
            onClick={() => {
            //   if (config.dontShowMaskSplashScreen) {
            //     chatStore.newSession();
            //     navigate(Path.Chat);
            //   } else {
            //     navigate(Path.NewChat);
            //   }
            }}
            shadow
          />
        }
      />
    </SideBarContainer>
  );
}
