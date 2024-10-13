import React from 'react';

export default function Header() {
    return (
        <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">
                        Find A <span className="text-primary">Perfect Home</span> To Live With Your Family
                    </h1>
                    <p className="animated fadeIn mb-4 pb-2">
                        Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                    </p>
                    <a href="https://www.free-css.com/free-css-templates" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
                </div>
                <div className="col-md-6 animated fadeIn">
                    <div className="owl-carousel header-carousel owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                            <div className="owl-stage" style={{ transform: 'translate3d(-1054px, 0px, 0px)', transition: 'all', width: '3162px' }}>
                                <div className="owl-item cloned" style={{ width: '527px' }}>
                                    <div className="owl-carousel-item">
                                        <img className="img-fluid" src="img/carousel-1.jpg" alt="website template image" />
                                    </div>
                                </div>
                                <div className="owl-item cloned" style={{ width: '527px' }}>
                                    <div className="owl-carousel-item">
                                        <img className="img-fluid" src="img/carousel-2.jpg" alt="website template image" />
                                    </div>
                                </div>
                                <div className="owl-item active" style={{ width: '527px' }}>
                                    <div className="owl-carousel-item">
                                        <img className="img-fluid" src="img/carousel-1.jpg" alt="website template image" />
                                    </div>
                                </div>
                                <div className="owl-item" style={{ width: '527px' }}>
                                    <div className="owl-carousel-item">
                                        <img className="img-fluid" src="img/carousel-2.jpg" alt="website template image" />
                                    </div>
                                </div>
                                <div className="owl-item cloned" style={{ width: '527px' }}>
                                    <div className="owl-carousel-item">
                                        <img className="img-fluid" src="img/carousel-1.jpg" alt="website template image" />
                                    </div>
                                </div>
                                <div className="owl-item cloned" style={{ width: '527px' }}>
                                    <div className="owl-carousel-item">
                                        <img className="img-fluid" src="img/carousel-2.jpg" alt="website template image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-nav">
                            <div className="owl-prev">
                                <i className="bi bi-chevron-left"></i>
                            </div>
                            <div className="owl-next">
                                <i className="bi bi-chevron-right"></i>
                            </div>
                        </div>
                        <div className="owl-dots">
                            <div className="owl-dot active">
                                <span></span>
                            </div>
                            <div className="owl-dot">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
