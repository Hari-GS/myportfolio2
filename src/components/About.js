import React from 'react'
import AboutImg from '../assets/Secondary-pic.jpg'

function About() {
    const config={
        line1:"I'm Hariharan G, Recent B.E. graduate in Computer Science and Engineering, with a strong foundation in Java, Data Structures, and a wide range of technologies including Spring Boot and React.",
        line2:'Passionate about full-stack development, mobile app creation, and I’m eager to apply my skills in a dynamic team environment.',
        line3:'Currently seeking opportunities to kickstart my career and contribute to innovative projects.'
    }

    return (
        <section id='about' className='flex flex-col md:flex-row bg-secondary md:px-0 px-3 md:py-20 py-20 justify-center'>
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
                            'JavaScript', 'C programming', 'Figma','Tailwind css'
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
