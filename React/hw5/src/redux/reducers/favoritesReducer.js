const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

const defaultState = {
  favorites: [],
};

export function favoritesReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.includes(action.payload.item.id)
          ? state.favorites.filter((id) => id !== action.payload.item.id)
          : [...state.favorites, action.payload.item.id],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item !== action.payload.id),
      };
    default:
      return state;
  }
}
