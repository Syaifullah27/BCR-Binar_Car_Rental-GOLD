import { Link } from "react-router-dom"
import "./button.css"
const Button = () => {
    return (
        <Link className="btn" to={"/search-cars"}>Mulai Sewa Mobil</Link>
    )
}

export default Button