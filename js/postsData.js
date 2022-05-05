const createPost = (id, title, imgUrl, description, views = 0, createTime, hashtags) => {
    return { id, title, imgUrl, description, views, createTime, hashtags }
}

const posts = [
    createPost(
        1,
        `Dubayda yangi murakkab konstruksiyaga ega yo'l ishga tushirildi`,
        `./images/post-image/DubayNews.png`,
        [
            "Dubay shaxrida dunyodagi eng murakkab konstruksiyaga ega yo'l ishga tushirildi. Soha hodimlari yo'lni tartibga solishda muammolar yuzaga kelayotganini takidlashmoqda, ya'ni tirbandliklar. Dubay shaxrida dunyodagi eng murakkab konstruksiyaga ega yo'l ishga tushirildi. Soha hodimlari yo'lni tartibga solishda muammolar yuzaga kelayotganini takidlashmoqda, ya'ni tirbandliklar.",
            "Dubay shaxrida dunyodagi eng murakkab konstruksiyaga ega yo'l ishga tushirildi. Soha hodimlari yo'lni tartibga solishda muammolar yuzaga kelayotganini takidlashmoqda, ya'ni tirbandliklar. Dubay shaxrida dunyodagi eng murakkab konstruksiyaga ega yo'l ishga tushirildi. Soha hodimlari yo'lni tartibga solishda muammolar yuzaga kelayotganini takidlashmoqda, ya'ni tirbandliklar. Dubay shaxrida dunyodagi eng murakkab konstruksiyaga ega yo'l ishga tushirildi. Soha hodimlari yo'lni tartibga solishda muammolar yuzaga kelayotganini takidlashmoqda, ya'ni tirbandliklar. Dubay shaxrida dunyodagi eng murakkab konstruksiyaga ega yo'l ishga tushirildi.",
            "Soha hodimlari yo'lni tartibga solishda muammolar yuzaga kelayotganini takidlashmoqda, ya'ni tirbandliklar. Dubay shaxrida dunyodagi eng murakkab konstruksiyaga ega yo'l ishga tushirildi. Soha hodimlari yo'lni tartibga solishda muammolar yuzaga kelayotganini takidlashmoqda, ya'ni tirbandliklar. Dubay shaxrida dunyodagi eng murakkab konstruksiyaga ega yo'l ishga tushirildi. Soha hodimlari yo'lni tartibga solishda muammolar yuzaga kelayotganini takidlashmoqda, ya'ni tirbandliklar. Dubay shaxrida dunyodagi eng murakkab konstruksiyaga ega yo'l ishga tushirildi. Soha hodimlari yo'lni tartibga solishda muammolar yuzaga kelayotganini takidlashmoqda, ya'ni tirbandliklar. Dubay shaxrida dunyodagi eng murakkab konstruksiyaga ega yo'l ishga tushirildi. Soha hodimlari yo'lni tartibga solishda muammolar yuzaga kelayotganini takidlashmoqda, ya'ni tirbandliklar. Dubay shaxrida dunyodagi eng murakkab konstruksiyaga ega yo'l ishga tushirildi. Soha hodimlari yo'lni tartibga solishda muammolar yuzaga kelayotganini takidlashmoqda, ya'ni tirbandliklar. Dubay shaxrida dunyodagi eng murakkab konstruksiyaga ega yo'l ishga tushirildi. Soha hodimlari yo'lni tartibga solishda muammolar yuzaga kelayotganini takidlashmoqda, ya'ni tirbandliklar. Dubay shaxrida dunyodagi eng murakk."
        ],
        345,
        new Date('10:14:28 04/15/2022'),
        [`yangiliklar`, `dunyo`]
    ),

    createPost(
        2,
        `This is Java Script Code`,
        `./images/post-image/Code.png`,
        [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi maiores optio iusto veritatis officia sunt possimus temporibus impedit sed adipisci! Excepturi, quas delectus enim non culpa sapiente ipsum corrupti laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi maiores optio iusto veritatis officia sunt possimus temporibus impedit sed adipisci! Excepturi, quas delectus enim non culpa sapiente ipsum corrupti laudantium!"
        ],
        120,
        new Date(),
        [`code`, `js`]
    ),

    createPost(
        3,
        `Spiderman. No Way Home`,
        `./images/post-image/Spiderman.jpg`,
        [
            `O'rgimchak odam uyga yo'l yo'q`
        ],
        7683,
        new Date('12/26/2021'),
        ['marvel', 'movie', 'spiderman']
    ),

    createPost(
        4,
        `Post title`,
        `./images/post-image/Wallpaper.jpg`,
        [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi maiores optio iusto veritatis officia sunt possimus temporibus impedit sed adipisci! Excepturi, quas delectus enim non culpa sapiente ipsum corrupti laudantium! This is Post Lorem"
        ],
        12,
        new Date(),
        ['lorem', 'hashtag', 'post', 'wallpaper']
    ),

    createPost(
        5,
        `Black Widow News`,
        `./images/post-image/Black-Widow-5.jpg`,
        [
            "Black Widow The Best Movie. Ushbu film marvel tomonidan ishlab chiqarilgan"
        ],
        298,
        new Date('04/16/2022'),
        ['blackwidow', 'marvel', 'movie']
    ),

    createPost(
        6,
        `Beeline Abonentlari uchun ajoyib yangilik, endi yanada ko'p daqiqa va trafiklar.`,
        `./images/post-image/beeline.jpg`,
        [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia deserunt animi sit neque nemo aut fuga cum. Labore eius minima earum, a totam, assumenda maxime officiis aut voluptate possimus quas!"
        ],
        12,
        new Date(),
        ['beeline', 'mobileoperator']
    ),

    createPost(
        7,
        `Doctor Strange tez kunda...`,
        `./images/post-image/doc-strange.jpg`,
        [
            'Description'
        ],
        123,
        new Date(),
        ['marvel', 'movie', 'strange', 'docstrange', 'multiverse', 'crezy dfgdfg sdgdfg sdgsdg sdgd']
    ),

    createPost(
        8,
        `iPhone 12 Pro Max`,
        `./images/post-image/iphones.jpg`,
        [
            'Apple'
        ],
        1234,
        new Date(),
        ['apple', 'iphone', 'phone']
    ),

    createPost(
        9,
        `Oyning qulashi`,
        `./images/post-image/movie.jpg`,
        [
            `Ushbu film yer sayyorasining tabiiy yo'ldoshi oy haqida. U yuqori texnologik mega konstruksiya bo'lib voqealar shiddat bilan`
        ],
        675,
        new Date('08:24 04/16/2022'),
        ['movie']
    ),

    createPost(
        10,
        `Munisa Rizayevaning yangi qo'shig'iga ishlangan klip`,
        `./images/post-image/mr.jpg`,
        [
            `Description`
        ],
        288,
        new Date(),
        ['music']
    ),

    createPost(
        11,
        `Panjara ortida 5-mavsum`,
        `./images/post-image/pb-5.jpg`,
        [
            'Descri'
        ],
        3456,
        new Date(),
        ['pb', 'pb5', 'movie']
    ),

    createPost(
        12,
        `Panjara ortida 6-mavsum haqida`,
        `./images/post-image/pb-6.jpg`,
        [
            'Descript'
        ],
        12345,
        new Date(),
        ['pb', 'pb6', 'movie']
    ),

    createPost(
        13,
        `Thanos were not dead ?`,
        `./images/post-image/thanos.jpg`,
        [
            "deskri"
        ],
        267888,
        new Date(),
        ['marvel', 'thanos', 'movie', 'avengers']
    ),
]