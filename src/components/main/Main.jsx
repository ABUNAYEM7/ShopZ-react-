import PropTypes from 'prop-types'
import Card from '../card/Card'

const Main = ({products,addClickHandler}) => {
    
  return (
    <div >
        <h3 className='my-3 text-3xl font-bold text-center text-purple-600'>Exclusive Products</h3>
        <div className='max-w-screen-2xl mx-auto border-b-2 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
        {products.map(product=> <Card key={product.id}
                                    product ={product}
                                    addClickHandler ={addClickHandler}
                                    />)}
        </div>
    </div>
  )
}

Main.propTypes = {
    products : PropTypes.array.isRequired,
    addClickHandler : PropTypes.func.isRequired,
}

export default Main
