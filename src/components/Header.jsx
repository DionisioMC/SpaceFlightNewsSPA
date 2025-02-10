import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";

function Header() {
    const navigate = useNavigate();
    return(
        <>
            <header>
                <p>Space Flight News</p>

                <div id="pages">
                    <button type="button" onClick={() => navigate('/')}>Home Page</button>
                    <button type="button" onClick={() => navigate('/news')}>News</button>
                    <button type="button" onClick={() => navigate('/about')}>About</button>
                </div>
            </header>
        </>
    )
}
 
export default Header;