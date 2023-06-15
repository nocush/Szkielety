import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Szkielety programistyczne</span>
                <span className="headerTitleLg">BLOG</span>
            </div>
            <img className="headerImg" src="https://media.istockphoto.com/id/1371944453/pl/wektor/niebieskie-tło-fali-abstrakcyjnej.jpg?s=612x612&w=0&k=20&c=ruKwVIUkYvQT0dqmI93UWJpF5wBN9Cfueg56pq_MFCI=" alt="mountains" />
        </div>
    );
    }