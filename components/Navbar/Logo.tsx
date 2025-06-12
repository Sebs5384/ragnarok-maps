import React from "react";
import Image from "next/image";
import ragnarokMaps from "../../public/img/ragnarokMaps.png";

interface LogoProps {
    className?: string
};

function Logo({ className }: LogoProps): React.ReactElement {
    return (
        <Image 
            src={ragnarokMaps} 
            alt="Ragnarok Maps Logo"
            className={className}
            onClick={() => window.location.href = "/"}
        />
    );
};  

export default Logo;
