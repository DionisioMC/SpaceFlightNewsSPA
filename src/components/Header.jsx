import { useNavigate } from "react-router-dom";

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