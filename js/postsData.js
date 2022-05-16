const createPost = (id, title, imgUrl, description, views = 0, createTime, hashtags) => {
    return { id, title, imgUrl, description, views, createTime, hashtags }
}

let posts = [];

async function getData(pagStart = 1) {
    posts = []
    let data = await fetch('http://62.209.143.146:8800/news/')
    data = await data.json()

    for(let i=pagStart; i<data?.length; i++) {
       posts.push(
            createPost(
                data[i]?.id,
                data[i]?.name,
                data[i]?.image,
                [data[i]?.description],
                Math.round(Math.random() * 99999),
                new Date(data[i]?.date_added),
                ["xtb", "news", "talim"]
            )
        )

        if(i === pagStart*10) break
    }

    // Render Post to UI
    CreatePagination(Math.ceil(data.length/10))
    renderUI(posts, '.posts-wrapper');
}

getData()