import './memeCard.css';
import meme from './mqdefault.jpg';

function MemeCard () {
    return (
        <div className="card-container">
            <div className="meme-card">
                <img src={meme} alt="meme" />
                <h1>Noooooo....</h1>
            </div>
        </div>
    )
}

export default MemeCard;