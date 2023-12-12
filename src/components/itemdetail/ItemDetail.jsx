import Item from "../item/Item";

const ItemDetail = ({ item }) => {
    return (
        <div className="container row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Item producto={item} key={item.id} />
        </div>
    )
}

export default ItemDetail