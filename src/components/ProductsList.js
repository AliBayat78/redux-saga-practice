import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useEffect } from 'react'
import { setProducts, fetchProducts } from '../redux/actions/productActions'

const ProductsList = () => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()

  // const fetchProducts = async () => {
  //   try {
  //     const { data } = await axios.get('https://fakestoreapi.com/products')
  //     dispatch(setProducts(data))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductsList
