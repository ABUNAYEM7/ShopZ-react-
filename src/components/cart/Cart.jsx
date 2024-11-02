import PropTypes from 'prop-types'

const Cart = ({storeCart,removeClickHandler}) => {
  return (
    <div className='max-w-screen-2xl mx-auto p-4 my-6 min-h-svh border-2'>
      <h3 className={storeCart.length === 0? 'text-red-700 font-bold text-3xl text-center' :'hidden'}>No Product Added</h3>
    {
        storeCart.map(product=> <div key={product.id} className="card w-2/4 shadow-xl md:flex-row  p-4">
            <figure >
              <img
              className='w-36 h-36 object-cover'
                src={product.image}
                alt={product.title} />
            </figure>
            <div className="card-body flex md:flex-row items-center justify-between gap-3">
              <h2 className="card-title">{product.title} </h2>
              <p className='text-lg font-semibold text-purple-700'>Price : {product.price}$</p>
              <p className={product.inStock? 'text-lg font-semibold ' :'text-lg font-semibold text-red-600'}>{product.inStock?'In Stock' : 'Stock Out' }</p>
              <div className="card-actions ">
                <button onClick={()=>removeClickHandler(product.id)} className="btn btn-error text-white">Remove</button>
              </div>
            </div>
          </div>)
    }
    </div>
  )
}

Cart.propTypes = {
    storeCart : PropTypes.array.isRequired,
    removeClickHandler : PropTypes.func.isRequired
}

export default Cart
