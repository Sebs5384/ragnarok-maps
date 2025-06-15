import React from "react";
import Maps from "../../components/Maps/Maps";

function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }): React.ReactElement {
    const limit = searchParams.limit ? parseInt(searchParams.limit as string) : 40;
    const offset = searchParams.offset ? parseInt(searchParams.offset as string) : 0;

    return <Maps limit={limit} offset={offset} />;
};

export default Page;
