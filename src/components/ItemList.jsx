import Item from "./Item";
import { toCapital } from "../helpers/toCapital";

const ItemList = ({ productos, titulo }) => {

    return (
        <div>
            <h2 className="main-title">{toCapital(titulo)}</h2>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-2 justify-items-center justify-center"
            // className="grid justify-items-center justify-center grid-cols-auto-fit-minmax gap-6 p-8"
            >
                {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
            </div>
        </div>
    )
}

export default ItemList