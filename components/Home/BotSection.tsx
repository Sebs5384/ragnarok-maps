"use client";

import React from "react";
import Button from "@/components/common/Button";
import Image from "next/image";
import styles from "./Home.module.css";

function BotSection(): React.ReactElement {
    return (
        <section className={styles.homeSection}>
            <h1 className={styles.homeTitles}>Lazy to leave Discord?</h1>
            <div className={styles.botSectionContainer}>
                <div className={styles.botDescription}>
                    <h1><strong>Take a look at the Discord bot !</strong></h1>
                    <strong className={styles.botNameText}>Count Von Count</strong>    
                    <div className={styles.botImageWrapper}>
                        <Image 
                            src={"/img/count_von_count.png"}
                            alt="bot image"
                            fill
                            className={styles.botImage}
                        />
                    </div>
                </div>
                <div className={styles.botSpecsSection}>
                    <h1><strong>Features</strong></h1>
                    <ul>
                        <li>/locate - Search and mark maps</li>
                        <li>/missionmonster - Get killing missions specifications by name</li>
                        <li>/missionnpc - Find summer NPCs and their path to it by name</li>
                        <li>All without leaving Discord</li>
                    </ul>
                </div>
                <div className={styles.botInviteSection}>
                    <Button 
                        onClick={() => console.log("clicked")} 
                        className={styles.inviteButton}
                    >
                        Get the bot
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BotSection;