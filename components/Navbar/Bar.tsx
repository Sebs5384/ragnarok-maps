import React from "react";

interface BarProps {
    children: React.ReactNode,
    className?: string
};

function Bar({ className, children, ...props }: BarProps) {
    return (
        <nav className={className} {...props}>
            {children}
        </nav>
    );
};

export default Bar;