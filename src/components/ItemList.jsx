import Item from "./Item";
import { toCapital } from "../helpers/toCapital";

const ItemList = ({ productos, titulo }) => {

    return (
        <section id={titulo} className="py-0">
            <div className="container">
                <div id="catalogo" className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {productos.map((prod) => <Item producto={prod} seeMore={true} key={prod.id} />)}
                </div>
            </div>
        </section>

        // <section id={titulo} className="py-1">
        //     <div className="container px-4 px-lg-5 mt-5">
        //         <div id="catalogo" className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        //             {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        //         </div>
        //     </div>
        // </section>

        // <section id={titulo} className="">
        //     <div className="card-group p-0 m-0">
        //         <div id="catalogo" className="container d-flex flex-wrap">
        //             {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        //         </div>
        //     </div>
        // </section>
    )
}

export default ItemList