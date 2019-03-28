# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


villain1 = Villain.create(name: 'Flapdoodle', fast_attack: 3, heavy_attack: 3, speed: 3, strength: 3, hit_points: 6, img_url: 'https://img.maximummedia.ie/joe_co_uk/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lY291ay5tYXhpbXVtbWVkaWEuaWUuczMuYW1hem9uYXdzLmNvbVxcXC93cC1jb250ZW50XFxcL3VwbG9hZHNcXFwvMjAxN1xcXC8wN1xcXC8xMjA5MjY1NlxcXC9uaWMtY2FnZS0xMDI0eDUzOC5qcGdcIixcIndpZHRoXCI6NzY3LFwiaGVpZ2h0XCI6NDMxLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmNvLnVrXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lY291a1xcXC9uby1pbWFnZS5wbmc_dj0yMlwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiI1YTY0N2VmMmNmYjE5ZjY4MTQyNjRhMDQwMjAxNTBjOWRmODFmZjkxIn0=/nic-cage-1024x538.jpg')

villain2 = Villain.create(name: 'Hornswoggler', fast_attack: 5, heavy_attack: 3, speed: 3, strength: 5, hit_points: 8, img_url: 'https://img2.looper.com/img/gallery/craziest-nicolas-cage-performances/vampires-kiss-1988.jpg')

villain3 = Villain.create(name: 'Mutton Shunter', fast_attack: 4, heavy_attack: 5, speed: 7, strength: 6, hit_points: 10, img_url: 'https://static1.srcdn.com/wordpress/wp-content/uploads/Nicolas-Cage-Vampires-Kiss1.jpg')

villain4 = Villain.create(name: 'Smelly Rotter', fast_attack: 7, heavy_attack: 9, speed: 5, strength: 10, hit_points: 13, img_url: 'https://geekoutpost.com/wp-content/uploads/2015/12/71e2063f6edb730d64c1194f580b704a2e1b7658.png__0x1500_q85.png')
