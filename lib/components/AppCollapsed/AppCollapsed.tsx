'use client'

import React from "react";
import { allAppData } from "@/lib/app_data/app_data";
import styles from "./AppCollapsed.module.css"
import { useAppDetails } from "@/lib/contexts/hooks/useAppDetails";


export function AppCollapsed(props: {app_id: string, isSelected?: boolean}) {

    const data = React.useMemo(() => allAppData[props.app_id], [props.app_id]);
    const {selectedApp, setSelectedApp, setAppBounds} = useAppDetails()

    const [hover, setHover] = React.useState(false);


    const onMouseOver = React.useCallback(() => setHover(true), [])
    const onMouseOut = React.useCallback(() => setHover(false), [])
    const onClick = React.useCallback(() => {
        const container = document.getElementById(props.app_id);
        const bounds = container?.getBoundingClientRect();
        console.log("bounds: ", bounds)
        bounds && setAppBounds(bounds);

        setSelectedApp(props.app_id);
        bounds && setAppBounds(bounds)
    }, [])
    

    return (

            
            <div id={props.app_id} className={styles.container} style={props.isSelected ? {opacity: 0}: undefined} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                
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


                    <img
                    className={styles.image}
                    src={data.thumbnail}
                    alt={data.title + " thumbnail"}
                    
                    />

                <p style={{color: hover ? "white" : "transparent", transition: "150ms"}}>Click to see more</p>

                
                
            </div>
    )
}