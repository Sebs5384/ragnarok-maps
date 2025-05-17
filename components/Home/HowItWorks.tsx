import React from "react";
import Image from "next/image";
import styles from "./Home.module.css";

function HowItWorks(): React.ReactElement {
    return (
        <section className={styles.homeSection}>
            <h1 className={styles.homeTitles}>How it works?</h1>
            <div className={styles.howItWorksSectionContainer}>
                <div className={styles.howItWorksDescription}>
                    <strong>In Ragnarok, maps are made up of many cells, each one representing a specific coordinate in the form of X and Y values</strong>
                    <strong>This tool will allow you to mark any cell on the map and display it as a red dot</strong>
                </div>
                <div className={styles.stepByStepSection}>
                    <div className={styles.stepByStepItem}>
                        <Image 
                            src="/img/lhz_img.png"
                            alt="Ragnarok Maps Logo"
                            width={120}
                            height={120}
                            className={styles.stepByStepImage}
                        />
                        <p className={styles.stepByStepText}>Find the location you would like to mark in game</p>
                    </div>
                    <div className={styles.stepByStepItem}>
                        <Image 
                            src="/img/lhz_img.png"
                            alt="Ragnarok Maps Logo"
                            width={120}
                            height={120}
                            className={styles.stepByStepImage}
                        />
                        <div className={styles.stepByStepText}>
                            <p>Click on maps to view the full catalogue of maps or use</p>
                            <p>the quick search feature to find your desired map by name</p>
                        </div>
                    </div>
                    <div className={styles.stepByStepItem}>
                        <Image 
                            src="/img/lhz_img.png"
                            alt="Ragnarok Maps Logo"
                            width={120}
                            height={120}
                            className={styles.stepByStepImage}
                        />
                        <div className={styles.stepByStepText}>
                            <p>Input the coordinates of the cell you would like</p>
                            <p> to mark and click locate to generate your custom map URL</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;