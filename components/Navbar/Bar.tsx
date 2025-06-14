import { IBarProps } from "./interfaces/index";
import React from "react";

function Bar({ className, children, ...props }: IBarProps) {
    return (
        <nav className={className} {...props}>
            {children}
        </nav>
    );
};

export default Bar;