import { Link, useNavigate } from "react-router-dom";
import Logo from "./assets";

export default function Menu () {
    const navigate = useNavigate();

    return (
        <div>
            <img src={Logo} alt="Logo" />
            <Link to="dashboard" >
            <button>Dashboard</button>
            </Link>
            <Link to= "/">
                <button>Unidade consumidora</button>
                </Link>
                <button onClick={()=> navigate("/")}>Cadastro de energia gerada</button>
        </div>
    );
};