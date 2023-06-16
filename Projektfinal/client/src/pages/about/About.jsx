import Sidebar from '../../components/sidebar/Sidebar'
import './about.css'

export default function About() {

    return (
        <div className="about">
            <div className="aboutContainer">
                <h1 className="aboutTitle">About</h1>
                <p className="aboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex maiores quo labore repudiandae sed repellendus autem quasi corrupti exercitationem praesentium deleniti modi at dolores odit hic, ducimus, sunt cum?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, amet est. Temporibus iusto cumque cupiditate sapiente inventore, ratione praesentium aliquam nesciunt, libero magnam illum beatae. Quasi nesciunt numquam asperiores corrupti.</p>
            </div>
            <Sidebar />
        </div>
        
    )
}