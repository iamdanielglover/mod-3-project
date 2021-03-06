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

let villains = []
// let heros = []

API.get('http://localhost:3000/villains').then(data => villains = data)


let state = {
  round: 1,
  status: 'Win',
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
      img_url: '',
      score: 100
    }
}


//PAGE ELEMENTS
const imageBar = document.querySelector('#image_bar')
const main = document.querySelector('#main_div')
const formDiv = document.createElement('div')
formDiv.className = "form-div"
const heroDiv = document.createElement('div')
const villainDiv = document.createElement('div')


//SIGN UP PAGE

function applyImageToBar(image) {
  divEl = document.createElement('div')
  divEl.innerHTML =
  `
  <img id="${image.image_id}" src="${image.img_url}">
  `

  imageBar.append(divEl)
  divEl.addEventListener('click', () => {
    document.querySelector('.pick-character').remove()
    state.character.img_url = image.img_url
    displayForm()
  })
}

function applyImagesToBar(images) {
  images.forEach(applyImageToBar)
}

function displayForm() {
  formDiv.innerHTML = `
        <form class="create-superhero" style="" name="myForm">
        <h3>You have 20 points to spend!</h3>
        <label >Name</label>
          <input type="text" name="name" value="" placeholder="Enter a name..." class="input-text">
        <br>
        <label >Fast Attack</label>
          <input type="number" name="fast_attack" value="0" placeholder="0" class="input-text">
        <br>
        <label >Heavy Attack</label>
          <input type="number" name="heavy_attack" value="0" placeholder="0" class="input-text">
        <br>
        <label >Speed Attack</label>
          <input type="number" name="speed" value="0" placeholder="0" class="input-text">
        <br>
        <label >Strength Attack</label>
          <input type="number" name="strength" value="0" placeholder="0" class="input-text">
        <br>
        <label >Hit Points</label>
          <input type="number" name="hit_points" value="0" placeholder="0" class="input-text">
        <br>
          <input type="hidden" name="image" value="${state.character.img_url}" placeholder="0" class="input-text">
        <br>
        <input type="submit" name="submit" value="Create Your Hero" class="submit">
      </form>
      `
      main.append(formDiv)
        let form = document.querySelector('form')
      submitEventListener(form)
}

function validateForm() {
  const x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out!");
    return false;
  }
  return true;
}

function submitEventListener(form) {

  form.addEventListener('submit', event => {
    event.preventDefault()
    let total = parseInt(form.fast_attack.value) + parseInt(form.heavy_attack.value) + parseInt(form.speed.value) + parseInt(form.strength.value) + parseInt(form.hit_points.value)
    if (validfyPointSpenditure(total, form) && validateForm()) {
    main.innerHTML = ""
    displayInformation()
  } else if (validfyPointSpenditure(total, form) === false && validateForm() == false) {
    alert('Must spend 20 points.')
    form.reset()
  }
  })
}

function validfyPointSpenditure(num, form) {
  if (num != 20) {
    return false
  } else if (num == 20) {
    state.character.name = form.name.value
    state.character.fast_attack = form.fast_attack.value
    state.character.heavy_attack = form.heavy_attack.value
    state.character.speed = form.speed.value
    state.character.strength = form.strength.value
    state.character.hit_points = form.hit_points.value
  }
  return true
}

//FIGHT PAGE
function displayInformation() {
  // let spanForCards = document.createElement('span')
  main.innerHTML =  ``
  state.villain = villains[state.round - 1]
  let battleDiv = document.createElement('span')
  battleDiv.id = "battle-div"
  heroCard()
  villainCard()
  main.append(battleDiv)
  battleDiv.append(heroDiv, villainDiv)
  createAttackButtons()
}

function heroCard() {
  heroDiv.className = "card"
  heroDiv.innerHTML =
    `
      <h2>Name: ${state.character.name}</h2>
      <div class="image-cropper">
        <img src=${state.character.img_url} class="hero-image">
      </div>
      <h3>Hit Points: ${state.character.hit_points}</h3>
    `
}

function villainCard() {
  villainDiv.className = "card"
  villainDiv.innerHTML =
    `
      <h2>Name: ${state.villain.name}</h2>
      <div class="image-cropper">
        <img src=${state.villain.img_url} class="hero-image">
      </div>
      <h3>Hit Points: ${state.villain.hit_points}</h3>
    `
}

function createAttackButtons() {
  let divButtonEl = document.createElement('div')
  divButtonEl.id = 'button-div'
  divButtonEl.innerHTML = `
    <span>
      <button id='fast-attack'>Fast Attack</button>
    </span>
    <span>
    <button id='heavy-attack'>Heavy Attack</button>
    </span>
    <span>
    <button id='strength-attack'>Strength Attack</button>
    </span>
    <span>
    <button id='speed-attack'>Speed Attack</button>
    </span>
  `
  main.append(divButtonEl)
  fastAttackButtonListener()
  heavyAttackButtonListener()
  strengthAttackButtonListener()
  speedAttackButtonListener()
}

function fastAttackButtonListener() {
  let fastAttackBtn = document.querySelector('#fast-attack')
  fastAttackBtn.addEventListener('click', event => {
    console.log('fasssstt attttaaaacccckkkkk');
    fastAttack()
    state.character.score--
    continueCondition()
  })
}

function heavyAttackButtonListener() {
  let heavyAttackBtn = document.querySelector('#heavy-attack')
  heavyAttackBtn.addEventListener('click', event => {
    console.log('heavy attttaaaacccckkkkk');
    heavyAttack()
    state.character.score--
    continueCondition()
  })
}

function strengthAttackButtonListener() {
  let strengthAttackBtn = document.querySelector('#strength-attack')
  strengthAttackBtn.addEventListener('click', event => {
    console.log('strength attttaaaacccckkkkk');
    strengthAttack()
    state.character.score--
    continueCondition()
  })
}

function speedAttackButtonListener() {
  let speedAttackBtn = document.querySelector('#speed-attack')
  speedAttackBtn.addEventListener('click', event => {
    console.log('speed attttaaaacccckkkkk');
    speedAttack()
    state.character.score--
    continueCondition()
  })
}

function callback() {
//punching guy gif
  main.innerHTML = ""
  main.innerHTML =
  `
  <div class="punch-gif">
  <img src="https://media.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif"/>
  <h1>Z I N G ! !</h1>
  </div>
  `
}

// FIGHT MECHANICS
const randomNum = () => Math.ceil(Math.random()*10)

function makeAttack(move) {
    count = move;
	  nums = []
	do {
    	nums.push(randomNum())
		count--
    } while (count > 0)
	return successRolls(nums)
}

function successRolls(array) {
    successes = array.filter(element => element > 6)
    return successes.length
}

//villain attacks
const villainFastAttack = () => makeAttack(state.villain.fast_attack)
const villainHeavyAttack = () => makeAttack(state.villain.heavy_attack)
const villainStrength = () => makeAttack(state.villain.strength)
const villainSpeed = () => makeAttack(state.villain.speed)

//hero attacks
const heroFastAttack = () => makeAttack(state.character.fast_attack)
const heroHeavyAttack = () => makeAttack(state.character.heavy_attack)
const heroStrength = () => makeAttack(state.character.strength)
const heroSpeed = () => makeAttack(state.character.speed)

//call hero and villain fast attack
function fastAttack() {
let heroDamage = heroFastAttack()
let villainDamage = villainFastAttack()
state.character.hit_points -= villainDamage
state.villain.hit_points -= heroDamage
}

function heavyAttack() {
let heroDamage = heroHeavyAttack()
let villainDamage = villainHeavyAttack()
state.character.hit_points -= villainDamage
state.villain.hit_points -= heroDamage
}

function strengthAttack() {
let heroDamage = heroStrength()
let villainDamage = villainStrength()
state.character.hit_points -= villainDamage
state.villain.hit_points -= heroDamage
}

function speedAttack() {
let heroDamage = heroSpeed()
let villainDamage = villainSpeed()
state.character.hit_points -= villainDamage
state.villain.hit_points -= heroDamage
}

//fight conditions
function continueCondition() {
  let hHP = state.character.hit_points
  let vHP = state.villain.hit_points
  if (vHP > 0 && hHP > 0) {
    setTimeout(displayInformation, 1250);
    callback()

  } else if (vHP > 0 && hHP <= 0) {
    state.status = 'Lose'
    state.character.score -= 30
    main.innerHTML = ""
    // API.postHero(state.character)
    // .then(topTenLeaderboard)
    topTenLeaderboard()
    console.log('hero loses');
  } else if (vHP <= 0 && hHP > 0) {
    roundCondition()
    console.log('hero wins');
  } else if (vHP <= 0 && hHP <= 0) {
    state.status = 'Lose'
    state.character.score -= 30
    main.innerHTML = ""
    console.log('Everybody loses!');
    // API.postHero(state.character)
    // .then(topTenLeaderboard)
    topTenLeaderboard()
  }
}


function roundCondition() {
  state.round++
  if (state.round < 5) {
    main.innerHTML = ""
    upgradeForm()
    //displayInformation()
  } else {
    state.character.score += 10
    main.innerHTML = `<h2> You WIN!!! </h2>`
    console.log('You WIN!');
    API.postHero(state.character)
    .then(topTenLeaderboard)

  }
}

//EDIT PAGE
function upgradeForm() {
  let points = state.round + 2

  formDiv.innerHTML = `
        <form class="upgrade-superhero" style="" name="">
        <h1>You completed round ${state.round - 1}</h1>
        <h3>You have ${points} points to spend!</h3>
        <br>
        <label >Fast Attack</label>
          <input type="number" name="fast_attack" value="${state.character.fast_attack}" placeholder="0" class="input-text">
        <br>
        <label >Heavy Attack</label>
          <input type="number" name="heavy_attack" value="${state.character.heavy_attack}" placeholder="0" class="input-text">
        <br>
        <label >Speed Attack</label>
          <input type="number" name="speed" value="${state.character.speed}" placeholder="0" class="input-text">
        <br>
        <label >Strength Attack</label>
          <input type="number" name="strength" value="${state.character.strength}" placeholder="0" class="input-text">
        <br>
        <label >Hit Points</label>
          <input type="number" name="hit_points" value="${state.character.hit_points}" placeholder="0" class="input-text">
        <br>
        <input type="submit" name="submit" value="Create Your Hero" class="submit">
      </form>
      `
      main.append(formDiv)
      let upgradeFormEl = document.querySelector('.upgrade-superhero')
      upgradeEventListener(upgradeFormEl)
}

function upgradeEventListener(form) {
  form.addEventListener('submit', event => {
    event.preventDefault()
    let total = parseInt(form.fast_attack.value) + parseInt(form.heavy_attack.value) + parseInt(form.speed.value) + parseInt(form.strength.value) + parseInt(form.hit_points.value)
    let allowance = parseInt(state.character.fast_attack) + parseInt(state.character.heavy_attack) + parseInt(state.character.speed) + parseInt(state.character.strength) + parseInt(state.character.hit_points) + state.round + 2
    if (upgradeValidifyPointSpenditure(total, form, allowance)) {
    main.innerHTML = ""
    displayInformation()
  } else if (upgradeValidifyPointSpenditure(total, form, allowance) === false) {
    alert(`Must spend ${allowance} points. You've spent ${total} so far`)
  }
  })
}

function upgradeValidifyPointSpenditure(total, form, allowance) {
  if (total != allowance) {
    return false
  } else if (total == allowance) {
    state.character.fast_attack = form.fast_attack.value
    state.character.heavy_attack = form.heavy_attack.value
    state.character.speed = form.speed.value
    state.character.strength = form.strength.value
    state.character.hit_points = form.hit_points.value
  }
  return true
}


//END PAGE

//end page show
function displayEndPage(heros) {
  main.innerHTML = ""
  let mainContainerDiv = document.createElement('div')
  mainContainerDiv.className = "leaderboard-container"
  let titleDiv = document.createElement('div')
  let infoContainerDiv = document.createElement('div')
  let infoDiv = document.createElement('div')
  infoDiv.className = "leaderboard-info"
  titleDiv.innerHTML = `<h1>You ${state.status}!</h1>`
  let rows = heros.map(hero =>
 `<tr>
   <td>${heros.indexOf(hero) + 1}</td>
   <td>${hero.name}</td>
   <td>${hero.score}</td>
 </tr>
 `
).join('')

  infoDiv.innerHTML =
  `
    <img src="${state.character.img_url}" alt="">
    <h3>Winner's Leaderboard</h3>
    <div class="leaderboard-table">
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody id="put-it-in">
      </tbody>
    </table>
    </div>
  `
  // tbodyel = document.querySelector('tbody').innerHTML = `${rows}`

  main.append(mainContainerDiv)
  mainContainerDiv.append(titleDiv, infoContainerDiv)
  infoContainerDiv.append(infoDiv)
    tbodyel = document.querySelector('#put-it-in').innerHTML = `${rows}`
}


function topTenLeaderboard() {
  // let heros = []
  API.getHero()
  .then(data => {heros = data.slice(0, 10)
    displayEndPage(heros)})
}

//final score
const finalScore = () => state.character.score += state.character.hit_points

//CALL
// applyImagesToBar(avatarImages)
const initialize = () => {
  API.get('http://localhost:3000/villains').then(data => villains = data)
  applyImagesToBar(avatarImages)
}

initialize()
