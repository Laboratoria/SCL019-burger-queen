 import lunch from "../lunch.json"
import Button from "./button"
import { Link } from "react-router-dom"
const Lunch = () => {
    return (
        <>
         <Link to="/">
            <button> Back to Home</button>
        </Link>
            {lunch.map((lunchito) => (
                <Button key={lunchito.id} text={`${lunchito.name} $${lunchito.precio}`} />
            )
            )}

        </>

    )
}
export default Lunch 