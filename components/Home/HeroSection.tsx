import React from "react";
import Image from "next/image";
import styles from "./Home.module.css";

function HeroSection(): React.ReactElement {
    return (
        <section className={styles.heroSection}>
            <h1 className={styles.heroSectionTitle}>Locate</h1>
            <div className={styles.heroSectionContainer} >
                <div className={styles.mapSection}>
                    <h1><strong>Map: Lighthalzen</strong></h1>
                    <Image 
                        src="/img/lhz_img.png" 
                        alt="Ragnarok Maps Logo"
                        width={250}
                        height={250}
                        className={styles.mapImage}
                    />
                </div>
                <div className={styles.kafraSection}>
                    <Image 
                        src="/img/kafra_lhz.png" 
                        alt="Ragnarok Maps Logo"
                        width={55}
                        height={55}
                    />
                    <div className={styles.kafraText}>
                        <strong>Kafra Lyrith</strong>
                        <br/>
                        <strong>Cordinates: X: 220 - Y: 159</strong>
                    </div>
                </div>
                <div className={styles.heroSectionDescription}>
                    <h1>Search, mark and share Ragnarok Online maps with your friends</h1>
                    <p>Find your way to Kafra Lyrith or any location in your favorite Ragnarok Online maps</p>
                </div>
            </div>        
        </section>
    );
};

export default HeroSection;