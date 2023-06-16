import Sidebar from '../../components/sidebar/Sidebar'
import './contact.css'

export default function Contact() {

    return(
        <div className="contact">
            <div className="contactContainer">
                <h1 className="contactTitle">Contact</h1>
                <div className="contactText">
                <i class="fa-solid fa-phone fa-2xl"></i>
                <p >555-555-5555</p>
                </div>
                <div className="contactText">
                <i class="fa-solid fa-envelope fa-2xl"></i>
                <p>contact@blog.com</p>
                </div>
                </div>
            <Sidebar />
        </div>
    )
}

