const avatarImages =
  [
    {
      image_id: 1,
      img_url: 'https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_650/tip1gsn6nbxrff09res4'
    },
    {
      image_id: 2,
      img_url: 'http://en.vnews.agency/uploads/posts/2016-10/1477302730_20130725-friends-post.jpg'
    },
    {
      image_id: 3,
      img_url: 'http://cdn.playbuzz.com/cdn/b92bffce-8a82-4ece-8f98-d97ee9217e34/ffc24e52-7363-4b76-81bc-60088603a373_560_420.jpg'
    },
    {
      image_id: 4,
      img_url: 'http://shegotofftheplane.weebly.com/uploads/5/8/8/1/58817427/6740592_orig.jpg'
    },
    {
      image_id: 5,
      img_url: 'https://img.maximummedia.ie/her_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE2XFxcLzAxXFxcLzE3MTYxNjI0XFxcL1JPc3MuanBnXCIsXCJ3aWR0aFwiOjc2NyxcImhlaWdodFwiOjQzMSxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3Lmhlci5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2hlclxcXC9uby1pbWFnZS5wbmc_dj0yMlwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiI1ODA0NGRmMzUyNWExZGI4ZmIzNmUwZWQzZDkxMjY1YWQ2YTZjNWE1In0=/ross.jpg'
    }
  ]

const baseurl = 'http://localhost:3000'
let villains = []

API.get('http://localhost:3000/villains').then(data => villains = data)

// let villain_state = {
//   name: '',
//   fast_attack: 0,
//   heavy_attack: 0,
//   speed: 0,
//   strength: 0,
//   hit_points: 0,
//   img_url: ''
// }

let state = {
  villain:
    {
      name: '',
      fast_attack: 0,
      heavy_attack: 0,
      speed: 0,
      strength: 0,
      hit_points: 0,
      img_url: ''
    },
  character:
    {
      name: '',
      fast_attack: 0,
      heavy_attack: 0,
      speed: 0,
      strength: 0,
      hit_points: 0,
      img_url: ''
    }
}



//PAGE ELEMENTS
const imageBar = document.querySelector('#image_bar')
const main = document.querySelector('#main_div')
const formDiv = document.createElement('div')
const heroDiv = document.createElement('div')
const villainDiv = document.createElement('div')


//SIGN UP PAGE

function applyImageToBar(image) {
  spanEl = document.createElement('span')
  spanEl.innerHTML = `
  <img id="${image.image_id}" src="${image.img_url}">`
  imageBar.append(spanEl)
  spanEl.addEventListener('click', () => {
    state.character.img_url = image.img_url
    displayForm()
  })
}

function applyImagesToBar(images) {
  images.forEach(applyImageToBar)
}

function displayForm() {
  formDiv.innerHTML = `
        <form class="create-superhero" style="" name="">
        <h3>You have 20 points to spend!</h3>
          <input type="text" name="name" value="" placeholder="Enter a name..." class="input-text">
        <br>
          <input type="number" name="fast_attack" value="0" placeholder="0" class="input-text">
        <br>
          <input type="number" name="heavy_attack" value="0" placeholder="0" class="input-text">
        <br>
          <input type="number" name="speed" value="0" placeholder="0" class="input-text">
        <br>
          <input type="number" name="strength" value="0" placeholder="0" class="input-text">
        <br>
          <input type="number" name="hit_points" value="0" placeholder="0" class="input-text">
        <br>
          <input type="text" name="image" value="${state.character.img_url}" placeholder="0" class="input-text">
        <br>
        <input type="submit" name="submit" value="Create Your Hero" class="submit">
      </form>
      `
      main.append(formDiv)
        form = document.querySelector('form')
      submitEventListener(form)
}

function submitEventListener(form) {

  form.addEventListener('submit', event => {
    event.preventDefault()
    console.log('hello');
    console.log(form.image.value);
    let total = parseInt(form.fast_attack.value) + parseInt(form.heavy_attack.value) + parseInt(form.speed.value) + parseInt(form.strength.value) + parseInt(form.hit_points.value)
    validfyPointSpenditure(total, form)
    form.reset()
    main.innerHTML = ""
    displayInformation()
  })
}

function validfyPointSpenditure(num, form) {
  if (num > 20 || num < 20) {
    alert('Must spend 20 points.')
    return false
  } else if (num <= 20) {
    state.character.name = form.name.value
    state.character.fast_attack = form.fast_attack.value
    state.character.heavy_attack = form.heavy_attack.value
    state.character.speed = form.speed.value
    state.character.strength = form.strength.value
    state.character.hit_points = form.hit_points.value
  }
}

//FIGHT PAGE
function displayInformation() {
  // let spanForCards = document.createElement('span')
  let battleDiv = document.createElement('span')
  battleDiv.id = "battle-div"
  heroCard()
  villainCard()
  main.append(battleDiv)
  battleDiv.append(heroDiv, villainDiv)
}

function heroCard() {
  heroDiv.className = "card"
  heroDiv.innerHTML =
    `
      <h2>Name: ${state.character.name}</h2>
      <h3>Hit Points: ${state.character.hit_points}</h3>
      <div class="image-cropper">
        <img src=${state.character.img_url} class="hero-image">
      </div>
    `
}

function villainCard() {
  villainDiv.className = "card"
  villainDiv.innerHTML =
    `
      <h2>Name: ${state.villain.name}</h2>
      <h3>Hit Points: ${state.villain.hit_points}</h3>
      <div class="image-cropper">
        <img src=${state.villain.img_url} class="hero-image">
      </div>
    `
}



//CALL
// applyImagesToBar(avatarImages)
const initialize = () => {
  API.get('http://localhost:3000/villains').then(data => villains = data)
  applyImagesToBar(avatarImages)
}

initialize()
