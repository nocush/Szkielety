import './Card.css'
import Card from './Card'



function App(){
    return(
        <div>
            <Card name="Alan Turing" img="https://mdz.cs.pollub.pl/ai/alan_turing.jpg" date="1912 - 1954" job="Matematyk" country="Anglia"/>
            <Card name="Niklaus Wirth" img="https://mdz.cs.pollub.pl/ai/nicolas_wirth.jpg" date="1934 - ?" job="Elektronik i informatyk" country="Szwajcaria"/>
            <Card name="Dennis Ritchie" img="https://mdz.cs.pollub.pl/ai/dennis_ritchie.jpg" date="1941 - 2011" job="Matematyk, fizyk i informatyk" country="USA"/>
            <Card name="Bjarne Stroustrup" img="https://mdz.cs.pollub.pl/ai/bjarne_stroustrup.jpg" date="1950 - ?" job="Informatyk" country="Dania"/>
        </div>
    )

}

export default App