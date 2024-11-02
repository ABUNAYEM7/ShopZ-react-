import PropTypes from "prop-types";

const Card = ({ product,addClickHandler}) => {
  return (
    <div className="my-6 p-4">
      <div className="card card-compact max-w-96 shadow-xl">
        <figure className="max-h-80 object-cover">
          <img
            src={product.image}
          />
        </figure>
        <div className="card-body items-center space-y-3">
          <h2 className="card-title text-2xl font-bold">{product.title}</h2>
          <p className="text-xl text-center">{product.description}</p>
          <p className="text-xl font-semibold">Price : {product.price}$</p>
          <p className={product.inStock? 'text-xl font-semibold text-purple-600' :'text-xl font-semibold text-red-500'}>{product.inStock ? 'In Stoke' : 'Stock Out'}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>addClickHandler(product)} className="btn bg-purple-600 text-white ">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
  addClickHandler : PropTypes.func.isRequired
};

export default Card;
