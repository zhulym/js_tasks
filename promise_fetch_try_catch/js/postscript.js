const url = 'https://jsonplaceholder.typicode.com/posts';
const container = document.querySelector('.container');

const getAllPosts = async () => {
    try {
        const response = await fetch(url, {
            method: 'GET'
        });
        const data = await response.json();
        renderPosts(data);
    } catch (error) {
        console.error(error);
    }
}

const renderPosts = (data = []) => {
    data.forEach(item => {
        const postContainer = document.createElement('div');
        const postTitle = document.createElement('h2');
        const postBody = document.createElement('div');
        const commentLink = document.createElement('button');

        postContainer.classList.add('post-container');
        postTitle.classList.add('post-title');
        postBody.classList.add('post-body');
        commentLink.classList.add('post-comment');

        postTitle.innerHTML = editContent(item.title);
        postBody.innerHTML = editContent(item.body);
        postContainer.setAttribute('id', item.id);
        commentLink.innerHTML = 'Reed comments...';

        postContainer.append(postTitle);
        postContainer.append(postBody);
        postContainer.append(commentLink);
        container.append(postContainer);
    })
}
getAllPosts();

const getComments = async (event) => {
    const urlCom = `https://jsonplaceholder.typicode.com/posts/${event.target.parentNode.id}/comments`;
    if (!event.target.classList.contains('post-comment')) {
        return;
    }

    if (event.target.innerHTML === 'Hide comments') {
        openCloseComments(event);
        return;
    }

    event.target.setAttribute("disabled", "disabled");
    event.target.innerHTML = 'Hide comments';

    try {
        const responseCom = await fetch(urlCom, {
            method: 'GET',
        });
        const comments = await responseCom.json();
        renderComments(comments, event);
        event.target.removeAttribute("disabled", "disabled");
    } catch (error) {
        console.error(error);
    }
}

const renderComments = (comments = [], event) => {
    comments.forEach(item => {
        const currentPostCont = event.target.parentNode;
        const commentsWrapper = document.createElement('div');
        commentsWrapper.classList.add('comments-wrapper');
        currentPostCont.append(commentsWrapper);
        commentsWrapper.setAttribute('postId', item.postId);

        const commentsCont = document.createElement('div');
        const author = document.createElement('h4');
        const email = document.createElement('p');
        const commBody = document.createElement('p');

        commentsCont.classList.add('comments-container');
        author.classList.add('comments-author');
        email.classList.add('author-email');
        commBody.classList.add('comments-body');

        author.innerHTML = `Author: ${editCommName(item.name)}`;
        email.innerHTML = `Email: ${item.email}`
        commBody.innerHTML = `Comment: ${editContent(item.body)}`;

        commentsCont.append(author);
        commentsCont.append(email);
        commentsCont.append(commBody);

        commentsWrapper.append(commentsCont);
    })
}

container.addEventListener('click', getComments);

function openCloseComments(event) {
    const commentsWrapper = document.querySelectorAll('.comments-wrapper');
    event.target.innerHTML = 'Reed comments...';
    commentsWrapper.forEach(el => {
        if (el.getAttribute('postid') === event.target.parentNode.id) {
            el.remove();
        }
    })
}

function editContent(content) {
    return content.charAt(0).toUpperCase() + content.slice(1);
}
function editCommName(name) {
    const arr = name.split(' ');
    return `${editContent(arr[0])} ${editContent(arr[1])}`
}




