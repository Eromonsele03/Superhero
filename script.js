//https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = 'e0ce3bbe1874dcb84d4e4478c34e05b5'
const BASE_URL =
  `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const newHeroButtton = document.getElementById('newHeroButton')

const heroImageDiv = document.getElementById('heroImage')
const searchButton = document.getElementById('searchButton')

const searchInput = document.getElementById('searchInput')





// 1).---------------Get Super Hero Function---------------
const getSuperHero = (id, name) => {
fetch(`${BASE_URL}/${id}`)
  .then(response => response.json())
  .then(json => { 
    console.log(json.powerstats)
    const superHero = json
    showHeroInfo(json)
    
  })
}


// 2).-----------Show Super hero info  Function---------
 const showHeroInfo = (character) => {
 const img = ` <img src = "${character.image.url}" height= 200 width= 200/>`
//   for (stat in character.powerstats){
//     console.log(stat)
//   }
// }
   const name = `<h2>${character.name}</h2>`
const stats = Object.keys(character.powerstats).map(stat => {
  return`<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
}).join('')
   
   //console.log(stats.join(''))   
   
    heroImageDiv.innerHTML = ` ${name}${img}${stats}`
  
console.log(stats)
 }


// 3).------------Search Super Hero Function---------------
const getSearchSuperHero = (name) => {
  console.log(searchInput.value)
  fetch(`${BASE_URL}/search/${name}`)
  .then(response => response.json())
  .then(json => { 
     
       console.log(json)
   const hero = json.results[0]
    showHeroInfo(hero)
    //console.log(hero)
     
   
    })
 
  }
//--------------------------------------------------------  

      
//getSuperHero(600)

//const img = 'https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg'
const randomId = () => { 
  const num = Math.ceil(Math.random()*731)
  return num;
   }

const btnButton = document.getElementById('btn')


btnButton.onclick = () =>getSuperHero(randomId())
searchButton.onclick = () => getSearchSuperHero(searchInput.value)



console.log(randomId())
 