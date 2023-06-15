import "./sidebar.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Sidebar() {
    const [cat, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://as2.ftcdn.net/v2/jpg/02/19/70/25/1000_F_219702545_nb5bzV8qvnaWS0TSZ5avxf57c2sOGjIt.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                <Link to={`/?cat=Music`} className="link">
                {cat.map((c) => (
                    <li className="sidebarListItem">{c.name}</li>
                ))}
                </Link>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <a href="https://www.google.pl" target="_blank" rel="noreferrer"><i className="sidebarIcon fa-brands fa-square-facebook"></i></a>
            <a href="https://www.google.pl" target="_blank" rel="noreferrer"><i className="sidebarIcon fa-brands fa-square-twitter"></i></a>
            <a href="https://www.google.pl" target="_blank" rel="noreferrer"><i className="sidebarIcon fa-brands fa-square-instagram"></i></a>
            <a href="https://www.linkedin.com/in/mbartoszek/" target="_blank" rel="noreferrer"><i className="sidebarIcon fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}