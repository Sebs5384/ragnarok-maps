"use client";

import { useContext, createContext } from "react";
import { useFetchMaps } from "../hooks/index";
import { IMapsContextProps, IMapsProviderProps } from "./interfaces/index";

export const MapsContext = createContext<IMapsContextProps | undefined>(undefined);

export function MapsProvider({ children, limit, offset }: IMapsProviderProps): React.ReactElement {
    const { loading, maps, error } = useFetchMaps(limit, offset);
    
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
