import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const ProductComponent = () => {
  // k
  const products = useSelector((state) => state.allProducts.Products)
  const params = useParams()
  const renderList = products.map((product) => {
    const { title, price, category, id, image } = product
    return (
      <div key={id} className="four wide column">
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">{price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  })

  return <>{renderList}</>
}

export default ProductComponent
