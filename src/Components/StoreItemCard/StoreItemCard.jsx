import { useNavigate } from "react-router-dom";
import "./StoreItemCard.css";

const StoreItemCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/products/${product.id}`)}
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