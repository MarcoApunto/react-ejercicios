export default function Product({ product, onAddToCart }) {
	return (
	  <div className="product">
		<img src={product.image} alt={product.title} width="100" />
		<h3>{product.title}</h3>
		<p>${product.price}</p>
		<button onClick={() => onAddToCart(product.price)}>Añadir al carrito</button>
	  </div>
	);
  }