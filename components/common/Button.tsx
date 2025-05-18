import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, className, ...props }: ButtonProps): React.ReactElement {
    return (
        <button {...props} className={className}>
            {children}
        </button>
    );
};

export default Button;