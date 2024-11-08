import React from 'react'
import HeroImg from '../assets/Main-pic.jpg'
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

function Hero() {

    const config={
        subtitle:'Founder | Head of Operations of Blue Hutch | Java | Full Stack | Engineer',
        social:{
            email:'mailto:hariharandev02@gmail.com',
            linkedin:'https://www.linkedin.com/in/dev-hariharan-g/',
            github:'https://github.com/Hari-GS'
        }
    }

    return (
        <section className='flex flex-col md:flex-row px-5 md:py-32 py-20 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='md:w-1/2 text-white text-6xl font-hero-font'>Greetings! <br/>I'm Hari
                   <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='flex py-10'>
                    <a href={config.social.email} target="_blank" className='pr-5 hover:text-white'><AiOutlineMail size={40}/></a>
                    <a href={config.social.linkedin} target="_blank" className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                    <a href={config.social.github} target="_blank" className='hover:text-white'><AiOutlineGithub size={40}/></a>
                </div>
            </div>
            <img className='w-1/2 md:w-1/6 rounded-3xl mx-auto md:mx-0 mt-20 md:mt-0 my-0 custom-opacity' style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)' }} src={HeroImg}/>
 
        </section>
    )
}

export default Hero
