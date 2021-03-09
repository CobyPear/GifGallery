// takes IMAGE_LINKS and dynamically adds the gifs to the page
const displayGifs = (imageURLs) => {
    imageURLs.forEach(image => {
        // create a row
        const row = document.createElement('div')
        row.className = 'row'
        row.style = 'margin-bottom: 2rem'

        // create an img
        const img = document.createElement('img')
        img.src = image
        img.alt = image.split('/')[9].split('.')[0]

        //Append the elements to the page
        row.append(img)
        MAIN.append(row)
    })
}