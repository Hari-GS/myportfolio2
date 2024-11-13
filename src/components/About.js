import React from 'react'
import AboutImg from '../assets/Secondary-pic.jpg'

function About() {
    const config={
        line1:"I'm a recent B.E. graduate in Computer Science and Engineering with a strong foundation in Java Full Stack Development (Spring Boot, React) and experience in mobile app creation. Currently, I'm open to work.",
        line2:'I’m passionate about applying my skills within a dynamic team environment in my job',
        line3:'I’m actively seeking a software engineering position where I can grow my career and contribute to impactful projects'
    }

    return (
        <section id='about' className='flex flex-col md:flex-row bg-secondary md:px-0 px-3 md:pt-24 md:py-20 py-16 justify-center'>
            <div className='flex justify-center items-center w-full md:w-1/2'>
                <img className='rounded-xl md:w-3/5 w-4/5' src={AboutImg}/>
            </div>
            <div className='flex flex-col w-full md:w-1/2 md:pr-5 pr-0 text-white md:pt-0 pt-10'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold text-center'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                <div className='flex flex-col mt-5'>
                    <h2 className='text-2xl mb-3'>Technical Skills</h2>
                    <ul className='flex flex-wrap'>
                        {[
                            'Java', 'Spring Boot', 'React Native', 'Rest API',
                            'SQL', 'MongoDB', 'HTML', 'CSS', 'React Js',
                            'JavaScript','Spring Security', 'C programming','C++', 'Figma','Tailwind css'
                        ].map(skill => (
                            <li key={skill} className='m-2 bg-white rounded-full px-5 text-black'>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
