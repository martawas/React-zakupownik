import commonColumnsStyles from "../../../common/styles/Columns.module.scss";

function ShopingList(props) {
  console.log(props);
  const list = props.shoppingList.map((product, index) => (
    <li
      onContextMenu={(e) => {
        e.preventDefault();
        props.setShoppingList((prev) => prev.toSpliced(index, 1));
      }}
      key={index}
    >
      {product}
    </li>
  ));
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        <ul>{list}</ul>
      </header>
    </div>
  );
}

export default ShopingList;
