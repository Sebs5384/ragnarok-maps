import React from "react";
import styles from "./Home.module.css";


function HeroSectionMain(): React.ReactElement {
    return (
        <div className={styles.heroSectionContainer}>
            <div className={styles.heroSectionMain}>
                <strong className={styles.heroSectionTitleText}>Which map are</strong>
                <strong className={styles.heroSectionTitleText}>we searching for today?</strong>
                <p className={styles.heroSectionDescription}>A simple tool built for adventurers</p>
                <p className={styles.heroSectionDescription}>Easily mark and discover locations across Ragnarok Online maps.</p>
            </div>
        </div>
    );
};
    
export default HeroSectionMain;