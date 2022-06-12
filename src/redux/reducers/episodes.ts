import { IEpisode } from "../../models/IEpisode";

interface EpisodesState {
  episodes: IEpisode[];
  loading: boolean
}

const initialState: EpisodesState = {
  episodes: [],
  loading: false,
};

export const episodesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOAD_EPISODES_PENDING": {
    return {
      ...state,
      loading: true
    }
    }

    case "LOAD_EPISODES_FULFILLED":
      return {
        ...state,
        loading: false,
        episodes: action.payload
          .filter((i: IEpisode) => i.series === "Breaking Bad")
          .sort((a: IEpisode, b:IEpisode) => +a.episode - +b.episode),
      };

    case "DELETE_EPISODE_FULFILLED":
      return {
        ...state,
        episodes: state.episodes.filter((i) => i.episode_id !== action.payload),
      };

    case "DECREMENT_CHARACTERS":
      return {
        ...state,
        episodes: state.episodes.map((episode) => {
          if (episode.episode_id === action.payload) {
            episode.characters.length -= 1;
            return episode;
          }
          return episode;
        }),
      };

    case "INCREMENT_CHARACTERS":
      return {
        ...state,
        episodes: state.episodes.map((episode) => {
          if (episode.episode_id === action.payload) {
            episode.characters.length += 1;
            return episode;
          }
          return episode;
        }),
      };

    case "SORT_ASCENDING":
      return {
        ...state,
        episodes: [
          ...state.episodes.sort((a: IEpisode, b: IEpisode) => {
            if (a.characters.length > b.characters.length) {
              return 1;
            }
            if (a.characters.length < b.characters.length) {
              return -1;
            }
            return 0;
          }),
        ],
      };

    case "SORT_DESCENDING":
      return {
        ...state,
        episodes: [
          ...state.episodes.sort((a: IEpisode, b: IEpisode) => {
            if (a.characters.length > b.characters.length) {
              return -1;
            }
            if (a.characters.length < b.characters.length) {
              return 1;
            }
            return 0;
          }),
        ],
      };

    default:
      return state;
  }
};
