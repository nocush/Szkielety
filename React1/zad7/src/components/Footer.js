

function Footer({handleFontChange, onLikeClick}) {
    return (
        <footer className="footer">
            <p>Stopka <button onClick={handleFontChange}>Ustaw parametry tekstu na 30px a kolor pozostaw bez zmian</button></p>
            <p>
                <button onClick={onLikeClick}>Polub tę stronę!</button>
            </p>
        </footer>
    )
}

export default Footer;