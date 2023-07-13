export const Carousel = () => {
    return (
        <div className="bg-dark p-5">
        <div className='container mt-5'>
            <div className='homepage-carousel-title'>
                <h3 className="text-light">Hear what other has to say:</h3>
            </div>
            <div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 
                d-none d-lg-block' data-bs-interval='false'>

                {/* Desktop */}
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
                                <div className='text-center'>
                                    <img
                                        src={require('./../../images/png-clipart-the-family-guy-character-brian-griffin-peter-griffin-glenn-quagmire-family-guy-online-griffin-family-family-guy-s-tshirt-hand-thumbnail.png')}
                                        width='151'
                                        height='233'
                                        alt="book"
                                    />
                                    <h6 className='mt-2 text-light'>Peter Griffin</h6>
                                    <p className="text-warning">I was forced to go to GIT by my father to study engineering. Today as an employee at tesla I thank him.</p>
                                            <p className="text-light">Beng Computer Engineering</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
                                <div className='text-center'>
                                    <img
                                        src={require('./../../images/oqggjnjx85y61.jpg')}
                                        width='151'
                                        height='233'
                                        alt="happier person"
                                    />
                                    <h6 className='mt-2 text-light'>Dr. Peterson</h6>
                                    <p className="text-warning">"After medical school, I went to GIT to persue chemical engineering. Now ime an expert alchamist"</p>
                                    <p className="text-light">Beng Chemical Engineering</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
                                <div className='text-center'>
                                    <img
                                        src={require('./../../images/Top-10-family-guy-characters-feature-20080716024108003-000.webp')}
                                        width='151'
                                        height='233'
                                        alt="happiest person"
                                    />
                                    <h6 className='mt-2 text-light'>Quakmire Hues</h6>
                                    <p className="text-warning">"I am an computer scientist working for NASA today thanks to GIT."</p>
                                    <p className="text-light">Bsc Computer Science</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='carousel-control-prev  top-content icon-warning' type='button'
                        data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon-true' aria-hidden='true'></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className='carousel-control-next top-content' type= 'button'
                        data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                        <span className='carousel-control-next-icon-true' aria-hidden='true'></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
            </div>

            {/* Mobile */}
            <div className='d-lg-none mt-3'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='text-center'>
                        <img
                            src={require('./../../images/png-clipart-the-family-guy-character-brian-griffin-peter-griffin-glenn-quagmire-family-guy-online-griffin-family-family-guy-s-tshirt-hand-thumbnail.png')}
                            width='151'
                            height='233'
                            alt="Happpy person"
                        />
                        <h6 className='mt-2 text-light'>Quakmire</h6>
                        <p className="text-warning">I am an computer scientist working for NASA today thanks to GIT.</p>
                        
                    </div>
                </div>
            </div>
            </div>
            </div>
        
    );
}