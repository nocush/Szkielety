

function MainArea(props){
    console.log(props.fontSize, props.color);
    
    return(
        <div className="main-area">
            <h1>Główna część strony</h1>
            <p style={{fontSize: props.fontSize, color: props.color}}>Szkielety programistyczne w aplikacjach internetowych: Node, MongoDB, Express, React</p>
        </div>
    )
}

export default MainArea;