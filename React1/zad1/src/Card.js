function Card(prop){
    return(
        <div className = "Card">
            <h2>{prop.name}</h2>
            <img src = {prop.img} alt={prop.name}/>
            <p>{prop.date}</p>
            <p>{prop.job}</p>
            <p>{prop.country}</p>
        </div>
    )
}

export default Card