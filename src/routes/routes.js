import ProductDetail from '../components/ProductDetail'
import ProductsList from '../components/ProductsList'

export const routes = [
  { path: '/', component: ProductsList },
  { path: '/product/:productId', component: ProductDetail },
]
