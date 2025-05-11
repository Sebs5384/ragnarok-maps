import React from "react";
import Bar from "./Bar";
import Logo from "./Logo";
import styles from "./Navbar.module.css"

function Navbar(): React.ReactElement {
    return (
        <Bar className={styles.navbar}>
            <Logo className={styles.logo}/>
        </Bar>
    );
};

export default Navbar;