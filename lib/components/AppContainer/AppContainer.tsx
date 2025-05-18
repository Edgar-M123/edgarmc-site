'use client'

import React from "react";
import { allAppData } from "@/lib/app_data/app_data";
import styles from "./AppContainer.module.css"
import { PortfolioAppData } from "@/lib/app_data/types";
import Image from "next/image";

function MediaCategory(props: {name: string, onPress: () => void}) {

    return (
        <button className={styles.mediaCategory} onClick={props.onPress}>
            {props.name}
        </button>
    )
}

function MediaContainer(props: {app_data: PortfolioAppData}) {

    const [category, setCategory] = React.useState<"app" | "site" | "ads">("app")

    const goToApp = React.useCallback(() => setCategory("app"), [])

    return (

        <div className={styles.mediaContainer}>
            <nav>
                <MediaCategory name={"App"} onPress={goToApp} />
            </nav>
            

        </div>
    )

}


export function AppContainer(props: {app_id: string}) {

    const data = React.useMemo(() => allAppData[props.app_id], [props.app_id]);

    const [hover, setHover] = React.useState(false);
    const [active, setActive] = React.useState(false);

    const onMouseOver = React.useCallback(() => setHover(true), [])
    const onMouseOut = React.useCallback(() => setHover(false), [])
    

    return (


            <button className={styles.appContainer} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                
                <div style={{display: "flex", gap: "10px", width: "100%"}}>
                    <img src={data.logo} className={styles.logo}/>

                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <p className={styles.title} style={{color: data.color}}>
                            {data.title}
                        </p>
                        
                        <p className={styles.subtitle} style={{color: data.color}}>
                            {data.subtitle}
                        </p>
                    </div>
                </div>


                {active ? (
                    <MediaContainer app_data={data} />
                ) : (
                    <img
                    className={styles.image}
                    src={data.thumbnail}
                    alt={data.title + " thumbnail"}
                    
                    />
                )}

                <p style={{color: hover ? "white" : "transparent", transition: "150ms"}}>Click to see more</p>

                
                
            </button>
    )
}