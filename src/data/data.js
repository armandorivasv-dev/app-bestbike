const products = [
  {id: 1, name: 'Bicicleta Topfuel', cat: 'Crosscountry', desc: 'Bicicleta modelo topfuel para crosscountry', price: 1800, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-crosscountry-topfuel.jpg'},
  {id: 2, name: 'Bicicleta Supercaliber', cat: 'Crosscountry', desc: 'Bicicleta modelo supercaliber para crosscountry', price: 1600, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-crosscountry-supercaliber.webp'},
  {id: 3, name: 'Bicicleta Marlin', cat: 'Crosscountry', desc: 'Bicicleta modelo marlin para crosscountry', price: 700, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-crosscountry-marlin.webp'},
  {id: 4, name: 'Bicicleta Fuelex', cat: 'Trail', desc: 'Bicicleta modelo fuelex para trail', price: 1000, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-trail-fuelex.jpg'},
  {id: 5, name: 'Bicicleta Remedy', cat: 'Trail', desc: 'Bicicleta modelo remedy para trail', price: 1100, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-trail-remedy.webp'},
  {id: 6, name: 'Bicicleta Slash', cat: 'Trail', desc: 'Bicicleta modelo slash para trail', price: 1200, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-trail-slash.webp'},
  {id: 7, name: 'Bicicleta Roscoe', cat: 'Rigida', desc: 'Bicicleta modelo roscoe rigida', price: 900, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-rigida-roscoe.jpg'},
  {id: 8, name: 'Bicicleta Remedy', cat: 'Rigida', desc: 'Bicicleta modelo remedy rigida', price: 950, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-rigida-xcaiber.webp'},
  {id: 9, name: 'Bicicleta Procaliber', cat: 'Rigida', desc: 'Bicicleta modelo procaliber rigida', price: 800, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-rigida-procaliber.webp'},    
]
export const getProducts = () => {
  return new Promise (resolve => {
    setTimeout(()=>{
      resolve(products)
    }, 1000)
  })
}

export const getItem = () => {
  return new Promise (resolve => {
    setTimeout(()=>{
      resolve(products)
    }, 2000)
  })
}