import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return(
        <h1 className="ItemListContainer text-center">{props.message}</h1>
    )
}
export default ItemListContainer;