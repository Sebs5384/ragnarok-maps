"use client";

import { useContext, createContext } from "react";
import { useFetchMaps } from "../hooks/index";
import { IMapsContextProps, IChildren } from "./interfaces/index";

export const MapsContext = createContext<IMapsContextProps | undefined>(undefined);

export function MapsProvider({ children }: IChildren): React.ReactElement {
    const { loading, maps, error } = useFetchMaps(40, 60);
    
    return (
        <MapsContext.Provider value={{ maps }}>
            {children}
        </MapsContext.Provider>
    );
};

export function useMapsContext(): IMapsContextProps {
    const context = useContext(MapsContext);
    if (!context) {
        throw new Error("useMapsContext must be used within a MapsProvider");
    }
    return context;
};
