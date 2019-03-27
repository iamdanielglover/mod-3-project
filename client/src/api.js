class API {
  static init () {
    this.baseUrl = 'http://localhost:3000' // what's this used for?
    this.gameUrl = 'http://localhost:3000/new_wave' // Used for creating a new wave(game)
    this.villainsUrl = 'http://localhost:3000/villains'
    // this.villainsUrl =
  }

  static getScore(hero_id) {
    return this.get(this.baseUrl + `/get_score/${hero_id}`)
  }

  static getVillains() {
    return this.get(this.villainsUrl).then(data => villains = data)
  }

  static get(url) {
    return fetch(url).then(resp => resp.json())
  }
}

API.init()
