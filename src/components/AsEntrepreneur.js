import React from 'react'
import logo from '../assets/blue logo.png'

function AsEntrepreneur() {
    return (
        <section id='asEntrepreneur' className='text-white flex flex-col md:flex-row bg-secondary md:px-20 px-3 md:pt-10 py-0 md:pb-28 pb-14 justify-between'>
            <div className='md:w-1/2'>
            <div >
                <h1 className='md:text-4xl text-xl border-b-4 border-primary mb-5 md:w-[400px] w-[220px] font-bold md:text-center text-left'>Me As a Entrepreneur</h1>
                <p>It all started with a boy who has a passion for software development but knew he didn’t want to be confined to a traditional 9-to-5 job. Driven by a vision to create something impactful, 
                I built this platform to connect those in need of quality digital solutions with reliable, affordable services. Me and My small team specialized in developing custom websites and web applications 
                tailored to you and your business needs. Whether you're a startup or an established brand, we’re here to bring your vision to life with dedication and precision. As we embark on this journey, our 
                focus is on delivering reliability and building trust with our clients, prioritizing long-term relationships over short-term profits, That's why we are doing this at highly affordable price. We're
                excited to start small, but we have big expansion plans for the future. Give us the opportunity to serve you, and let’s create something amazing together. Thank you for considering us.</p>
            </div>
            <div>
                <h1 className='md:text-4xl text-2xl pt-14 font-bold'>Hari & Team</h1>
                <h5 className="text-white md:text-2xl text-l md:pt-3 pt-1">The Developers team You'll Ever Need</h5>
            </div>
            </div>
            <div>
                <div className='flex flex-row space-x-5 text-blue-800 bg-white p-5 md:mt-0 mt-6 rounded-xl'>
                    <img src={logo} className='md:w-[150px] w-[130px]'/>
                    <h1 className='text-3xl font-bold md:pt-14 pt-7'>Blue Hutch</h1>
                </div>
                <div className="flex-shrink-0 text-center md:pt-10 py-3 md:text-center">
                    <p className="text-[24px] text-white font-bold">We do Websites / Apps for You !</p>
                    <p className="md:text-[17px] text-base pt-5">For Orders : <br/>+91 6369312803 - WhatsApp preferred<br/>Email : bluehutch01@gmail.com</p>
                    <p className='pt-5'>Visit Blue Hutch - </p><a target='_blank' className='hover:text-amber-200' href='https://blue-hutch-notice.onrender.com/'>https://blue-hutch-notice.onrender.com/</a>
                </div>
            </div>
        </section>
    )
}

export default AsEntrepreneur
