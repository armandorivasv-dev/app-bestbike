export const adapterProductsFromFirestore = (doc) => {
  const data = doc.data()

  const formattedProduct = {
    id: doc.id,
    cat: data.cat,
    img: data.img,
    price: data.price,
    desc: data.desc,
    stock: data.stock,
    name: data.name,
    sku: data.sku
  }
  return formattedProduct
}