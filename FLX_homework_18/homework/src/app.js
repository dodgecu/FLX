// Instantiate XHR , TheCatAPI key
const xhr = new XHR();
const api_key_cats = 'be03bfc4-8d3a-4a3e-8c40-d2a1a7c687db';

// Bring cats by using FETCH api
const fetchCat = async function (api) {
  const res = await fetch(api, {
    headers: {
      ['x-api-key']: api_key_cats
    }
  });
  const data = await res.json();
  return data;
};

// Call fetch on cats api
function getNewCat() {
  fetchCat(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg%2C%20png`)
    .then(data => getCat(data))
    .catch(err => console.error(err));
}

xhr.get(`https://jsonplaceholder.typicode.com/users`, getUsers);

// Globals
let userId = 0;
let postId = 0;
let users = null;
let userPosts = [];
let nextPostBtn;
let prevPostBtn;
let postTitle;
let postBody;
const nextBtn = document.querySelector('.change-user__next');
const prevBtn = document.querySelector('.change-user__previous');
prevBtn.disabled = true;
const mainPostArea = document.querySelector('.main__content');
const mainUserArea = document.querySelector('.main__info');
const loader = document.querySelectorAll('.loader');
const userTitle = document.querySelector('.header__user--welcome span');
const mainInfo = document.querySelector('.main__avatar--info');
mainUserArea.addEventListener('click', next);
mainUserArea.addEventListener('click', loadPosts);
mainUserArea.addEventListener('click', editUser);
mainUserArea.addEventListener('click', deleteUser);
mainPostArea.addEventListener('click', submitPost);
mainPostArea.addEventListener('click', getComments);
mainPostArea.addEventListener('click', nextPost);
mainPostArea.addEventListener('click', editPost);
mainPostArea.addEventListener('click', deletePost);

// Modal
const modal = document.querySelector('.modal');
const modalName = document.getElementById('name');
const modalEmail = document.getElementById('email');
const modalPhone = document.getElementById('phone');
const modalWebsite = document.getElementById('website');
const modalCatchPhrase = document.getElementById('catchphrase');

// Alert
function showAlert(message) {
  const p = document.createElement('p');
  p.className = 'alert';
  p.textContent = message;
  mainPostArea.appendChild(p);
  setTimeout(() => (p.style.display = 'none'), 2000);
}

// Get all users
function getUsers(error, response) {
  if (response) {
    renderUser(response[userId]);
    users = response;
  } else {
    console.log(error);
  }
}

// Render user card template
function renderUser(data) {
  const {
    id,
    name,
    email,
    phone,
    username,
    website,
    address: { street, suite, city, zipcode },
    company: { catchPhrase, name: companyName }
  } = data;
  mainPostArea.innerHTML = ``;
  userTitle.innerHTML = username;
  mainInfo.setAttribute('data-user-id', id);
  mainInfo.innerHTML = `
  <div class="customize-user">
    <a href="#" class="customize-user__edit">
      <i class="fa fa-pencil-square-o"></i>
    </a>
    <a href="#" class="customize-user__delete">
      <i class="fa fa-trash"></i>
    </a>
  </div>
  <div class="primary">
    <p class="primary__name">${name}</p>
    <blockquote class="primary__catchprase">${catchPhrase}</blockquote>
    <p class="primary__companyName">${companyName}</p>
  </div>
    <ul class="info">
      <li class="info__item--email"><i class="fa fa-envelope"></i>${email}</li>
      <li class="info__item--website"><i class="fa fa-internet-explorer"></i>${website}</li>
      <li class="info__item--phone"><i class="fa fa-phone-square"></i>${phone}</li>
      <li class="info_-item--address">
        <i class="fa fa-address-card"></i>
        <ul class="address">
          <li class="address__street">${street}</li>
          <li class="address__suite">${suite}</li>
          <li class="address__city">${city}</li>
          <li class="address__zipcode">${zipcode}</li>
        </ul>
      </li>
    </ul>
  `;
}

// Edit user
function editUser(e) {
  if (e.target.classList.contains('fa-pencil-square-o')) {
    modal.style.display = 'block';
    const {
      name,
      email,
      phone,
      website,
      company: { catchPhrase }
    } = users[userId];
    modalName.value = name;
    modalEmail.value = email;
    modalPhone.value = phone;
    modalWebsite.value = website;
    modalCatchPhrase.value = catchPhrase;
  }
  document
    .querySelector('.modal__form')
    .addEventListener('submit', submitUserChanges);
  e.preventDefault();
}

// Submit edited user
function submitUserChanges(e) {
  const dataUserId = mainInfo.dataset.userId;
  const data = {
    name: modalName.value,
    email: modalEmail.value,
    phone: modalPhone.value,
    website: modalWebsite.value,
    catchPhrase: modalCatchPhrase.value
  };
  xhr.put(
    `https://jsonplaceholder.typicode.com/users/${dataUserId}`,
    data,
    (error, success) => {
      if (success) {
        modal.style.display = 'none';
        const result = JSON.parse(success);
        users[userId].name = result.name;
        users[userId].email = result.email;
        users[userId].phone = result.phone;
        users[userId].website = result.website;
        users[userId].company.catchPhrase = result.catchPhrase;
        renderUser(users[userId]);
        showAlert('User successfully updated');
      } else {
        console.log(error);
      }
    }
  );

  e.preventDefault();
}

// Delete User
function deleteUser(e) {
  if (e.target.classList.contains('fa-trash')) {
    const dataUserId = mainInfo.dataset.userId;
    xhr.delete(
      `https://jsonplaceholder.typicode.com/users/${dataUserId}`,
      (error, success) => {
        if (success) {
          users.splice(userId, 1);
          userId === 0 ? userId : userId--;
          mainInfo.innerHTML = `User successfully removed!`;
          setTimeout(() => {
            renderUser(users[userId]);
            getNewCat();
            loader.forEach(loader => (loader.style.display = 'block'));
          }, 2000);
        } else {
          console.log(error);
        }
      }
    );
  }
}

// Change between loaded users
function next(e) {
  if (e.target.classList.contains('change-user__next')) {
    getNewCat();
    userId++;
    prevBtn.disabled = false;
    loader.forEach(loader => (loader.style.display = 'block'));
    if (userId >= users.length - 1) {
      nextBtn.disabled = true;
    }
  }
  if (e.target.classList.contains('change-user__previous')) {
    getNewCat();
    userId--;
    nextBtn.disabled = false;
    loader.forEach(loader => (loader.style.display = 'block'));
    if (userId === 0) {
      prevBtn.disabled = true;
    }
  }
  renderUser(users[userId]);
}

// Get Posts from API
function getPosts() {
  const dataUserId = mainInfo.dataset.userId;
  xhr.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${dataUserId}`,
    (error, success) => {
      if (success) {
        showPosts(success);
      } else {
        console.error(error);
      }
    }
  );
}

// Render Add Post UI
function loadPosts(e) {
  postId = 0;
  if (e.target.className === 'primary__name') {
    getPosts();
    mainPostArea.innerHTML = `
    <div class="form">
          <h1 class="form__title">Post something</h1>
          <div class="form__main">
            <input
              type="text"
              id="title"
              class="form__main--title"
              placeholder="Post Title"
            />
          </div>
          <div class="form__fields">
            <textarea
              id="body"
              class="form__fields--body"
              placeholder="Post Body"
            ></textarea>
          </div>
          <button class="btn form__btn btn__add" type="submit">Post It</button>
        </div>
        <div class="customize">
        <a href="#" class="customize__edit">
          <i class="fa fa-pencil"></i>
        </a>
        <a href="#" class="customize__delete">
          <i class="fa fa-remove"></i>
        </a>
        </div>
        <div class="user-posts"></div>
        <button class="change-post__previous btn" type="submit">Prev Post</button>
        <button class="change-post__next btn" type="submit">Next Post</button>
        <button class="show-comments btn" type="submit">Show Comments</button>
    `;
  }
}

// Display posts list
function renderPosts(postData) {
  const postsBlock = document.querySelector('.user-posts');
  const { id, title, body } = postData[postId];
  postsBlock.innerHTML = `
  <article class="user-posts__item" data-id = ${id}>
    <h3 class="user-posts__title">${title}</h3>
    <p class="user-posts__body">${body}</p>
  </article>
`;
}

// Change between posts
function showPosts(posts) {
  userPosts.length = 0;
  userPosts = userPosts.concat(posts);
  nextPostBtn = document.querySelector('.change-post__next');
  prevPostBtn = document.querySelector('.change-post__previous');
  prevPostBtn.disabled = true;
  renderPosts(userPosts);
}

// Change between posts
function nextPost(e) {
  if (e.target.classList.contains('change-post__next')) {
    postId++;
    prevPostBtn.disabled = false;
    if (postId >= userPosts.length - 1) {
      nextPostBtn.disabled = true;
    }
  }
  if (e.target.classList.contains('change-post__previous')) {
    postId--;
    nextPostBtn.disabled = false;
    if (postId === 0) {
      prevPostBtn.disabled = true;
    }
  }
  renderPosts(userPosts);
}

// Get comments from API
function getComments(e) {
  const dataPostId = document.querySelector('.user-posts__item').dataset.id;
  if (e.target.classList.contains('show-comments')) {
    xhr.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${dataPostId}`,
      (error, success) => {
        if (success) {
          renderComments(success);
        } else {
          console.log(error);
        }
      }
    );
  }
}

// Render comments
function renderComments(comments) {
  const postsBlock = document.querySelector('.user-posts');
  for (let comment of comments) {
    postsBlock.innerHTML += `
      <div class="user-posts__comments">
        <h4 class="user-posts__comments--email">Comment from: ${comment.email}</h4>
        <p class="user-posts__comments--name">Comment name: ${comment.name}</p>
        <p class="user-posts__comments--comment">Body: ${comment.body}</p>
      </div>
  `;
  }
}

// Add new post
function submitPost(e) {
  if (e.target.classList.contains('btn__add')) {
    postTitle = document.getElementById('title');
    postBody = document.getElementById('body');
    const dataUserId = mainInfo.dataset.userId;
    if (postBody.value.trim() !== '' && postTitle.value.trim() !== '') {
      const data = {
        userId: parseInt(dataUserId),
        title: postTitle.value,
        body: postBody.value
      };
      userPosts.push(data);
      xhr.post(
        `https://jsonplaceholder.typicode.com/posts`,
        data,
        (error, result) => {
          if (result) {
            postTitle.value = '';
            postBody.value = '';
            showAlert(`Post successfully added!`);
          }
          if (error) {
            console.error(error);
          }
        }
      );
    } else {
      showAlert(`Body and title should not be empty!`);
    }
  }
}

// Edit post UI
function editPost(e) {
  if (e.target.classList.contains('fa-pencil')) {
    if (document.querySelector('.user-posts__item').dataset.id === "undefined") {
      showAlert("Unfortunately, this post cannot be edited!")
    } else {
      const editBtn = document.querySelector('.form__btn');
      postTitle = document.getElementById('title');
      postBody = document.getElementById('body');
      editBtn.textContent = 'Update Post';
      editBtn.classList.remove('btn__add');
      editBtn.classList.add('btn__update');
      postTitle.value = userPosts[postId].title;
      postBody.value = userPosts[postId].body;
      mainPostArea.addEventListener('click', submitCustomizedPost);
    }
  }
  e.preventDefault();
}

// Submit customized post to the API (ONLY EXISTING POSTS CAN BE EDITED). Returns error when editing new since data is not persisted
function submitCustomizedPost(e) {
  if (e.target.classList.contains('btn__update')) {
    postTitle = document.getElementById('title');
    postBody = document.getElementById('body');
    const dataPostId = document.querySelector('.user-posts__item').dataset.id;
    if (postBody.value.trim() !== '' && postTitle.value.trim() !== '') {
      const data = {
        userId: userId + 1,
        id: dataPostId,
        title: postTitle.value,
        body: postBody.value
      };
      xhr.put(
        `https://jsonplaceholder.typicode.com/posts/${dataPostId}`,
        data,
        (error, success) => {
          if (success) {
            const result = JSON.parse(success);
            userPosts.splice(postId, 1, result);
            postTitle.value = '';
            postBody.value = '';
            renderPosts(userPosts);
            const editBtn = document.querySelector('.form__btn');
            editBtn.textContent = 'Post It';
            editBtn.classList.remove('btn__update');
            editBtn.classList.add('btn__add');
            showAlert(`Post successfully updated!`);
          } else {
            console.error(error);
          }
        }
      );
    } else {
      showAlert(`Make sure fields are not empty!`);
    }
  }
}

// Delete Post
function deletePost(e) {
  if (e.target.classList.contains('fa-remove')) {
    const dataPostId = document.querySelector('.user-posts__item').dataset.id;
    xhr.delete(
      `https://jsonplaceholder.typicode.com/posts/${dataPostId}`,
      (error, success) => {
        if (success) {
          userPosts.splice(postId, 1);
          postId === 0 ? postId : postId--;
          document.querySelector(
            '.user-posts__item'
          ).innerHTML = `<p class="user-posts__removed">Post Successfully Removed!</p>`;
          setTimeout(() => renderPosts(userPosts), 2000);
        } else {
          console.log(error);
        }
      }
    );
  }
}

// Get cats
function getCat(cats) {
  const topAvatar = document.querySelector('.header__user--avatar');
  const mainAvatar = document.querySelector('.main__avatar');
  const image = new Image();
  cats.forEach(cat => {
    image.onload = function () {
      mainAvatar.style.backgroundImage = `url('${image.src}')`;
      topAvatar.style.backgroundImage = `url('${image.src}')`;
      loader.forEach(loader => (loader.style.display = 'none'));
    };
    image.src = cat.url;
  });
}
document.addEventListener('DOMContentLoaded', getNewCat);
