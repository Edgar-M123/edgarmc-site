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

    const [active, setActive] = React.useState(false);
    

    return (

        <div className={styles.container}>

            <div className={styles.appContainer}>
                
                <div className={styles.title} style={{color: data.color}}>
                    <img src={data.logo} />
                    {data.title}
                </div>
                
                <div className={styles.subtitle} style={{color: data.color}}>
                    {data.subtitle}
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



                <div className={styles.infoContainer}>

                </div>

                
            </div>
        </div>
    )
}