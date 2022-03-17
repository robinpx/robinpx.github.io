let codePosts = [
    {
        id: "a1",
        title: "Pigeon Sale",
        year: "2021",
        images: ["/code/pigeon-sale-front-page.png", "/code/pigeon-sale-overview.png", "/code/pigeon-sale-overview-2.png"],
        desc: ["E-Commerce Web App", 
        "<b>Pigeon Sale</b> is a secondhand trading system full stack web application inspired by famous Chinese e-commerce apps like Taobao and 闲鱼 created as our final project for Fall 2021 Software Engineering course.",
        "My team and I built and tested our application with agile and XP methodologies by targeting our planned iterative goals within a short 2 month span from October to December. We separated our responsibilities into three areas: mySQL database design and API testing with Postman, Flask API backend with Redis server, and React frontend with a JavaScript library using Fetch API to connect backend services.",
        "My main responsibilities were developing, maintaining, and designing the frontend and the occasional backend debugging missed during API testing. My main technologies used were React, Sass, Fetch API, and MUI. All of which were self-learned -- alongside the software engineering and git workflow, methods, and frameworks -- with greater familiarity during the course of this project."],
        genre: ["full stack"],
        tags: ["React", "Sass/SCSS","JavaScript","Fetch API", "MUI", "mySQL", "Redis", "Python", "pymysql", "Flask", "Github", "git","Responsive"],
        links: [["https://github.com/Harrilee/PigeonSale","GitHub"], ["https://github.com/Harrilee/PigeonSale/tree/main/frontend", "Frontend - GitHub"]],
        slidelayout: true
    },
    {
        id: "a2",
        title: "AuxNow",
        year: "2020",
        images: ["/code/auxnow.png", "/code/auxnow-2.png", "/code/auxnow-3.png",
        "/code/auxnow-4.png", "/code/auxnow-5.png", "/code/auxnow-6.png","/code/auxnow-7.png","/code/auxnow-8.png"],
        desc: ["Spotify Playlist Maker Web App", 
        "<b>AuxNow</b> is a full stack web application to make playlists based off genre, recommendations, and audio features made during Fall 2020 in my spare time between classes. This project is the manifestation of teaching myself the basics of React and Node."],
        genre: ["full stack"],
        tags: ["React", "Node", "CSS", "Spotify API", "Responsive"],
        links: [["https://github.com/robinpx/auxnow", "GitHub"], ["https://auxnow.herokuapp.com/", "Live"]],
        slidelayout: true
    },
    {
        id: "a3",
        title: "dataverses",
        year: "2020",
        images: ["/code/dataverses.jpg"],
        desc: ["Nonsense Poems with Cooper Hewitt API",
        "<b>dataverses</b> is a project born from expanding a simple API exercise for class. It creates poems with Cooper Hewitt's design catalogue and its API data and forming silly poems inspired by Gertrude Stein. The poems are created with simple ML implementations of the spaCy library and the color naming is produced from using kmeans and a nearest color algorithm. The main clustered colors are shown on the top bar and sporadically within the poems."],
        genre: ["flask app"],
        tags: ["Flask", "Python", "API", "HTML/CSS", "numpy", "spaCy", "scikit-learn", "Responsive"],
        links: [["https://github.com/robinpx/dataverses", "GitHub"]],
        slidelayout: true
    },
    {
        id: "a4",
        title: "Tumblr Boombox",
        year: "2018",
        images: ["/code/boombox.png", "/code/boombox2.png", "/code/boombox-responsive.png"],
        desc: ["Tumblr Audio Player",
        "<b>Tumblr Boombox</b> is a client-side web app that plays every audio post on a Tumblr user's blog that I made in a few days over March 2018. It is an accumulation of my occassional self-taught HTML/CSS, JavaScript, and jQuery skills I had been working on since 2016."],
        genre: ["front end"],
        tags: ["jQuery", "HTML/CSS", "JavaScript", "Tumblr API","Responsive"],
        links: [["https://github.com/robinpx/boombox", "GitHub"], ["https://robinpx.github.io/boombox", "Live"]],
        slidelayout: false
    },
    {
        id: "b1",
        title: "ALTAR-3000",
        year: "2021",
        images: ["/code/altar3000-1.jpg", "/code/altar3000-2.jpg","/code/altar3000-3.jpg", "/code/altar3000-4.jpg"],
        desc: ["AI Prophetic Robot Arm", 
        "<blockquote>Powered by natural language processing, this intelligent home altar performs gimmicky New Age rituals all while generating 'prophecies' for headlines retrieved from betting platforms that offer exchanges on near-future political, financial, and other events. The automated sand garden—adorned with paraphernalia that might have meant something once but doesn’t reflect much in the age of multitude of easily digestible truths—disseminates its prophecies on conspiracy forums.</blockquote>",
        "<b>ALTAR-3000</b>, an interactive 'automated totem of customised belief', creates its own prophecies while performing New Age rituals at its home altar. Given the rise of misinformation and algorithmically powered echo chambers, this project is a reflection on the digital prophets and its worshippers -- like Q and QAnon -- who find their religious safe havens in social media platforms like 8kun that latch onto a security and sense of politics and the world. It serves as a sacred place and performance of how beliefs derived from internet information seep and erect themselves into the intimate spaces of our real-life -- in our homes, our perceptions, and our lives.", 
        "My main responsibilities were creating a Selenium web scraper and driver to post algorithmically created prophecies to 8kun and a tool to interpolate points in space for the arm's New Age and meditative performance with ROS, IK/FK functionalities, and Arm_lib Python library provided by Yahboom in a memory saving way within a 4GB Jetson Nano. ROS and C++ was used to model the arm's path and print the servo degrees into a text file. Arm_lib, Python, and the generated text file was used in the end to initiate the specified actions."],
        genre: ["media art"],
        tags: ["ROS", "C++", "Selenium", "Python", "OOP", "Flask", "openFrameworks", "Linux Ubuntu"],
        links: [["https://vjnks.com/works/altar-3000-51", "Full Documentation"], ["https://github.com/robinpx/chronus/blob/main/altar-3000-py-txt-files", "GitHub"], ["https://vimeo.com/662667207?embedded=true&source=vimeo_logo&owner=17016014", "Vimeo"]],
        slidelayout: true
    },
    {
        id: "b2",
        title: "Unfamiliar Convenient",
        year: "2021",
        images: ["https://i.imgur.com/LIXY5Qs.jpg", "https://i.imgur.com/R0CSiM5.jpg", "https://i.imgur.com/TUoeGhQ.jpg"],
        desc: ["Sentient Home Devices", "<blockquote>The project aims to draw a clearer distinction between the two often coupled definitions, the 'internet of things' and 'the smart home', as a prerequisite to imagine alternatives for dominant servitude-driven relationships with everyday technologies. What if domestic appliances were to be considered a species?</blockquote>",
        "<b>Unfamiliar Convenient</b> reflects how home devices serve in our intimate spaces and studies a relationship between a voice assistant, a vacuum cleaner, and other technologies. ", 
        "I implemented the roomba vaccuum cleaner's initialization by scraping GPS serial data with Arduino programming language to extract certain signal-to-ratio threshold for the roomba to start, and a Settings GUI with Flask to allow flexibility in mapping the roomba's word map to its environment."],
        genre: ["media art"],
        tags: ["Home devices", "Voice Assistant", "Arduino", "Flask", "Python"],
        links: [["https://vjnks.com/works/unfamiliar-convenient-46", "Full Documentation"],["https://github.com/robinpx/chronus","GitHub"], ["https://vimeo.com/641369896?embedded=true&source=vimeo_logo&owner=17016014", "Vimeo"]],
        slidelayout: true
    }
];

export default(codePosts);
