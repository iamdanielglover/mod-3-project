const avatarImages = ['https://img.maximummedia.ie/her_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE2XFxcLzAxXFxcLzE3MTYxNjI0XFxcL1JPc3MuanBnXCIsXCJ3aWR0aFwiOjc2NyxcImhlaWdodFwiOjQzMSxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3Lmhlci5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2hlclxcXC9uby1pbWFnZS5wbmc_dj0yMlwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiI1ODA0NGRmMzUyNWExZGI4ZmIzNmUwZWQzZDkxMjY1YWQ2YTZjNWE1In0=/ross.jpg', 'http://shegotofftheplane.weebly.com/uploads/5/8/8/1/58817427/6740592_orig.jpg', 'http://cdn.playbuzz.com/cdn/b92bffce-8a82-4ece-8f98-d97ee9217e34/ffc24e52-7363-4b76-81bc-60088603a373_560_420.jpg', 'http://en.vnews.agency/uploads/posts/2016-10/1477302730_20130725-friends-post.jpg', 'https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_650/tip1gsn6nbxrff09res4']


const baseurl = 'http://localhost:3000'

console.log(baseurl)

let state = {character: {
  name: '',
  fast_attack: 0,
  heavy_attack: 0,
  speed: 0,
  strength: 0,
  hit_points: 0,
  img_url: ''
}}



//PAGE ELEMENTS
const imageBar = document.querySelector('#image_bar')

function applyImageToBar(image) {
  spanEl = document.createElement('span')
  spanEl.innerHTML = `
  <img src="${image}">`
  imageBar.append(spanEl)
}

function applyImagesToBar(images) {
  images.forEach(applyImageToBar)
}

applyImagesToBar(avatarImages)
