import { ISearchboxProps } from "./interfaces/index";
import React from "react";

function Searchbox({ className }: ISearchboxProps): React.ReactElement {
    return (
        <input 
            type="search" 
            placeholder="Search map..." 
            name="searchbox" 
            className={className}
        />
    );
};

export default Searchbox;