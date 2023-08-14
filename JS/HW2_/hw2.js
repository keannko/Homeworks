'use strict'

// Наведіть кілька прикладів, коли доречно використовувати в коді конструкцію try...catch.
//   - нужно обработать ошибки
//   - чтоб при ошибке скрипт не падал

const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70,
  },
  {
    author: "Сюзанна Кларк",
    name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70,
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70,
  },
  {
    author: "Террі Пратчетт",
    name: "Рухомі картинки",
    price: 40,
  },
  {
    author: "Анґус Гайленд",
    name: "Коти в мистецтві",
  },
];

const div = document.createElement("div");
div.setAttribute("id", "root");
document.body.prepend(div);
const ul = document.createElement("ul");

books.forEach((book) => {
  try {
    if (!book.author) throw new Error(`author missing in <<<${book.name}>>>`);
    if (!book.name) throw new Error(`name missing in <<<${book.name}>>>`);
    if (!book.price) throw new Error(`price missing in <<<${book.name}>>>`);
    const li = document.createElement("li");
    li.textContent = `${book.author} - ${book.name} - ${book.price}`;
    ul.appendChild(li);
  } catch (e) {
    console.error(e.message);
  }
});

div.appendChild(ul);
