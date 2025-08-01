import { MapsProvider } from "@/context/MapsContext";
import Grid from "@/components/Maps/Grid";
import Paginator from "@/components/Paginator/Paginator";
import styles from "@/components/Maps/Maps.module.css";

function Maps({ searchParams }: { searchParams: { [key: string]: string | undefined } }): React.ReactElement {
    const limit = parseInt(searchParams.limit ?? "40");
    const offset = parseInt(searchParams.offset ?? "0");
    const search = searchParams.search ?? "";

    return (
        <MapsProvider search={search} limit={limit} offset={offset} >
            <main className={styles.home}>
                <Grid />
                <Paginator />
            </main>
        </MapsProvider>
    );
};

export default Maps;
