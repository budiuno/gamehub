import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform}[]
  metacritic: number;
}

const useGames = ( selectedGenre: Genre | null, selectParentPlatform: Platform | null ) => useData<Game>('/games', { params : { genres: selectedGenre?.id, parent_platforms: selectParentPlatform?.id}}, [selectedGenre?.id, selectParentPlatform?.id])

export default useGames;
