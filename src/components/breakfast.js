import { Link } from "react-router-dom"
import breakfast from "../breakfast.json"
import Button from "./button"


const Breakfast = () => {
    return (
        <>
        <Link to="/">
            <button> Back to Home</button>
        </Link>

            {breakfast.map((brekkie) => (
                <Button key={brekkie.id} text={`${brekkie.name} $${brekkie.precio}`} />
            )
            )}

        </>

    )
}
export default Breakfast