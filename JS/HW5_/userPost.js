export const userPost = (userName, userEmail, postTitle, postBody, postId) => {

  // Create
  const card = document.createElement("div");
  const wrapNameEmail = document.createElement("div");
  const wrapContent = document.createElement("div");
  const name = document.createElement("p");
  const email = document.createElement("p");
  const contentTitle = document.createElement("p");
  const contentBody = document.createElement("p");
  const buttonsBlock = document.createElement('div')
  const button = document.createElement('button')
  const buttonEdit = document.createElement('button')
  const cardsBlock = document.querySelector('.cards-block')

  // Add class/attribute
  card.classList.add("user-card");
  wrapNameEmail.classList.add("wrapper");
  wrapContent.classList.add("wrapper-content");
  button.classList.add('button')
  buttonEdit.classList.add('button-edit')
  button.setAttribute('data-postid', postId)
  buttonsBlock.classList.add('buttons-block')
  contentTitle.classList.add('wrapper-content__title')
  contentBody.classList.add('wrapper-content__body')

  // Add Content
  name.textContent = userName;
  email.textContent = userEmail;
  contentTitle.textContent = postTitle;
  contentBody.textContent = postBody;
  button.textContent = 'delete'
  buttonEdit.textContent = 'Edit'

  // Add
  cardsBlock.prepend(card);
  card.appendChild(wrapNameEmail);
  card.appendChild(wrapContent);
  card.appendChild(buttonsBlock);
  buttonsBlock.appendChild(button);
  buttonsBlock.appendChild(buttonEdit);
  wrapNameEmail.appendChild(name);
  wrapNameEmail.appendChild(email);
  wrapContent.appendChild(contentTitle);
  wrapContent.appendChild(contentBody);
};
