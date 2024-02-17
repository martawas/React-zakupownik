import commonColumnsStyles from "../../../common/styles/Columns.module.scss";
import produkty from "../../../common/consts/produkty";

function ProductsList(props) {
  const productsList = produkty.map((product, index) => (
    <li
      onClick={() => {
        props.setShoppingList((prev) => [...prev, product.nazwa]);
      }}
      key={index}
    >
      {product.nazwa}
    </li>
  ));

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        <ul>{productsList}</ul>
      </header>
    </div>
  );
}

export default ProductsList;
