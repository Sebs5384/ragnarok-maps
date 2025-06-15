import { MapsProvider } from "../../context/MapsContext";
import Grid from "./Grid";
import Paginator from "../Paginator/Paginator";
import styles from "./Maps.module.css";

function Maps({ limit, offset }: { limit: number, offset: number }) {
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