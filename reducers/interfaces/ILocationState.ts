interface ILocationState {
    loadingLocation: boolean;
    locationUrl: string | null;
    errorLocation: any;
    handleGetLocation: (map: string, x: string, y: string) => void
};

export default ILocationState;