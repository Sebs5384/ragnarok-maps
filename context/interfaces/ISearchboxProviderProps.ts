import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface ISearchboxProviderProps {
    searchParams: URLSearchParams,
    router: AppRouterInstance,
    children: React.ReactNode
};

export default ISearchboxProviderProps;