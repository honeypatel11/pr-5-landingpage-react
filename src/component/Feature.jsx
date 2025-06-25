import React from 'react'

const Feature = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='text-center'>
                                <h2 className='fw-bold fea-main-title'>A landing page for your product needs!</h2>
                                <h2 className='fea-sub-title'>Provide an option to buy your product and an easy way to contact you.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-6">
                            <div className=''>

                                <div>
                                    <div className='d-flex align-items-center '>
                                        <div className='mb-5 pb-2'>
                                            <i class="fa-solid fa-cart-shopping fs-1 fea-icon "></i>
                                        </div>
                                        <div>
                                            <h3 className='fea-des ms-4'>Sell your product online</h3>
                                            <p className='mt-3 ms-4 my-4 fea-description'>Describe your product and provide potential customers a way to <br /> contact you.</p>
                                        </div>
                                    </div>

                                    <div className='d-flex align-items-center'>
                                        <div className='mb-5 pb-2'>
                                            <i class="fa fa-cogs fs-1 fea-icon"></i>
                                        </div>
                                        <div>
                                            <h3 className='fea-des ms-4'>Very easy to customize</h3>
                                            <p className='mt-3 my-4 ms-4 fea-description'>Take full control over your site. Build any layout you can imagine with <br /> intuitive drag and drop editor.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <div className='mb-5 pb-2'>
                                            <i class="fa-brands fa-youtube fs-1 fea-icon"></i>
                                        </div>
                                        <div>
                                            <h3 className='fea-des ms-4'>Video support</h3>
                                            <p className='mt-3 my-4 ms-4 fea-description'>Embed videos from YouTube, Vimeo and other sources to enhance <br />your landing page.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div>
                                <img src="./image/Feature-img.png" alt="" />
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Feature