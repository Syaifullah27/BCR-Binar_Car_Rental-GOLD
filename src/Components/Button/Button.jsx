import { Link } from "react-router-dom"
import "./button.css"
const Button = () => {
    return (
        <Link className="btn" to={"/rentals-cars"}>Mulai Sewa Mobil</Link>
    )
}

export default Button