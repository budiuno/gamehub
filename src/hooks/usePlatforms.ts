import parentPlatforms from "../data/parentPlatforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => ({data: parentPlatforms, isLoading: null, error: null})

export default usePlatforms