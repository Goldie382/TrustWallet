

const Simple = () => {


  return (
    <section className="section">
        <div className="container">
            <div className="row hi-five hero-row align-items-center justify-content-center py-2 py-md-3 px-4" style={{backgroundColor: "rgb(5 0 255)"}}>

                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div style={{width: "300px"}}>
                        <p className="cta-text">Simple and convenient to use. Seamless to explore.</p>
                    </div>
                    
                    <a href="" style={{width: "unset", cursor: "none"}}>
                        <img src="/devsupport.svg" className="hi5-img"  alt="" />
                    </a>
                    
                    <button className="btn btn-primary download-btn">Download</button>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Simple