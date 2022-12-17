import tentaVille from '../images/tentaVille.png';
import paTenta from '../images/paTenta.png'
import tentaKevin from '../images/tentaKevin.png';
import tentaJohan from '../images/tentaJohan.png';

function aboutView(){

    function generateCard(picture, firstname, lastname, email) {
        return <div className="card">
            <div className="cardImageContainer">
                <img src={picture} alt={firstname}/>
            </div>
            <span className="name">{firstname} {lastname}</span>
            <span className="email"><a href={"mailto:" + email}>{email}</a></span>
        </div>
    }

    return (
        <div id="about">
            <h2>About</h2>
            <p>Recherché means exotic or obscure. It is a game made by four computer engineering students
                at KTH.</p>
            <div id="cardContainer">
                {generateCard(tentaVille, "Vilhelmina", "Andersson", "viland@kth.se")}
                {generateCard(paTenta, "Patricia", "Lagerhult", "patlag@kth.se")}
                {generateCard(tentaKevin, "Kevin", "O'Flaherty", "kevinof@kth.se")}
                {generateCard(tentaJohan, "Johan", "Seller Fredlund", "johansf@kth.se")}
            </div>
            <p>Recherché is built with <a href="https://www.wordnik.com/words/code">Wordnik API</a>.</p>
        </div>
    );
}
export default aboutView;