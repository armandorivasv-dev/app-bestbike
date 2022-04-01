const products = [
  {id: 1, name: 'Topfuel', cat: 'crosscountry', desc: 'bicicleta topfuel para crosscountry', price: 1800, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-crosscountry-topfuel.jpg'},
  {id: 2, name: 'Supercaliber', cat: 'crosscountry', desc: 'bicicleta supercaliber para crosscountry', price: 1600, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-crosscountry-supercaliber.webp'},
  {id: 3, name: 'Marlin', cat: 'crosscountry', desc: 'bicicleta marlin para crosscountry', price: 700, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-crosscountry-marlin.webp'},
  {id: 4, name: 'Fuelex', cat: 'trail', desc: 'bicicleta fuelex para trail', price: 1000, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-trail-fuelex.jpg'},
  {id: 5, name: 'Remedy', cat: 'trail', desc: 'bicicleta remedy para trail', price: 1100, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-trail-remedy.webp'},
  {id: 6, name: 'Slash', cat: 'trail', desc: 'bicicleta slash para trail', price: 1200, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-trail-slash.webp'},
  {id: 7, name: 'Roscoe', cat: 'rigida', desc: 'bicicleta roscoe rigida', price: 900, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-rigida-roscoe.jpg'},
  {id: 8, name: 'Remedy', cat: 'rigida', desc: 'bicicleta remedy rigida', price: 950, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-rigida-xcaiber.webp'},
  {id: 9, name: 'Procaliber', cat: 'rigida', desc: 'bicicleta procaliber rigida', price: 800, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-rigida-procaliber.webp'},    
]
export const getProducts = () => {
  return new Promise (resolve => {
    setTimeout(()=>{
      resolve(products)
    }, 1000)
  })
}