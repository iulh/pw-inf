const SCROLL_TRESH_PX = 200
// const CLIENT_ID = "kimne78kx3ncx6brgo4mv6wki5h1ko" // https://github.com/SuperSonicHub1/twitch-graphql-api#user-content-getting-your-client-id

function setTitle(text) {
    document.title = text

    let title = document.getElementById("title")
    if (title) title.innerText = text
}


async function setStreamear(nick) {
    // title
    setTitle(`inf. ${nick}`)

    // image
    let image = document.getElementById("streamer")
    if (image) image.alt = nick

    // todo: fetch twitch pfp. uuh, idk graphql
}

function init() {
    let streamer = document.getElementById("streamer")
    if (!streamer) return console.error("No element with id streamer found")

    function scrollUpdate() {
        let {scrollHeight} = document.body
        scrollHeight = Math.max(innerHeight, scrollHeight)
        if (scrollY + innerHeight >= scrollHeight - SCROLL_TRESH_PX) {
            streamer.style.height = (scrollHeight) + "px"
        }
    }

    window.addEventListener("scroll", scrollUpdate)
    window.addEventListener("resize", scrollUpdate)
    scrollUpdate()
}

