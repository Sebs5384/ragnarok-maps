import React from "react";
import { MapsProvider } from "@/context/MapsContext";
import Grid from "@/components/Maps/Grid";
import Paginator from "@/components/Paginator/Paginator";
import styles from "@/components/Maps/Maps.module.css";

function Maps({ searchParams }: { searchParams: { [key: string]: string | undefined } }): React.ReactElement {
    const limit = searchParams.limit ? parseInt(searchParams.limit) : 40;
    const offset = searchParams.offset ? parseInt(searchParams.offset) : 0;

    return (
        <MapsProvider limit={limit} offset={offset} >
            <main className={styles.home}>
                <Grid />
                <Paginator />
            </main>
        </MapsProvider>
    );
};

export default Maps;
