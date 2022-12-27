import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  selectedProduct,
  removeSelectedProduct,
  fetchProduct,
} from '../redux/actions/productActions'

const ProductDetail = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product)
  const { image, category, title, price, description } = product

  // const fetchProductDetail = async () => {
  //   try {
  //     const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`)
  //     dispatch(selectedProduct(data))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    if (productId && productId !== '') dispatch(fetchProduct(productId))
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header"> {category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content"></div>
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
