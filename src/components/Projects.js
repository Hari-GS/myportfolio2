import React from 'react'
import websiteimg1 from '../assets/tour-website-home-page.jpg'
import websiteimg2 from '../assets/tholan page.jpg'
import websiteimg3 from '../assets/BH home page.png'
import websiteimg4 from '../assets/em games home page.png'

function Projects() {

    const config={
        projects: [
            {
                image: websiteimg4,
                title:'Embedded Games Web Application',
                line1: '- Its a Freelance project. I Developed a full-stack web application featuring 10+ embedded games, complete with user authentication, interactive like button, and a comment section that supports over 500 active users. ',
                line2: '- Designed with dynamic, responsive elements, increasing user engagement by 40%. Integrated a scalable backend to handle up to 1,000 concurrent users, ensuring a seamless gaming experience.',
                line3: '',
                gitlink:"",
                gitlinksText:"",
                gitlink2: "",
                gitlinksText2 : "",
                techstack: "HTML | CSS | JavaScript | Java Spring Boot | MongoDB" ,
                livelink: "",
                livelinktext: "",
                demoVideoText: "",
                demoVideoLink: "",
                liveLinkLabel : '',
                demoLabel : ' ',
                demoClicker : ''
            },
            {
                image: websiteimg1,
                title:'Voyage Planner : Travel Booking System',
                line1: '- Designed a tour travel Web App',
                line2: '- Allows users to book tour trips conveniently, complete with a sign-in option for a personalized experience.',
                line3: '- Integrated a robust booking engine, reducing booking time by 40% and enhancing user satisfaction. Optimized the application for scalability, handling up to 10,000 concurrent users.',
                gitlink:"https://github.com/Hari-GS/e-com.git",
                gitlinksText:"https://github.com/Hari-GS/e-com.git",
                gitlink2: "https://github.com/Hari-GS/tour-app-api.git",
                gitlinksText2 : "https://github.com/Hari-GS/tour-app-api.git",
                techstack: "React js | Java Springboot | MongoDB" ,
                livelink: "https://seego-e-com.onrender.com",
                livelinktext: "https://seego-e-com.onrender.com",
                demoVideoText: "https://www.linkedin.com/posts/dev-hariharan-g_greetings-here-i-have-designed-a-tour-travel-activity-7172231123815612417-z3Vm?utm_source=share&utm_medium=member_desktop",
                demoVideoLink: "https://www.linkedin.com/posts/dev-hariharan-g_greetings-here-i-have-designed-a-tour-travel-activity-7172231123815612417-z3Vm?utm_source=share&utm_medium=member_desktop",
                liveLinkLabel : 'Live link :',
                demoLabel : 'Demo Video : ',
                demoClicker : 'Click here'
            },
            {
                image: websiteimg2,
                title:'Tholan : Agricultural Crops Suggester',
                line1:'- Developed a mobile app that leverages historical data analysis to assess location-specific metrics like climate, weather conditions, soil type, and market availability.',
                line2: '- Implemented a recommendation engine that provides tailored crop suggestions, leading to a potential increase in agricultural yield by up to 30%.',
                line3: '- Based on this analysis, it will recommend suitable crops along with detailed information about them.',
                gitlink:"https://github.com/Hari-GS/Tholan-app",
                gitlinksText:"https://github.com/Hari-GS/Tholan-app",
                gitlink2: "https://github.com/Hari-GS/Tholan-API",
                gitlinksText2 : "https://github.com/Hari-GS/Tholan-API",
                techstack: "React Native | Java Springboot | MongoDB",
                livelink: "",
                livelinktext: "",
                demoVideoLink: "https://www.linkedin.com/posts/dev-hariharan-g_agriculturalinnovation-finalyearproject-tholan-activity-7218275881427902464-NDih?utm_source=share&utm_medium=member_desktop",
                demoVideoText: "https://www.linkedin.com/posts/dev-hariharan-g_agriculturalinnovation-finalyearproject-tholan-activity-7218275881427902464-NDih?utm_source=share&utm_medium=member_desktop",
                demoLabel : 'Demo Video : ',
                demoClicker : 'Click here'
            },
            {
                image: websiteimg3,
                title:'My Agency Webpage',
                line1:'- Designed and developed a responsive and visually engaging webpage for my web development agency, showcasing services, projects, and contact information.',
                line2: '- Integrated user-friendly navigation and modern UI/UX principles to create an impactful online presence.',
                line3: '- Built using React.js and Tailwind CSS, ensuring scalability and performance optimization',
                gitlink:"https://github.com/Hari-GS/blue-hutch-notice",
                gitlinksText:"https://github.com/Hari-GS/blue-hutch-notice",
                gitlink2: "",
                gitlinksText2 : "",
                techstack: "React js | TailWind CSS",
                livelink: "",
                livelinktext: "",
                demoVideoLink: "",
                demoVideoText: "",
                demoLabel : '',
                demoClicker : ''
            }
        ]
    }

    return (
        <section id='projects' className='flex flex-col md:py-24 py-12 md:px-5 px-2 justify-center bg-primary text-white'>
            <div className='w-full'>
                <div className='flex flex-col py-7 md:px-10 px-2'>
                    <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
                    <p>These are some of the major projects I have developed, utilizing a diverse set of technologies</p>
                </div>
            </div>
            <div className='w-full'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-10">
  {config.projects.map((projects) => (
    <div className="relative bg-secondary rounded-2xl px-5 py-5 flex flex-col items-center w-full min-h-[600px]">
      <img className="w-[500px]" src={projects.image} />
      <div>
        <h1 className="text-center text-xl font-bold py-5">{projects.title}</h1>
        <p>{projects.line1}</p>
        <br />
        <p>{projects.line2}</p>
        <br />
        <p>{projects.line3}</p>
        <br />
        <p className="font-bold">Tech Stack :</p>
        <p>{projects.techstack}</p>
        <br />
        <p className="font-bold">Git Repository :</p>
        <a target="_blank" className="hover:text-amber-200" href={projects.gitlink}>
          {projects.gitlinksText}
        </a>
        <br />
        <a target="_blank" className="hover:text-amber-200" href={projects.gitlink2}>
          {projects.gitlinksText2}
        </a>
        <br />
        <br />
        <p className="font-bold">
          {projects.demoLabel}
          <a className="hover:text-amber-200 font-normal" target="_blank" href={projects.demoVideoLink}>
            {projects.demoClicker}
          </a>
        </p>
        <br />
        <p className="font-bold">
          {projects.liveLinkLabel}
          <a className="hover:text-amber-200 font-normal" target="_blank" href={projects.livelink}>
            {projects.livelinktext}
          </a>
        </p>
      </div>
    </div>
  ))}
</div>

            </div>
        </section>
    )
}

export default Projects
