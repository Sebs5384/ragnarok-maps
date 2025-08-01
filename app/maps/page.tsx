import { MapsProvider } from "@/context/MapsContext";
import Grid from "@/components/Maps/Grid";
import Paginator from "@/components/Paginator/Paginator";
import styles from "@/components/Maps/Maps.module.css";

async function Maps({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }): Promise<React.ReactElement> {
    const { limit, offset, search } = await searchParams;
    const parsedLimit = parseInt(limit ?? "40");
    const parsedOffset = parseInt(offset ?? "0");
    const parsedSearch = search ?? "";

    return (
        <MapsProvider search={parsedSearch} limit={parsedLimit} offset={parsedOffset} >
            <main className={styles.home}>
                <Grid />
                <Paginator />
            </main>
        </MapsProvider>
    );
};

export default Maps;
