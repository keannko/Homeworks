import { productsReducer } from "./productsReducer";

describe("productsReducer", () => {
  test("GET_PRODUCTS productsReducer", async () => {
    const data = [
      {
        id: "1",
        name: "Ноутбук HP ProBook 450 G7",
        price: 21999,
        image_url: "https://picsum.photos/id/1018/200/200",
        article: "450G71-1231",
        color: "чорний",
        category: "notebooks",
        about:
          "Ноутбук HP ProBook 450 G7 - це надійний і ефективний пристрій, який підійде для роботи та навчання. Він оснащений потужним процесором та великим дисплеєм, що забезпечить комфортну роботу протягом усього дня. Крім того, він має стильний чорний дизайн.",
      },
      {
        id: "2",
        name: "Комп'ютер HP EliteOne 801 G5",
        price: 39999,
        image_url: "https://picsum.photos/id/1025/200/200",
        article: "801G52-4562",
        color: "сріблястий",
        category: "computers",
        about:
          "Комп'ютер HP EliteOne 801 G5 - це потужний і надійний комп'ютер, що стане відмінним вибором для бізнесу та дому. Він має великий дисплей та потужний процесор, що забезпечить швидку і ефективну роботу. Крім того, він має елегантний сріблястий дизайн, який додасть стилю вашому робочому місцю.",
      },
      {
        id: "3",
        name: "Монітор Dell UltraSharp U2818Q",
        price: 41999,
        image_url: "https://picsum.photos/id/1031/200/200",
        article: "U2718Q3-7823",
        color: "чорний",
        category: "monitors",
        about:
          "Монітор Dell UltraSharp U2818Q - це високоякісний монітор з великим і чітким дисплеєм. Він підійде для професійного використання та розваг, адже забезпечить якісне відображення зображення і відео. Крім того, монітор має стильний чорний дизайн, який доповнить будь-який інтер'єр.",
      },
    ];
    const action = { type: "GET_PRODUCTS", payload: { products: data } };
    const state = {
      products: [],
    };
    const NewState = productsReducer(state, action);
    expect(NewState.products.length).toBe(3);
  });
});
