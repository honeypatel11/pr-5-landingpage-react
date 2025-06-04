import React from 'react'

const Startup = () => {
  return (
    <>
        <section className='home-page pb-5 mb-5'>
            <div className='container'>
                <div className='logoname text-center pt-5'>
                    <img src="/image/web-app-logo.png " alt="Logo"  className='pt-5'/>
                    <p className='text-white pt-4 fs-3'>The Most Advanced and Powerful Way to Launch Your Startup </p>
                </div>
                <div className='text-center pt-4'>
                    <button className='btn btn-danger' >Download</button>
                    <button className='btn ms-2'>Take a tour</button>
                </div>
                <div className=' home-imge text-center'>
                    <img src="./public/image/application-image.png" alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Startup