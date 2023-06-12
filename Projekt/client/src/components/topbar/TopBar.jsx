import './topbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:8000/images/"


    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }

    

    
    return(
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (<Link className="link" to="/settings"><img className="topImg" src={user.profilePic? PF + user.profilePic : "https://cdn-icons-png.flaticon.com/512/147/147142.png"} alt=""/></Link>) : (
                    <ul className="topList">
                        <li className="topListItem">
                    <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                    <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}