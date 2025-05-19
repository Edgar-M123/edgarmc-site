'use client'

import React, { Dispatch, SetStateAction } from "react";


export const AppDetailsContext = React.createContext({});

export interface AppDetailsContextValues {
    selectedApp: string | null;
    setSelectedApp: Dispatch<SetStateAction<string | null>>;
    appBounds: DOMRect | null;
    setAppBounds: Dispatch<SetStateAction<DOMRect | null>>;
}

export function AppDetailsProvider(props: {children: any}) {

    const [selectedApp, setSelectedApp] = React.useState<string | null>(null);
    const [appBounds, setAppBounds] = React.useState<DOMRect | null>(null)

    const value = {
        selectedApp,
        setSelectedApp,
        appBounds,
        setAppBounds,
    } as AppDetailsContextValues
    


    return (
        <AppDetailsContext.Provider value={value}>
            {props.children}
        </AppDetailsContext.Provider>
    )
}