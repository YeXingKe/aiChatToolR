import {  Route, HashRouter as Router, Routes } from "react-router-dom"
import styles from "./index.module.scss"
import { RoutePath } from "@/utils/constant"
import clsx from "clsx"
import { SideBar } from "@/components/SideBar"
import { Chat } from "../Chat"
import { useMobileScreen } from "@/utils"
import { getLang } from "@/locales"

export function WindowContent(props:{children:React.ReactNode}){
    return (
        <div className={styles['window-content']}>
            {props?.children}
        </div>
    )
}

function Screen(){
    const isHome = location.pathname === RoutePath.Home
    const isMobileScreen = useMobileScreen();
    const shouldTightBorder =
    getClientConfig()?.isApp || (config.tightBorder && !isMobileScreen);

    const renderContent = () => {
        return (
            <>
            <SideBar
                className={clsx({
                [styles["sidebar-show"]]: isHome,
                })}
            />
            <WindowContent>
                <Routes>
                    <Route path={RoutePath.Home} element={<Chat />} />
                    {/* <Route path={RoutePath.NewChat} element={<NewChat />} />
                    <Route path={RoutePath.Masks} element={<MaskPage />} />
                    <Route path={RoutePath.Chat} element={<Chat />} />
                    <Route path={RoutePath.Settings} element={<Settings />} /> */}
                    </Routes>
            </WindowContent>
            </>
        )
    }
    return (
        <div
          className={clsx(styles.container, {
            [styles["tight-container"]]: shouldTightBorder,
          })}
        >
          {renderContent()}
        </div>
      );
}

export function Home(){
    return (
        <Router>
           <Screen />
        </Router>
    )
}