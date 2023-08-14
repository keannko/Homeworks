import { favoritesReducer } from "./favoritesReducer";


describe("favoritesReducer", () => {
  test("ADD_TO_FAVORITES favoritesReducer", async () => {
    const item = {
      id: "1",
      name: "Ноутбук HP ProBook 450 G7",
      price: 21999,
      image_url: "https://picsum.photos/id/1018/200/200",
      article: "450G71-1231",
      color: "чорний",
      category: "notebooks",
      about:
        "Ноутбук HP ProBook 450 G7 - це надійний і ефективний пристрій, який підійде для роботи та навчання. Він оснащений потужним процесором та великим дисплеєм, що забезпечить комфортну роботу протягом усього дня. Крім того, він має стильний чорний дизайн.",
    }
    const action = { type: "ADD_TO_FAVORITES", payload: { item } };
    const state = {
      favorites: [],
    };
    const NewState = favoritesReducer(state, action);
    expect(NewState.favorites.length).toBe(1)
  });

  test("REMOVE_FROM_FAVORITES favoritesReducer", async () => {
    const id = 1
    const action = { type: "REMOVE_FROM_FAVORITES", payload: { id } };
    const state = {
      favorites: [1],
    };
    const NewState = favoritesReducer(state, action);
    expect(NewState.favorites.length).toBe(0)
  });
})

