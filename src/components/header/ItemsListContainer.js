import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li style={{ color: "white"}}>
                <Link to="category/Rifles"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/Pistolas">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/SMG">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/Cuchillos">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;