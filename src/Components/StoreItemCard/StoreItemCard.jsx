import { useNavigate } from "react-router-dom";
import "./StoreItemCard.css";

const StoreItemCard = ({ product, isCourse}) => {
  const navigate = useNavigate();

  function navigation () {
    if (isCourse) {
      navigate(`/courses/${product.id}`)
    } else {
      navigate(`/products/${product.id}`)
    }
  };

  return (
    <div
      className="product-card"
      onClick={() => navigation()}
    >
      <div className="product-image-wrapper">
        {product?.soldOut === true  && <span className="sold-out">SOLD OUT</span>}

        <img
          className="product-image"
          src={product?.image}
          alt={product?.title}
        />
      </div>

      <div className="product-info">
        <p className="username">{product?.username }</p>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default StoreItemCard;