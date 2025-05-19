'use client'

import React from "react";
import { useAppDetails } from "@/lib/contexts/hooks/useAppDetails";
import styles from "./AppExpanded.module.css"
import {AnimatePresence, motion, TargetAndTransition} from 'motion/react'
import { AppCollapsed } from "../AppCollapsed/AppCollapsed";
import { allAppData } from "@/lib/app_data/app_data";

function MediaCategory(props: {name: string, onPress: () => void}) {

    return (
        <button className={styles.mediaCategory} onClick={props.onPress}>
            {props.name}
        </button>
    )
}

function MediaContainer(props: {app_id: string}) {

    const app_data = React.useMemo(() => allAppData[props.app_id], [props.app_id]);
    
    const [category, setCategory] = React.useState<"app" | "site" | "ads">("app")

    const goToApp = React.useCallback(() => setCategory("app"), [])
    const goToSite = React.useCallback(() => setCategory("site"), [])
    const goToAds = React.useCallback(() => setCategory("ads"), [])
    const goToCode = React.useCallback(() => window.open(app_data.code.url, '_blank')?.focus(), [])

    return (

        <div className={styles.mediaContainer}>

            <nav style={{display: "flex", flexDirection: "row"}}>
                <MediaCategory name={"App"} onPress={goToApp} />
                <MediaCategory name={"Marketing Site"} onPress={goToSite} />
                <MediaCategory name={"Ads"} onPress={goToAds} />
                <MediaCategory name={app_data.code.private ? "Code ( private repo sry )" : "Code"} onPress={app_data.code.private ? () => null : goToCode} />
            </nav>

            <div>
                {app_data.app_info.pics.map((value) => (<img style={{objectFit: "contain", maxWidth: "100px"}} src={value}/>))}
            </div>

        </div>
    )

}


export function AppExpanded(props: {app_id: string}) {
    const app_data = React.useMemo(() => allAppData[props.app_id], [props.app_id]);


    const {setSelectedApp, appBounds} = useAppDetails();
    const [isSetup, setIsSetup] = React.useState(false)

    const exit = React.useCallback(() => {setIsSetup(false); setSelectedApp(null)}, [])
    
    const startingStyle = React.useMemo(() => ({
        display: "flex",
        flexDirection: "column",
        height: appBounds?.height,
        width: `${appBounds?.width}px`,
        bottom: appBounds?.bottom,
        left: appBounds?.left,
        top: appBounds?.top,
        right: appBounds?.right,
        backgroundColor: "transparent",
        overflow: 'hidden',
        position: "absolute",
    }), [appBounds]) as TargetAndTransition
    
    const endStyle = React.useMemo(() => ({
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }), [])

    React.useEffect(() => {
        setIsSetup(true)
    }, [])

    return (

        <motion.div 
        transition={{duration: 0.25, ease: "easeInOut"}} 
        onClick={exit} 
        style={{
            alignItems: isSetup ? 'center' : "flex-start",
            justifyContent: isSetup ? 'center' : "flex-start",
        }} 
        initial={startingStyle} 
        animate={endStyle} 
        exit={startingStyle}
        >
            {/* <AppCollapsed app_id={props.app_id} /> */}
            <motion.div layout transition={{duration: 0.25, ease: "easeInOut"}} style={{width: "1200px", backgroundColor: "black", padding: "1rem", borderRadius: "1rem"}}>
                <div style={{display: "flex", gap: "10px", width: "100%"}}>
                    <img src={app_data.logo} className={styles.logo}/>

                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <p className={styles.title} style={{color: app_data.color}}>
                            {app_data.title}
                        </p>
                        
                        <p className={styles.subtitle} style={{color: app_data.color}}>
                            {app_data.subtitle}
                        </p>
                    </div>
                </div>
                <MediaContainer app_id={props.app_id} />
            </motion.div>
            
        </motion.div>

    )


}