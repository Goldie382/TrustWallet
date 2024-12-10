import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-white py-3 navbar-expand-lg sticky-top">
            <div className="container">
                <a href="#" className="navbar-brand">
                    <h2 className="logo">CoinsNest</h2> 
                </a>

                <button className="navbar-toggler nav-collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    {/* <span className="close py-1"><i className="ri ri-close-line"></i></span>  */}
                    <span className="close py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg close-svg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-4">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink to="about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink to="markets" className="nav-link">Markets</NavLink>
                        </li>
                        {/* <li className="nav-item me-4">
                            <a href="#news" className="nav-link">News</a>
                        </li>
                        <li className="nav-item me-4">
                            <a href="#about" className="nav-link">About</a>
                        </li> */}
                        <a href="" className="btn btn-primary ms-4">Language</a>
                    </ul>
                </div>
            </div>
        </nav>  
    )
}

export default Header