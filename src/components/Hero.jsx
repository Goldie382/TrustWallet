


const Hero = () => {


  return (
    <section className="section">
        <div className="container">
            <div className="row hero-row p-2 align-items-center justify-content-center" style={{backgroundColor: `rgb(5 0 255)`}}>
                <div className="col-lg-5 order-lg-first order-last">
                    <h1>Crypto-currencies by market cap</h1>
                    <p className="mt-3">The global cryptocurrency market cap today is $2.49 Trillion</p>
                </div>
                <div className="col-lg-6">
                    <img src="/Bitcoin_Camera1.png" alt="hero-image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero