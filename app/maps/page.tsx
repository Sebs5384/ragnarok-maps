import { MapsProvider } from "../../context/MapsContext";
import Grid from "../../components/Maps/Grid";
import styles from "../../components/Maps/Maps.module.css";

function Maps() {
    return (
        <MapsProvider>
            <main className={styles.home}>
                <Grid />
            </main>
        </MapsProvider>
    );
};

export default Maps;