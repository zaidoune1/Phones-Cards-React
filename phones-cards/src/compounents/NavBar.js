import {FaShoppingBag} from "react-icons/fa"
import { HookContext } from "../contexe/Context";
import "../styles/navBar.css";
const NavBar = () => {

    const {state:{allDatas}} = HookContext()

    return (
        <>
            <nav className="nav">
                <p className="logo" onClick={() => {
                    window.location.reload();
                }}> Shopping-card </p>
                <div className="card-icone">
                    <FaShoppingBag className="icone"/>
                    <span className="number-amount"> {allDatas.length}</span>
                </div>
            </nav>
        </>
    )
    }

export default NavBar