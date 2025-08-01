import dynamic from "next/dynamic";

const MapsClient = dynamic(() => import("./MapsClient"), { ssr: false });

function Maps(): React.ReactElement {
    return (
        <MapsClient />
    );
};

export default Maps;
