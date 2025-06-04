const Header = () => {
    return (
        <section className='header'>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center ">
                   
                    <div className='logo'>
                        <img src="/image/leadinjeciton-logo.svg" alt="Logo" />
                    </div>

                    <div className="">
                        <ul className="d-flex gap-4 py-3 align-items-center justify-content-center list-unstyled m-0 ">
                            <li className="nav">Home</li>
                            <li className="nav">Features</li>
                            <li className="nav">How it works</li>
                            <li className="nav">Pricing</li>
                            <li className="nav">Blog</li>
                            <li>
                                <button className="buy">Buy Leadinjection Now</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;
