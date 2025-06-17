import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

function Magnifier(): React.ReactElement {
    return (
        <div className={styles.magnifier}>
            <Image
                src={"/img/magnifier_logo.png"}
                alt="magnifier"
                fill
            />
        </div>
    );
};

export default Magnifier;