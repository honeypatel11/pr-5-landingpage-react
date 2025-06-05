import React from 'react'

const Responsive = () => {
    return (
        <section className='bg-responsive'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className='res-img'>
                            <img src="/image/application-phone.png" alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className=''>
                            <h2 className='fw-bold text-white fea-main-title'>
                                Full Responsive</h2>
                            <h2 className='fea-sub-title text-black'>Your landing page looks good on any device..</h2>
                        </div>
                        <div>
                            <p className='res-des'>Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore <br /> magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo <br /> dolores. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd <br />gubergren, no sea takimata sanctus.</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <div className=''>
                                <i className='fa fa-gift fs-5'></i>
                            </div>
                            <div>
                                <p className='text-white '>Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
                            </div>
                        </div>
                        <div className='d-flex gap-2'>
                            <div className=''>
                                <i className='fa fa-shield fs-5'></i>
                            </div>
                            <div>
                                <p className='text-white'>Dolore magna aliquyam erat, sed diam voluptua.</p>
                            </div>
                        </div>
                        <div className='d-flex gap-2'>
                            <div className=''>
                                <i className='fa fa-rocket fs-5'></i>
                            </div>
                            <div>
                                <p className='text-white'>Et justo duo dolores. At vero eos et accusam et justo duo dolores.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section >
    )
}

export default Responsive