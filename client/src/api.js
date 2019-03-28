class API {
  static init () {
    this.baseUrl = 'http://localhost:3000' // what's this used for?
    this.gameUrl = 'http://localhost:3000/new_wave' // Used for creating a new wave(game)
    this.villainsUrl = 'http://localhost:3000/villains'
    this.herosUrl = 'http://localhost:3000/heros'
    // this.villainsUrl =
  }

  static getVillains() {
    return this.get(this.villainsUrl).then(data => villains = data)
  }

  static get(url) {
    return fetch(url).then(resp => resp.json())
  }

  static post(url, body) {
    return fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
  }

  static postHero(hero) {
    return this.post(this.herosUrl, hero)
  }

  static getHero() {
    return this.get(this.herosUrl)
  }
}

API.init()
