import React from "react";
import { AppDetailsContext, AppDetailsContextValues } from "../AppDetailsContext";

export function useAppDetails() {

    const details = React.useContext(AppDetailsContext) as AppDetailsContextValues;

    return details
}