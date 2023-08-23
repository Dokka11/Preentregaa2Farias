import brand from "../../img/brand.svg";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="CSGO BM" title="CSGOBM"></img>
        </Link>
    )
}

export default Brand;