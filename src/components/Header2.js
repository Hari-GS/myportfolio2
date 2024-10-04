import React, { useState } from 'react'
import '../App.css';

const Nav = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"About",link:"#about"},
      {name:"Projects",link:"#projects"},
      {name:"Resume",link:"#resume"},
      {name:"Contact",link:"#contact"},
    ];

    const [toggleMenu, setToggleMenu]= useState(false)
  
    return (
    <div className='w-full top-0 left-0'>
      <div className='md:flex items-center justify-between bg-primary py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl flex items-center font-[Poppins] 
      text-black'>
        Hariharan G
      </div>
      
      <div onClick={()=>setToggleMenu(!toggleMenu)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
        <ion-icon name={toggleMenu?'close' : 'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 absolute md:static bg-primary md:z-auto z-[50] left-0 w-full md:w-auto md:pl-0 px-3 transition-all duration-500 ease-in ${toggleMenu ? 'top-16':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li onClick={()=>setToggleMenu(!toggleMenu)} key={link.name} className='md:ml-8 text-xl md:my-0 py-2 my-2 text-center rounded-md'>
              <a href={link.link} className='md:text-black text-white md:bg- hover:text-white duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Nav