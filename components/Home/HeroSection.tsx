import React from "react";
import Button from "../common/Button";  
import Image from "next/image";
import styles from "./Home.module.css";

function HeroSection(): React.ReactElement {
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
            <div className={styles.heroSectionContainer}>
                <div className={styles.heroSectionCollageContainer}>
                    <div className={styles.heroSectionImageContainer}>
                        <div className={styles.heroSectionTopItemsContainer}>
                            <div className={styles.heroMapContainer}>
                                <Image 
                                    src="/maps/lighthalzen.png" 
                                    alt="map-1"
                                    fill
                                />
                            </div>
                            <div className={styles.heroMapContainer}>
                                <Image 
                                    src="/maps/mjolnir_10.png" 
                                    alt="map-2"
                                    fill
                                />
                            </div>
                            <div className={styles.heroMapContainer}>
                                <Image 
                                    src="/maps/pay_dun04.png" 
                                    alt="map-3"
                                    fill
                                />
                            </div>
                        </div>
                        <div className={styles.heroSectionTopItemsContainer}>
                            <div className={styles.heroMapContainer}>
                                <Image 
                                    src="/maps/prt_maze01.png" 
                                    alt="map-4"
                                    fill
                                />
                            </div>
                            <div className={styles.heroMap5Container}>
                                <Button className={styles.heroSectionButton}>Browse our collection of maps</Button>
                            </div>
                            <div className={styles.heroMap6Container}>
                                <Image 
                                    className={styles.heroMap11Item}
                                    src="/maps/ice_dun03.png" 
                                    alt="map-6"
                                    fill
                                />
                            </div>
                        </div>
                        <div className={styles.heroSectionTopItemsContainer}>
                            <div className={styles.heroMapContainer}>
                                <Image 
                                    src="/maps/dew_dun01.png" 
                                    alt="map-7"
                                    fill
                                />
                            </div>
                            <div className={styles.heroMapContainer}>
                                <Image 
                                    src="/maps/brasilis.png" 
                                    alt="map-8"
                                    fill
                                />
                            </div>
                            <div className={styles.heroMapContainer}>
                                <Image 
                                    src="/maps/gef_dun00.png" 
                                    alt="map-9"
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.heroHorizontalSectionImageContainer}>
                        <div className={styles.heroMapContainer}>
                            <Image
                                src="/maps/gonryun.png" 
                                alt="map-10"
                                fill
                            />
                        </div>
                        <div className={styles.heroMap11Container}>
                            <Image
                                className={styles.heroMap11Item}
                                src="/maps/ama_fild01.png" 
                                alt="map-11"
                                fill
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;