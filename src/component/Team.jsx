import React from 'react'

const Team = () => {
  return (
   <section className='team-bg'>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div>
                    <h2 className='team-title text-center mt-4 fw-bold'>Meet Our Team</h2>
                </div>
                <div>
                    <h2 className='team-des'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod <br />tincidunt ut laoreet dolore magna aliquam erat volutpat.</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <div>
                <div className='profile-img'>
                    <img src="/image/profile1.jpg" alt="" />
                </div>
                <div></div>
                </div>
            </div>
            <div className="col-6">
                <div></div>
            </div>
        </div>

    </div>
   </section>
  )
}

export default Team