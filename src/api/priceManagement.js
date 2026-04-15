import { products as defaultProducts } from './productList.js'

const STORAGE_KEY = 'huiyu_product_prices'

export const priceManagement = {
  getPrices() {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
    return this.getDefaultPrices()
  },

  savePrices(prices) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prices))
  },

  getDefaultPrices() {
    const prices = {}
    Object.keys(defaultProducts).forEach(productId => {
      const product = defaultProducts[productId]
      prices[productId] = product.specs.map(spec => ({
        number: spec.number,
        standardPrice: spec.standardPrice,
        price: spec.price
      }))
    })
    return prices
  },

  updateProductPrice(productId, specs) {
    const prices = this.getPrices()
    prices[productId] = specs.map(spec => ({
      number: spec.number,
      standardPrice: spec.standardPrice,
      price: spec.price
    }))
    this.savePrices(prices)
  },

  resetToDefault() {
    localStorage.removeItem(STORAGE_KEY)
  },

  isModified() {
    return localStorage.getItem(STORAGE_KEY) !== null
  }
}

export const getProductSpecs = (productId) => {
  const product = defaultProducts[productId]
  if (!product) return []

  const storedPrices = priceManagement.getPrices()
  const productPrices = storedPrices[productId] || []

  return product.specs.map(spec => {
    const storedPrice = productPrices.find(p => p.number === spec.number)
    return {
      ...spec,
      standardPrice: storedPrice ? storedPrice.standardPrice : spec.standardPrice,
      price: storedPrice ? storedPrice.price : spec.price
    }
  })
}

export default {
  priceManagement,
  getProductSpecs
}