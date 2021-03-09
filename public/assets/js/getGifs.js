const getGifs = async () => {
    const response = await fetch('https://storage.googleapis.com/storage/v1/b/gif-gallery/o/')
    const { items } = await response.json()

    items.forEach(item => IMAGE_LINKS.push(item.mediaLink))

    displayGifs(IMAGE_LINKS)
}

window.addEventListener('load', getGifs)
