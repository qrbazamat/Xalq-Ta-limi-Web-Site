const timeFormat = (time = new Date) => {
    let timeText = time.toTimeString().slice(0, 5);
    const timeYear = time.getFullYear();
    const timeMonth = time.getMonth() + 1;
    const timeDate = time.getDate();
    const thisYear = new Date().getFullYear();
    const thisMonth = new Date().getMonth() + 1;
    const thisDate = new Date().getDate();

    if (timeYear === thisYear && timeMonth === thisMonth) {
        if (timeDate === thisDate)
            return timeText + ' Bugun';

        if (thisDate - timeDate === 1)
            return timeText + ' Kecha';

    }

    return timeText + ` / ${(timeMonth < 10 ? '0' : '') + timeMonth}.${timeDate}.${timeYear}`;
}

const viewsCountFormat = (count = 0) => {
    if(count < 100) {
        return count
    } else if(count < 1_000_000) {
        return (count/100 | 0)/10 + ' K'
    } else {
        return (count/100_000 | 0)/10 + ' M'
    }
}

const renderUI = (posts, selectorUI) => {
    const postWrapper = document.querySelector(selectorUI);

    posts.map(post => {
        const postElement = createElement('div', 'post');
        const postImgWrapper = createElement('div', 'post-image-wrapper');
        const postImg = createElement('div', 'post-image');
        const openBtn = createElement('div', 'post-image-open-btn');
        const openBtnIcon = createElement('i', 'icon white-icon open-outline');
        const img = createElement('img', 'lazy');
        img.loading = 'lazy'
        const title = createElement('h3', 'title');
        const timeViews = createElement('div', 'time-views');
        const time = createElement('div', 'time');
        const views = createElement('div', 'views');
        const viewsIcon = createElement('i', 'icon black-icon eye-outline');
        const viewsCount = createElement('span', 'views-count');

        postImg.appendChild(img);
        postImg.appendChild(openBtn);
        openBtn.appendChild(openBtnIcon);
        timeViews.appendChild(time);
        timeViews.appendChild(views);
        views.appendChild(viewsIcon);
        views.appendChild(viewsCount);

        postImgWrapper.appendChild(postImg);
        postElement.appendChild(postImgWrapper);
        postElement.appendChild(title);
        postElement.appendChild(timeViews);
        postWrapper.appendChild(postElement);

        postElement.dataset.keyid = post.id

        openBtn.onclick = e => postClickHandler(e, post)

        img.src = post.imgUrl;
        img.alt = post.title;
        title.innerText = post.title;
        time.innerText = timeFormat(post.createTime);
        viewsCount.innerText = viewsCountFormat(post.views);
    })
}

// Render Post to UI
renderUI(posts, '.posts-wrapper');


// Animation Open Post Modal
const modalPositionState = {
    top: 0,
    left: 0
}

const postCards = $$('.post');
const postModal = $('.post-modal');
const postModalContainer = $('.post-modal .modal-container');

// Close Post Modal
$('.modal-close-icon').onclick = closePostModal

function closePostModal() {
    postModal.classList.remove('open')
    postModal.classList.add('close')
    postModal.style.top = modalPositionState.top + 'px';
    postModal.style.left = modalPositionState.left + 'px';
}

document.onkeyup = e => {
    if (postModal.classList.contains('open') && e.keyCode === 27) {
        console.log(e.keyCode);
        closePostModal()
    }
}

function postClickHandler(e, post) {
    createModalContent(post)
    postModal.style.transition = 'none';

    modalPositionState.top = e.clientY;
    modalPositionState.left = e.clientX;

    postModal.style.top = e.clientY + 'px';
    postModal.style.left = e.clientX + 'px';

    setTimeout(function () {
        postModal.classList.remove('close');
        postModal.style.transition = 'all .4s';
        postModal.classList.add('open');
        postModal.style.top = '50%';
        postModal.style.left = '50%';
    }, 5)
}

function createModalContent({title,imgUrl,description,views,createTime, hashtags}){
    postModalContainer.innerHTML = ''

    const img = createElement('img')
    const tagsTimeViews = createElement('div', 'tags-time-views')
    const hashtagsElement = createElement('div', 'hashtags')
    const time = createElement('div', 'time')
    const viewsContainer = createElement('div', 'views')
    const h1 = createElement('h1', 'title')
    const viewsIcon = createElement('i', 'icon white-icon eye-outline')
    const spanViews = createElement('span')
    const divParagraphs = createElement('div')

    img.src = imgUrl
    img.alt = title
    h1.innerText = title
    time.innerText = timeFormat(createTime)
    spanViews.innerText = views

    hashtags?.map(hashtag => {
        const aTag = createElement('a');
        aTag.innerText = `#${hashtag}`;
        hashtagsElement.appendChild(aTag);
    })

    description?.map(text => {
        const p = createElement('p', 'text-content')
        p.innerText = text
        divParagraphs.appendChild(p)
    })

    tagsTimeViews.appendChild(hashtagsElement)
    tagsTimeViews.appendChild(time)
    tagsTimeViews.appendChild(viewsContainer)
    viewsContainer.appendChild(viewsIcon)
    viewsContainer.appendChild(spanViews)

    postModalContainer.appendChild(img)
    postModalContainer.appendChild(tagsTimeViews)
    postModalContainer.appendChild(h1)
    postModalContainer.appendChild(divParagraphs)
}