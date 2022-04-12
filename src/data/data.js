const products = [
  {id: '1', name: 'Bicicleta Topfuel', cat: 'crosscountry', desc: 'Bicicleta modelo topfuel para crosscountry', price: 1800, stock: 1, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-crosscountry-topfuel.jpg'},
  {id: '2', name: 'Bicicleta Supercaliber', cat: 'crosscountry', desc: 'Bicicleta modelo supercaliber para crosscountry', price: 1600, stock: 0,img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-crosscountry-supercaliber.webp'},
  {id: '3', name: 'Bicicleta Marlin', cat: 'crosscountry', desc: 'Bicicleta modelo marlin para crosscountry', price: 700, stock: 10, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-crosscountry-marlin.webp'},
  {id: '4', name: 'Bicicleta Fuelex', cat: 'trail', desc: 'Bicicleta modelo fuelex para trail', price: 1000, stock: 10, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-trail-fuelex.jpg'},
  {id: '5', name: 'Bicicleta Remedy', cat: 'trail', desc: 'Bicicleta modelo remedy para trail', price: 1100, stock: 10, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-trail-remedy.webp'},
  {id: '6', name: 'Bicicleta Slash', cat: 'trail', desc: 'Bicicleta modelo slash para trail', price: 1200, stock: 10, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-trail-slash.webp'},
  {id: '7', name: 'Bicicleta Roscoe', cat: 'rigida', desc: 'Bicicleta modelo roscoe rigida', price: 900, stock: 10, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-rigida-roscoe.jpg'},
  {id: '8', name: 'Bicicleta Remedy', cat: 'rigida', desc: 'Bicicleta modelo remedy rigida', price: 950, stock: 10, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-rigida-xcaiber.webp'},
  {id: '9', name: 'Bicicleta Procaliber', cat: 'rigida', desc: 'Bicicleta modelo procaliber rigida', price: 800, stock: 10, img: 'https://bestbike-mountainbike.000webhostapp.com/multimedia/images/bestbike-rigida-procaliber.webp'},    
]

const categories = [
  {id: 'crosscountry', name: 'Crosscountry' },
  {id: 'trail', name: 'Trail' },
  {id: 'rigida', name: 'Rigida' }
]

export const getCategories = () => {
  return new Promise (resolve =>{
    setTimeout(()=>{
      resolve(categories)
    }, 500)
  }

  )
}

export const getProducts = (categoryId) => {
  return new Promise (resolve => {
    setTimeout(()=>{
      resolve(categoryId ? products.filter(prod => prod.cat === categoryId) : products)
    }, 500)
  })
}

export const getItem = (id) => {
  return new Promise (resolve => {
    setTimeout(()=>{
      resolve(products.find(prod => prod.id === id))
    }, 500)
  })
}

