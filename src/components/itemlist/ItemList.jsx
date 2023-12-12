import Item from "../item/Item";
import { toCapital } from "../../helpers/toCapital";

const ItemList = ({ productos, titulo }) => {

    return (
        <section id={titulo} className="py-0">
            <div className="container">
                <div id="catalogo" className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {productos.map((prod) => <Item producto={prod} seeMore={true} key={prod.id} />)}
                </div>
            </div>
        </section>
    )
}

export default ItemList