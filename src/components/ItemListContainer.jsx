import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [titulo, setTitulo] = useState("Productos");
  const [productos, setProductos] = useState([]);

  const category = useParams().category;

  useEffect(() => {

    const productsDb = collection(db, "productos");
    const q = category ? query(productsDb, where("category", "==", category)) : productsDb;

    const tit = category ? category : "Productos";
    setTitulo(tit);

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })

  }, [category])


  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer