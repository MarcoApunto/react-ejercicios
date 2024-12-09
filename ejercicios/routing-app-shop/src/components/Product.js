export default function Product({ product, onAddToproductList, showTotal }) {
	return (
	  <div className="product">
		<img src={product.image} alt={product.title} width="100" />
		<h3>{product.title}</h3>
		<p>${product.price}</p>
		<button onClick={() => {onAddToproductList(product); showTotal(true)}}>Añadir al carrito</button>
	  </div>
	);
  }