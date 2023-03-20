import './Nav.css';

export default () => {
    return (
        <nav className="navigation container">
            <ul>
                <img style={{paddingLeft:'1rem', paddingRight:'1rem', height:'80px'}} src="images/c&r.png" alt="C & R" />
            </ul>
            <ul>
                <li><a href="#">Directions</a></li>
                <li><a href="#">Accommodation</a></li>
                <li><a href="#" role="button">RSVP</a></li>
            </ul>
        </nav>
    )
}