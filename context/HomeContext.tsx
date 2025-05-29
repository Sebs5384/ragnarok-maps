"use client";

import { useContext, createContext } from "react";
import { useGetShuffledItems, useFetchMaps } from "../hooks/index";

interface Children {
    children: React.ReactNode;
}

export const HomeContext = createContext({});

export function HomeProvider({ children }: Children): React.ReactElement {
    const MAX_MAPS = 11;

    const { loading, maps, error } = useFetchMaps();
    const { items } = useGetShuffledItems({ items: maps }, MAX_MAPS);

    return (
        <HomeContext.Provider value={{ items }}>
            {children}
        </HomeContext.Provider>
    )
};

export const useHomeContext = () => useContext(HomeContext);