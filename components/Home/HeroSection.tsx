"use client";

import { useHomeContext } from "../../context/HomeContext";
import React from "react";
import HeroSectionCollage from "./HeroSectionCollage";
import styles from "./Home.module.css";

function HeroSection(): React.ReactElement {
    const { items, hasShuffle } = useHomeContext();
    console.log(items);
    console.log(hasShuffle);

    if(!hasShuffle) {
        return <div>Loading....</div>
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroSectionContainer}>
                <div className={styles.heroSectionMain}>
                    <strong className={styles.heroSectionTitleText}>Which map are</strong>
                    <strong className={styles.heroSectionTitleText}>we searching for today?</strong>
                    <p className={styles.heroSectionDescription}>A simple tool built for adventurers</p>
                    <p className={styles.heroSectionDescription}>Easily mark and discover locations across Ragnarok Online maps.</p>
                </div>
            </div>
            <HeroSectionCollage items={items} />
        </section>
    );
};

export default HeroSection;