

function Sidebar({fontSize, fontColor, handleFontSizeChange, handleFontColorChange, ustawRozowe}){

    return (
        <div className="sidebar">
            <h2>Pasek boczny</h2>
            <input type="text" value={fontSize} onChange={handleFontSizeChange}/>
            <input type="text" value={fontColor} onChange={handleFontColorChange} />
            <button onClick={ustawRozowe}>Ustaw parametry textu na 20px i pink</button>
        </div>
    )
}

export default Sidebar;