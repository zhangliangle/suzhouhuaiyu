import { reactive, watch } from 'vue'
import { products as defaultProducts } from '../api/productList.js'

const STORAGE_KEY = 'huiyu_product_prices'

const state = reactive({
  prices: {},
  initialized: false
})

const initializePrices = () => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    state.prices = JSON.parse(stored)
  } else {
    state.prices = getDefaultPrices()
  }
  state.initialized = true
}

const getDefaultPrices = () => {
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
}

const savePrices = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.prices))
  window.dispatchEvent(new Event('prices-updated'))
}

const updateProductPrice = (productId, specs) => {
  state.prices[productId] = specs.map(spec => ({
    number: spec.number,
    standardPrice: spec.standardPrice,
    price: spec.price
  }))
  savePrices()
}

const resetToDefault = () => {
  localStorage.removeItem(STORAGE_KEY)
  state.prices = getDefaultPrices()
  window.dispatchEvent(new Event('prices-updated'))
}

const getProductSpecs = (productId) => {
  const product = defaultProducts[productId]
  if (!product) return []

  const productPrices = state.prices[productId] || []

  return product.specs.map(spec => {
    const storedPrice = productPrices.find(p => p.number === spec.number)
    return {
      ...spec,
      standardPrice: storedPrice ? storedPrice.standardPrice : spec.standardPrice,
      price: storedPrice ? storedPrice.price : spec.price
    }
  })
}

const isModified = () => {
  return localStorage.getItem(STORAGE_KEY) !== null
}

if (!state.initialized) {
  initializePrices()
}

window.addEventListener('storage', (e) => {
  if (e.key === STORAGE_KEY) {
    if (e.newValue) {
      state.prices = JSON.parse(e.newValue)
    } else {
      state.prices = getDefaultPrices()
    }
  }
})

export const usePriceStore = () => {
  return {
    state,
    updateProductPrice,
    resetToDefault,
    getProductSpecs,
    isModified
  }
}

export default {
  usePriceStore
}