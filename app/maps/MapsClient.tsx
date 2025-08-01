"use client";

import { useSearchParams } from "next/navigation";
import { MapsProvider } from "@/context/MapsContext";
import Grid from "@/components/Maps/Grid";
import Paginator from "@/components/Paginator/Paginator";
import styles from "@/components/Maps/Maps.module.css";

function MapsClient(): React.ReactElement {
    const searchParams = useSearchParams();
    const limit = parseInt(searchParams.get("limit") || "40");
    const offset = parseInt(searchParams.get("offset") || "0");
    const search = searchParams.get("search") || "";

    return (
        <MapsProvider search={search} limit={limit} offset={offset} >
            <main className={styles.home}>
                <Grid />
                <Paginator />
            </main>
        </MapsProvider>
    );
};

export default MapsClient;