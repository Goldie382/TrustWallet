
const Footer = () => {
  return (
    <footer>
        <div className="footer-top">
            <div className="container">
                <div className="row gy-4 px-3 footer-row" style={{backgroundColor: "#f1f1f1"}}>
                    <div className="col-md-4">
                        <h2 className="logo">CoinsNest</h2>
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3 footer-item">
                                <h6>Wallet</h6>
                                <ul className="list-unstyled">
                                    <li><a href="">Mobile App</a></li>
                                    <li><a href="">Browser</a></li>
                                    <li><a href="">Extension</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 footer-item">
                                <h6>Features</h6>
                                <ul className="list-unstyled">
                                    <li><a href="">NFTs // web3</a></li>
                                    <li><a href="">Buy Crypto</a></li>
                                    <li><a href="">ETFs</a></li>
                                </ul>
                            </div>

                            <div className="col-md-3 footer-item">
                                <h6>Build</h6>
                                <ul className="list-unstyled">
                                    <li><a href="">Developer Docs</a></li>
                                    <li><a href="">SDK</a></li>
                                    <li><a href="">API keys</a></li>
                                </ul>
                            </div>

                            <div className="col-md-3 footer-item">
                                <h6>Support</h6>
                                <ul className="list-unstyled">
                                    <li><a href="">FAQ</a></li>
                                    <li><a href="">Community Forum</a></li>
                                    <li><a href="">Contact Us</a></li>
                                </ul>
                            </div> 
                        </div> 


                        <div className="row justify-content-between mt-5">
                            <div className="col-auto">
                                <button className="btn btn-outline footer-download-button">Download for Android <i className="ri ri-google-play-fill"></i></button>
                                <button className="btn btn-outline footer-download-button">Download for iOS <i className="ri ri-apple-fill"></i></button>
                            </div>
                            <div className="col-auto">
                                <div className="social-links ms-auto">
                                    <a href=""><i className="ri-twitter-fill"></i></a>
                                    <a href=""><i className="ri-linkedin-fill"></i></a>
                                    <a href=""><i className="ri-github-fill"></i></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer