"use strict";

import { Card } from "./Classes/Card.js";
import { userPost } from "./userPost.js";

const usersPromise = fetch("https://ajax.test-danit.com/api/json/users");
const postsPromise = fetch("https://ajax.test-danit.com/api/json/posts");

const createPostButton = document.querySelector(".create-post");
createPostButton.textContent = "Додати публікацію";

Promise.all([usersPromise, postsPromise])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then(([users, posts]) => {
    const usersMap = new Map(
      users.map((user) => [user.id, new Card(user.id, user.name, user.email)])
    );
    posts.forEach((post) => {
      const user = usersMap.get(post.userId);
      console.log(user)
      if (user) {
        const { name, email } = user;
        userPost(name, email, post.title, post.body, post.id);
      }
    });
    return usersMap;
  })
  .then((usersMap) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const result = {};

      for (const [label, value] of data.entries()) {
        result[label] = value;
      }

      usersMap.forEach((e) => {
        if (result.email === e.email) {
          createPost(e.id, e.name, e.email, result.title, result.body);
        }
      });
      form.reset();
      modal.style.display = "none";
    });
  });

// DELETE POST
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("button")) {
    const postId = event.target.dataset.postid;
    fetch(`https://ajax.test-danit.com/api/json/posts/${postId}`, {
      method: "DELETE",
    }).then(() => {
      const postElement = event.target.parentNode.parentNode;
      postElement.remove();
    });
  }
});

createPostButton.addEventListener("click", (e) => {
  modal.style.display = "block";
  const test = document.querySelector('.modal-content__title')
  test.textContent='Create new post'
});

const createPost = (userid, username, useremail, title, body) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: userid,
      title: title,
      body: body,
    }),
  };

  const createNewPost = fetch(
    "https://ajax.test-danit.com/api/json/posts",
    requestOptions
  )
    .then((response) => response.json())
    .then((item) => {
      userPost(username, useremail, title, body, item.id);
    });
};

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const form = document.querySelector(".form");

window.addEventListener("click", (event) => {
  if (event.target === closeBtn) {
    form.reset();
    modal.style.display = "none";
  }
});


// EDIT
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("button-edit")) {
    modal.style.display = "block";
    const test = document.querySelector('.modal-content__title')
    test.textContent='Edit post'
    const title = event.target.parentNode.parentNode.querySelector(
      ".wrapper-content__title"
    );
    const body = event.target.parentNode.parentNode.querySelector(
      ".wrapper-content__body"
    );
    form.title.value = title.textContent;
    form.body.value = body.textContent;
  }
});
